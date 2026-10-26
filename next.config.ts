import type { NextConfig } from "next";

// On vérifie si on est en production (sur Vercel) ou en local
const isProd = process.env.NODE_ENV === 'production';

// 1. Définition des en-têtes de sécurité
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    // Content Security Policy : Le bouclier anti-XSS
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // 'unsafe-inline' et 'unsafe-eval' sont nécessaires pour Next.js (en dev) et Framer Motion
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", 
      "style-src 'self' 'unsafe-inline'", // Nécessaire pour Tailwind
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join('; ')
  }
];

// 2. On ajoute HSTS UNIQUEMENT en production
// (En local, ça forcerait le HTTPS sur localhost et casserait les styles)
if (isProd) {
  securityHeaders.push({
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  });
}

const nextConfig: NextConfig = {
  // 3. Application des en-têtes à toutes les routes
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  
  // (Optionnel) Si on ajoute des images externes plus tard
  /*
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  */
};

export default nextConfig;