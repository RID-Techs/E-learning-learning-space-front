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
      devOptions: {
        enabled: false,
        type: 'module',
      },
      
      includeAssets: [], 

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
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        navigateFallback: '/index.html',
        navigateFallbackAllowlist: [/^(?!\/__).*/],
        
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
        dontCacheBustURLsMatching: /[.-][a-zA-Z0-9]{8}\./,

        // FIX 1: REMOVED 'html' FROM THE PRECACHE BLOB. 
        // We never precache the entry HTML file; it must always be checked over the network.
        globPatterns: ['**/*.{js,mjs,css,png,jpg,jpeg,webp,svg,ico,json}'],
        
        runtimeCaching: [
          // FIX 2: Explicitly handle index.html updates using a NetworkFirst strategy.
          // This ensures the browser only uses a cached HTML shell if the user is fully offline.
          {
            urlPattern: ({ url }) => url.pathname === '/' || url.pathname === '/index.html',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-cache',
              expiration: { maxEntries: 5 },
              cacheableResponse: { statuses: [200] }
            }
          },

          // Supabase API data (metadata)
          {
            urlPattern: ({ url }) => url.hostname.includes('supabase.co') && url.pathname.includes('/rest/v1'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'supabase-metadata-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 86400 },
              cacheableResponse: { statuses: [0, 200] }
            }
          },

          // ImageKit images
          {
            urlPattern: /^https:\/\/ik\.imagekit\.io\/g4xui13wk\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'learning-materials-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 2592000, purgeOnQuotaError: true },
              cacheableResponse: { statuses: [200, 206] },
              rangeRequests: true,
            }
          },

          // Local PDFs and audio files
          {
            urlPattern: ({ url }) => url.href.includes('/Docs/') && (url.href.endsWith('.pdf') || url.href.endsWith('.aac')),
            handler: 'CacheFirst',
            options: {
              cacheName: 'local-media-cache',
              expiration: { maxEntries: 50, maxAgeSeconds: 2592000 },
              cacheableResponse: { statuses: [0, 200] },
              rangeRequests: true,
            }
          },

          // ALL other images
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'external-images-cache',
              expiration: { maxEntries: 200, maxAgeSeconds: 2592000, purgeOnQuotaError: true },
              cacheableResponse: { statuses: [0, 200] },
            }
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-core': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['motion'],
          'vendor-ui': ['react-toastify', 'react-error-boundary'],
        },
      },
    },
  }
})