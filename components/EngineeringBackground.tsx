"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme";

// "The system behind the product": a quiet network of nodes, circuit-like links and data packets.
// Canvas 2D + one rAF loop; paused when the tab is hidden, static under prefers-reduced-motion,
// and much sparser on small screens.

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  depth: number; // 0.3–1, drives size, parallax and speed
  box: boolean; // drawn as a small "component" square instead of a dot
  label?: string;
  phase: number;
  ox: number; // cursor displacement (eased)
  oy: number;
  sx: number; // last screen position
  sy: number;
}

interface Packet {
  a: number;
  b: number;
  p: number;
}

const LABELS = ["<Menu />", "api/orders", "db.query()", "cart.ts", "render()", "x:128 y:064", "200 OK", "SELECT *", "useState()", "deploy ✓"];

const readColors = () => {
  const style = getComputedStyle(document.documentElement);
  const get = (name: string) => style.getPropertyValue(name).trim();
  const dark = document.documentElement.classList.contains("dark");
  return {
    line: get("--c-accent-strong") || "#0284c7",
    node: get("--c-accent") || "#0369a1",
    teal: get("--c-teal") || "#0f766e",
    text: get("--c-muted") || "#697281",
    // next/font exposes the real family name on <body>; canvas can't resolve CSS variables itself.
    font: `10px ${getComputedStyle(document.body).getPropertyValue("--font-jetbrains-mono").trim() || "monospace"}`,
    lineAlpha: dark ? 0.16 : 0.2,
    nodeAlpha: dark ? 0.5 : 0.42,
  };
};

export default function EngineeringBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorsRef = useRef<ReturnType<typeof readColors> | null>(null);
  const redrawRef = useRef<(() => void) | null>(null);
  const theme = useTheme();

  useEffect(() => {
    colorsRef.current = readColors();
    redrawRef.current?.();
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 0;
    let height = 0;
    let mobile = false;
    let linkDist = 150;
    let nodes: Node[] = [];
    const packets: Packet[] = [];
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, px: 0.5, py: 0.5 };
    let raf = 0;
    let lastSpawn = 0;

    const build = () => {
      mobile = width < 768;
      linkDist = mobile ? 110 : 150;
      const count = Math.round(Math.min(mobile ? 22 : 64, Math.max(12, (width * height) / (mobile ? 26000 : 24000))));
      let labelsLeft = mobile ? 0 : 7;
      nodes = Array.from({ length: count }, (_, i) => {
        const depth = 0.3 + Math.random() * 0.7;
        const speed = 0.04 + depth * 0.1;
        const angle = Math.random() * Math.PI * 2;
        const label = labelsLeft > 0 && i % 8 === 3 ? LABELS[(labelsLeft--) % LABELS.length] : undefined;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          depth,
          box: i % 7 === 0,
          label,
          phase: Math.random() * Math.PI * 2,
          ox: 0,
          oy: 0,
          sx: 0,
          sy: 0,
        };
      });
      packets.length = 0;
    };

    const resize = () => {
      const widthChanged = document.documentElement.clientWidth !== width;
      width = document.documentElement.clientWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Mobile browsers resize height on scroll (URL bar); only rebuild the graph when the width changes.
      if (widthChanged) build();
      if (reduced) draw(0);
    };

    const wrap = (value: number, size: number) => ((value % size) + size) % size;

    const draw = (time: number) => {
      const colors = colorsRef.current ?? readColors();
      const scroll = window.scrollY;
      const radius = mobile ? 0 : 170;

      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        if (!reduced) {
          node.x = wrap(node.x + node.vx, width + 80);
          node.y = wrap(node.y + node.vy, height + 80);
        }
        // Depth parallax from pointer and scroll.
        const px = node.x - 40 - (mouse.px - 0.5) * 30 * node.depth;
        const py = wrap(node.y - scroll * 0.12 * node.depth, height + 80) - 40 - (mouse.py - 0.5) * 20 * node.depth;

        // Gentle repulsion around the cursor.
        let tx = 0;
        let ty = 0;
        if (radius) {
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < radius && dist > 0.1) {
            const force = ((radius - dist) / radius) * 22 * node.depth;
            tx = (dx / dist) * force;
            ty = (dy / dist) * force;
          }
        }
        node.ox += (tx - node.ox) * 0.08;
        node.oy += (ty - node.oy) * 0.08;
        node.sx = px + node.ox;
        node.sy = py + node.oy;
      }

      // Links: straight or right-angled ("circuit") depending on the pair.
      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.line;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.sx - b.sx, a.sy - b.sy);
          if (dist > linkDist) continue;
          let alpha = (1 - dist / linkDist) * colors.lineAlpha;
          if (radius) {
            const md = Math.hypot((a.sx + b.sx) / 2 - mouse.x, (a.sy + b.sy) / 2 - mouse.y);
            if (md < radius) alpha *= 1 + (1 - md / radius) * 2.2;
          }
          ctx.globalAlpha = Math.min(alpha, 0.6);
          ctx.beginPath();
          ctx.moveTo(a.sx, a.sy);
          if ((i + j) % 3 === 0) ctx.lineTo(b.sx, a.sy);
          ctx.lineTo(b.sx, b.sy);
          ctx.stroke();
        }
      }

      // Faint links from the cursor to nearby nodes.
      if (radius && mouse.x > -999) {
        ctx.strokeStyle = colors.teal;
        for (const node of nodes) {
          const dist = Math.hypot(node.sx - mouse.x, node.sy - mouse.y);
          if (dist > radius) continue;
          ctx.globalAlpha = (1 - dist / radius) * 0.22;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(node.sx, node.sy);
          ctx.stroke();
        }
      }

      // Nodes and labels.
      ctx.font = colors.font;
      for (const node of nodes) {
        const near = radius ? Math.hypot(node.sx - mouse.x, node.sy - mouse.y) < radius * 0.6 : false;
        ctx.globalAlpha = near ? Math.min(colors.nodeAlpha * 1.8, 0.9) : colors.nodeAlpha * (0.5 + node.depth * 0.5);
        if (node.box) {
          ctx.strokeStyle = near ? colors.teal : colors.node;
          ctx.strokeRect(node.sx - 3, node.sy - 3, 6, 6);
        } else {
          ctx.fillStyle = near ? colors.teal : colors.node;
          ctx.beginPath();
          ctx.arc(node.sx, node.sy, 0.8 + node.depth * 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
        if (node.label) {
          const fade = reduced ? 0.6 : 0.5 + 0.5 * Math.sin(time * 0.00035 + node.phase);
          ctx.globalAlpha = fade * 0.45;
          ctx.fillStyle = colors.text;
          ctx.fillText(node.label, node.sx + 8, node.sy + 3);
        }
      }

      // Data packets travelling along existing links.
      if (!reduced) {
        const maxPackets = mobile ? 1 : 5;
        if (time - lastSpawn > 900 && packets.length < maxPackets) {
          lastSpawn = time;
          const a = Math.floor(Math.random() * nodes.length);
          const b = nodes.findIndex((node, k) => k !== a && Math.hypot(node.sx - nodes[a].sx, node.sy - nodes[a].sy) < linkDist);
          if (b >= 0) packets.push({ a, b, p: 0 });
        }
        ctx.fillStyle = colors.teal;
        for (let k = packets.length - 1; k >= 0; k--) {
          const packet = packets[k];
          const a = nodes[packet.a];
          const b = nodes[packet.b];
          packet.p += 0.006;
          if (packet.p >= 1 || !a || !b) {
            packets.splice(k, 1);
            continue;
          }
          ctx.globalAlpha = Math.sin(packet.p * Math.PI) * 0.8;
          ctx.beginPath();
          ctx.arc(a.sx + (b.sx - a.sx) * packet.p, a.sy + (b.sy - a.sy) * packet.p, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (time: number) => {
      draw(time);
      raf = requestAnimationFrame(loop);
    };

    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      mouse.tx = event.clientX;
      mouse.ty = event.clientY;
      if (mouse.x < -999) {
        mouse.x = mouse.tx;
        mouse.y = mouse.ty;
      }
      mouse.px = event.clientX / width;
      mouse.py = event.clientY / height;
    };
    const onLeave = () => {
      mouse.tx = mouse.ty = mouse.x = mouse.y = -9999;
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(loop);
    };

    // Static mode repaints on theme change; the animated loop picks new colors up on its own.
    if (reduced) redrawRef.current = () => draw(0);

    resize();
    window.addEventListener("resize", resize);
    if (!reduced) {
      window.addEventListener("pointermove", onPointer, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      redrawRef.current = null;
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div className="bg-tech-grid absolute inset-0" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
