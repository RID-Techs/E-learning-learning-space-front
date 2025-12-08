import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [".ngrok-free.app"]
  },
  preview: {
    allowedHosts: [".ngrok-free.app"]
  },
  plugins: [
    react(), 
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      
      // 1. ADD THIS SECTION: explicitly precache public assets
      // This forces the SW to download these immediately on install
      includeAssets: [ 
        'learns.png', 
        'learns_16.png',
        'learns_96.png',
        'learns_1.png',
        'learns_2.png',
        'download.png',
        'doc.png',
        'create_quiz.png',
        'reward.png'
      ],

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
        navigateFallback: '/index.html',
        
        // 2. INCREASE LIMIT: Default is 2MB. 
        // If an image is 2.1MB, it is skipped silently. 
        // Increase to 4-5MB to be safe.
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,

        // Ensure jpg, jpeg and png are definitely included
        globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,webp,svg,ico,json}'],
        
        runtimeCaching: [
          // RULE 1: SUPABASE DATABASE
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

          // RULE 2: CLOUDFLARE R2 (External Media)
          {
            urlPattern: new RegExp('https://.*(r2.dev|supabase.co/storage/v1)'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'learning-materials-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, 
                purgeOnQuotaError: true,
              },
              cacheableResponse: { statuses: [200, 206] }, 
              rangeRequests: true,
            }
          },

          // RULE 3: LOCAL MEDIA
          {
            urlPattern: ({ url }) => {
              return url.href.includes('/Docs/') && 
              (url.href.endsWith('.pdf') || url.href.endsWith('.aac'));
            },
            handler: 'CacheFirst',
            options: {
              cacheName: 'local-media-cache', 
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: { statuses: [0, 200] },
              rangeRequests: true,
            }
          },

          // RULE 4: GENERIC ASSETS
          {
            urlPattern: ({ request }) => 
                request.destination === 'image' ||
                request.destination === 'style' ||
                request.destination === 'script' ||
                request.destination === 'font',
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-assets-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            }
          }
        ]
      }
    })
  ],
})