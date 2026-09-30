"use client";

import { useState } from "react";
import Image from "next/image";
import Isotipo from "./Isotipo";

interface MediaFrameProps {
  src: string;
  alt: string;
  sizes: string;
  label: string;
  className?: string;
  imageClassName?: string;
}

// Shows the local image when it exists; otherwise an on-brand placeholder instead of a broken image.
export default function MediaFrame({ src, alt, sizes, label, className = "", imageClassName = "" }: MediaFrameProps) {
  const [missing, setMissing] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-elevated ${className}`}>
      {missing ? (
        <div className="bg-grid-dots absolute inset-0 flex flex-col items-center justify-center gap-3">
          <Isotipo size={56} className="opacity-40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{label}</span>
        </div>
      ) : (
        <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover ${imageClassName}`} onError={() => setMissing(true)} />
      )}
    </div>
  );
}
