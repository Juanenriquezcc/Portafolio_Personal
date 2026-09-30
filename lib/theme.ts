"use client";

import { useSyncExternalStore } from "react";
import type { ThemeMode } from "@/data/site";

// The theme lives on <html> (set pre-paint by the script in layout.tsx); this hook just mirrors it.
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const read = (): ThemeMode => (document.documentElement.classList.contains("dark") ? "dark" : "light");

export function setTheme(mode: ThemeMode) {
  const apply = () => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    document.documentElement.style.colorScheme = mode;
    listeners.forEach((listener) => listener());
  };
  try {
    localStorage.setItem("theme", mode);
  } catch {}
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // The crossfade is optional polish: if it's unavailable or fails, the theme is still applied synchronously.
  if (reduced || !document.startViewTransition) return apply();
  try {
    document.startViewTransition(apply);
  } catch {
    apply();
  }
}

export function useTheme(): ThemeMode {
  return useSyncExternalStore(subscribe, read, () => "light");
}
