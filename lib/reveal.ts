import type { CSSProperties } from "react";

// Stagger for [data-reveal] elements (see globals.css).
export const revealDelay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;
