import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve /public images as-is: they're already WebP/PNG at final size, and Vercel's
    // Image Optimization quota on this account returns 402 (OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED).
    unoptimized: true,
  },
};

export default nextConfig;
