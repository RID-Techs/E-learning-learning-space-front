import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      ".ngrok-free.app"
    ]
  },
  preview: {
    allowedHosts: [
      ".ngrok-free.app"
    ]
  },
  plugins: [
    react(), 
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      manifest: {
        "name": "E-learning Université de Kara",
        "short_name": "UK E-Learn",
        "description": "E-learning platform...",
        "start_url": "/?source=pwa",
        "display": "standalone",
        "background_color": "#f7fffe",
        "theme_color": "#E9F5FF",
        "orientation": "portrait",
        "icons": [
          { "src": "/learns_16.png", "sizes": "16x16", "type": "image/png", "purpose": "any" },
          { "src": "/learns.png", "sizes": "48x48", "type": "image/png", "purpose": "any" },
          { "src": "/learns_96.png", "sizes": "96x96", "type": "image/png", "purpose": "any" },
          { "src": "/learns_1.png", "sizes": "192x192", "type": "image/png", "purpose": "any" },
          { "src": "/learns_2.png", "sizes": "512x512", "type": "image/png", "purpose": "any" }
        ]
      },
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        // Precache App Shell
        globPatterns: ['**/*.{js,css,html,png,svg,ico,json}'],
        
        runtimeCaching: [
          // -----------------------------------------------------------
          // RULE 1: SUPABASE DATABASE (Text Metadata)
          // -----------------------------------------------------------
          {
            urlPattern: ({ url }) => {
              return url.hostname.includes('supabase.co') && url.pathname.includes('/rest/v1');
            },
            handler: 'NetworkFirst',
            options: {
              cacheName: 'supabase-metadata-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 1 },
              networkTimeoutSeconds: 3,
              cacheableResponse: { statuses: [0, 200] }
            }
          },

          // -----------------------------------------------------------
          // RULE 2: CLOUDFLARE R2 (External Media)
          // -----------------------------------------------------------
          {
            // Simple Regex: Matches ANY url containing r2.dev or supabase storage
            urlPattern: new RegExp('https://.*(r2.dev|supabase.co/storage/v1)'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'learning-materials-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
                purgeOnQuotaError: true,
              },
              cacheableResponse: { statuses: [200, 206] }, // 206 is vital for audio
              rangeRequests: true,
            }
          },

          // -----------------------------------------------------------
          // RULE 3: LOCAL MEDIA (The Bulletproof Rule)
          // -----------------------------------------------------------
          {
            // We do NOT check for folder names (Docs/Assets).
            // We ONLY check if it is YOUR site and a MEDIA file.
            urlPattern: ({ url }) => {
              // Just check the string. Does it end in PDF/AAC?
              // And does it contain your folder name?
              return url.href.includes('/Docs/') && 
              (url.href.endsWith('.pdf') || url.href.endsWith('.aac'));
            },
            handler: 'CacheFirst',
            options: {
              cacheName: 'local-media-cache', // This WILL appear now
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              // 0 allows opaque responses (safety), 200 is success
              cacheableResponse: { statuses: [0, 200] },
              rangeRequests: true,
            }
          },

          // -----------------------------------------------------------
          // RULE 4: GENERIC ASSETS
          // -----------------------------------------------------------
          {
            urlPattern: ({ request }) => 
                request.destination === 'image' ||
                request.destination === 'style' ||
                request.destination === 'script' ||
                request.destination === 'font',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-assets-cache',
              expiration: { maxEntries: 50 },
              cacheableResponse: { statuses: [0, 200] },
            }
          }
        ]
      }
    })
  ],
})