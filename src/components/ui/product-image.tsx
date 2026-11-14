"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 text-brand-gold/60 text-xs uppercase tracking-[0.3em]"
      >
        HD Perfume
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
