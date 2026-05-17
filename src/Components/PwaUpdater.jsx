import { useEffect } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { toast } from "react-toastify";

const UPDATE_TOAST_ID = "pwa-update";

export function PwaUpdater() {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("Service Worker Registered", r);
    },
    onRegisterError(error) {
      console.error("Service Worker Error", error);
    },
  });

  useEffect(() => {
    if (!needRefresh || toast.isActive(UPDATE_TOAST_ID)) {
      return;
    }

    toast(
      <div style={{ 
        display: 'flex', 
        gap: '14px', 
        alignItems: 'flex-start',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Modern Icon Badge with a neon fluid glow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#105ee5',
          borderRadius: '12px',
          padding: '10px',
          color: '#F8FBFF',
          flexShrink: 0,
          marginTop: '2px',
          boxShadow: '0 4px 14px rgba(16, 94, 229, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
          </svg>
        </div>

        {/* Informational Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ 
            fontWeight: '700', 
            color: '#0A2239', 
            fontSize: '15px',
            letterSpacing: '-0.02em'
          }}>
            Mise à jour disponible !
          </span>
          <span style={{ 
            color: '#1E2D3D', // Optimized contrast variant for semi-transparent backdrops
            fontSize: '13px', 
            lineHeight: '1.5',
            fontWeight: '500'
          }}>
            Une nouvelle version de{" "}
            {/* Readable Premium Brand Gradient Text */}
            <span style={{
              background: 'linear-gradient(135deg, #105ee5 0%, #0A2239 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '700',
              display: 'inline-block'
            }}>
              UK-Elearn
            </span>{" "}
            est prête. Mettez à jour pour optimiser votre espace d&apos;apprentissage.
          </span>
          
          {/* Action CTA Button */}
          <button
            onClick={() => updateServiceWorker(true)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0d4cb8';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#105ee5';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            style={{
              alignSelf: 'flex-start',
              padding: "9px 18px",
              backgroundColor: "#105ee5",
              color: "#F8FBFF",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "13px",
              marginTop: "10px",
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 4px 12px rgba(16, 94, 229, 0.3)"
            }}
          >
            Mettre à jour maintenant
          </button>
        </div>
      </div>,
      {
        toastId: UPDATE_TOAST_ID,
        position: "bottom-right",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        style: {
          // Liquid Glass Shell Architecture
          backgroundColor: "rgba(248, 251, 255, 0.82)", 
          backdropFilter: "blur(18px) saturate(190%)",
          WebkitBackdropFilter: "blur(18px) saturate(190%)", // Safari compatibility
          borderRadius: "18px",
          padding: "18px",
          // Specular highlights: creates a thin light reflection on the rim
          border: "1px solid rgba(255, 255, 255, 0.6)", 
          outline: "1px solid rgba(16, 94, 229, 0.06)",
          // Deep premium volumetric shadow architecture
          boxShadow: "0 24px 38px -4px rgba(10, 34, 57, 0.12), 0 8px 16px -4px rgba(10, 34, 57, 0.06)"
        },
        bodyStyle: {
          padding: 0,
          margin: 0
        },
        closeButton: false 
      }
    );
  }, [needRefresh, updateServiceWorker]);

  return null;
}