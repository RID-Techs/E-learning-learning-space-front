import { useEffect, useRef, useState, useCallback } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { useLocation } from "react-router-dom";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

// Ensure the worker is set up correctly
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

export default function PDFViewer() {
  const { state } = useLocation();
  const pdfUrl = state?.url;

  // --- Refs ---
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const renderTaskRef = useRef(null);
  const toolbarRef = useRef(null);
  
  // We use a state for the doc to ensure effects trigger when it loads
  const [pdfDoc, setPdfDoc] = useState(null);

  // Touch State Refs
  const touchState = useRef({
    startDist: 0,
    startScale: 1,
    isPinching: false,
  });

  // --- State ---
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(1.0);
  const [isRendering, setIsRendering] = useState(true);
  const [error, setError] = useState(null);
  const [inputPage, setInputPage] = useState("1");
  const [viewMode, setViewMode] = useState("manual");

  // --- Helper: Detect Mobile ---
  const isMobile = () => window.innerWidth < 768;

  // --- 1. CORE LOGIC FUNCTIONS ---

  const renderPage = useCallback(async (pageNumber, targetScale, doc) => {
    if (!doc || !canvasRef.current) return;

    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
    }

    setIsRendering(true);

    try {
      const page = await doc.getPage(pageNumber);
      const viewport = page.getViewport({ scale: targetScale });
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // High DPI (Retina) Optimization
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(viewport.width * dpr);
      canvas.height = Math.floor(viewport.height * dpr);
      
      // Explicitly set dimensions to allow scrolling when zoomed
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      const transform = dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null;

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
        transform: transform,
      };

      const renderTask = page.render(renderContext);
      renderTaskRef.current = renderTask;

      await renderTask.promise;
      setIsRendering(false);

    } catch (err) {
      if (err.name !== "RenderingCancelledException") {
        console.error("Render Error:", err);
        setIsRendering(false);
      }
    }
  }, []);

  const calculateFitWidth = useCallback(async () => {
    if (!containerRef.current || !pdfDoc) return;
    try {
      const page = await pdfDoc.getPage(currentPage);
      const viewport = page.getViewport({ scale: 1 });
      const containerWidth = containerRef.current.clientWidth;
      
      // More breathing room for better centering
      const newScale = (containerWidth - 40) / viewport.width;
      
      setViewMode("fit-width");
      setScale(newScale);
    } catch (err) {
      console.error("Fit width error:", err);
    }
  }, [currentPage, pdfDoc]);

  // --- 2. EFFECTS ---

  // Load PDF Effect
  useEffect(() => {
    if (!pdfUrl) return;

    let isMounted = true;
    setIsRendering(true);

    const loadPdf = async () => {
      try {
        setError(null);
        
        // Cleanup old doc if exists
        if (pdfDoc) await pdfDoc.destroy();

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const doc = await loadingTask.promise;

        if (isMounted) {
          setPdfDoc(doc);
          setTotalPages(doc.numPages);
          setCurrentPage(1);
          setInputPage("1");
          
          // Initial Scale Logic
          setTimeout(async () => {
            if (!isMounted || !containerRef.current) return;

            if (isMobile() && toolbarRef.current) {
              toolbarRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            if (isMobile()) {
              try {
                const page = await doc.getPage(1);
                const viewport = page.getViewport({ scale: 1 });
                const containerWidth = containerRef.current.clientWidth;
                const newScale = (containerWidth - 40) / viewport.width;
                
                setScale(newScale);
                setViewMode("fit-width");
              } catch (e) { console.error(e); }
            } else {
              setScale(1.0);
              setViewMode("manual");
            }
          }, 50);
        }
      } catch (err) {
        if (isMounted) {
          console.error(err);
          setError("Failed to load PDF");
          setIsRendering(false);
        }
      }
    };

    loadPdf();

    return () => { isMounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdfUrl]);

  // Render Effect
  useEffect(() => {
    if (!pdfDoc) return;

    const timer = setTimeout(() => {
      renderPage(currentPage, scale, pdfDoc);
    }, 100);
    return () => clearTimeout(timer);
  }, [scale, currentPage, pdfDoc, renderPage]);

  // Touch Gesture Logic
  useEffect(() => {
    const container = containerRef.current;
    const content = contentWrapperRef.current;
    if (!container || !content) return;

    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        touchState.current.isPinching = true;
        touchState.current.startDist = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        );
        touchState.current.startScale = scale;
      }
    };

    const handleTouchMove = (e) => {
      if (touchState.current.isPinching && e.touches.length === 2) {
        e.preventDefault();
        const currentDist = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        );

        const distRatio = currentDist / touchState.current.startDist;
        const newVisualScale = Math.max(0.5, Math.min(touchState.current.startScale * distRatio, 5.0));
        
        // Visual feedback only during pinch
        const cssScale = newVisualScale / touchState.current.startScale;
        content.style.transform = `scale(${cssScale})`;
        content.style.transformOrigin = "center top";
      }
    };

    const handleTouchEnd = (e) => {
      if (touchState.current.isPinching && e.touches.length < 2) {
        touchState.current.isPinching = false;

        const currentTransform = content.style.transform;
        const match = currentTransform.match(/scale\((.+)\)/);
        const cssScaleDiff = match ? parseFloat(match[1]) : 1;

        content.style.transform = "none";

        let finalScale = touchState.current.startScale * cssScaleDiff;
        finalScale = Math.max(0.5, Math.min(finalScale, 5.0));

        setViewMode("manual");
        setScale(finalScale); // This triggers re-render at new quality
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scale]);

  // --- 3. UI HANDLERS ---

  const handleZoomBtn = (delta) => {
    setViewMode("manual");
    setScale((prev) => {
      const next = prev + delta;
      return Math.max(0.5, Math.min(next, 5.0));
    });
  };

  const handleReset = () => {
    if (isMobile()) {
      calculateFitWidth();
    } else {
      setViewMode("manual");
      setScale(1.0);
    }
  };

  const changePage = (offset) => {
    const newPage = currentPage + offset;
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setInputPage(String(newPage));
    }
  };

  const handlePageInput = (e) => {
    setInputPage(e.target.value);
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1 && val <= totalPages) {
      setCurrentPage(val);
    }
  };

  if (!pdfUrl) {
    return <div style={{...styles.appContainer, justifyContent: 'center', alignItems: 'center'}}>No PDF URL provided</div>;
  }

  const isDocLoaded = !!pdfDoc;

  return (
    <div style={styles.appContainer}>
      <style>{`
        .toolbar-btn {
          padding: 6px 12px;
          border: 1px solid #dcdcdc;
          background: #ffffff;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          min-height: 36px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .toolbar-btn:active { background: #f0f0f0; transform: translateY(1px); }
        .toolbar-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .toolbar-btn.active {
          background: #e6f0ff;
          color: #0066cc;
          border-color: #0066cc;
        }
        .page-input {
          width: 45px;
          height: 36px;
          border: 1px solid #dcdcdc;
          border-radius: 6px;
          text-align: center;
          font-size: 14px;
        }
        .zoom-percentage {
          font-size: 13px;
          font-weight: 600;
          color: #555;
          min-width: 45px;
          text-align: center;
        }
        @media (max-width: 767px) {
          .toolbar {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            padding: 8px 16px !important;
            scrollbar-width: none;
          }
          .toolbar::-webkit-scrollbar { display: none; }
          .toolbar-btn { padding: 5px 10px; font-size: 13px; min-height: 32px; }
          .page-input { width: 40px; height: 32px; font-size: 13px; }
        }
      `}</style>

      {/* Toolbar */}
      <div style={styles.toolbar} ref={toolbarRef}>
        <div className="toolbar-groups-holder" style={{display: 'flex', gap: '18px', flexWrap: 'wrap', justifyContent: 'center'}}>
          <div style={styles.group} className="toolbar-group">
          <button className="toolbar-btn" onClick={() => changePage(-1)} disabled={currentPage <= 1}> ← </button>
          
          <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
            <input 
              className="page-input"
              type="number" 
              value={inputPage}
              onChange={handlePageInput} 
            />
            <span style={styles.label}>/ {totalPages}</span>
          </div>

          <button className="toolbar-btn" onClick={() => changePage(1)} disabled={currentPage >= totalPages}> → </button>
        </div>

        <div style={styles.group} className="toolbar-group">
          <button className="toolbar-btn" onClick={() => handleZoomBtn(-0.2)} disabled={scale <= 0.5}> - </button>
           
          <span className="zoom-percentage">{Math.round(scale * 100)}%</span>

          <button className="toolbar-btn" onClick={() => handleZoomBtn(0.2)} disabled={scale >= 5}> + </button>
           
          <button 
            className={`toolbar-btn ${viewMode === 'fit-width' ? 'active' : ''}`}
            onClick={calculateFitWidth}
          >
            Fit
          </button>
          <button className="toolbar-btn" onClick={handleReset} style={{fontSize: '12px'}}>
            Reset
          </button>
        </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={styles.scrollContainer} ref={containerRef}>
        {!isDocLoaded && (
          <div style={styles.loadingOverlay}>
            <span style={{fontWeight: 600}}>Loading document... ⏳</span>
          </div>
        )}

        <div 
          ref={contentWrapperRef}
          style={{
            ...styles.contentWrapper,
            opacity: isRendering ? 0.5 : 1,
          }}
        >
          {error && <div style={{color: 'red', position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)'}}>{error}</div>}
          
          <canvas 
            ref={canvasRef} 
            style={styles.canvas} 
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
    backgroundColor: "#525659",
    overflow: "hidden",
  },
  toolbar: {
    position: "sticky",
    top: 0,
    flex: "0 0 auto",
    backgroundColor: "white",
    padding: "8px 16px",
    display: "flex",
    gap: "12px",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    zIndex: 20,
    flexWrap: "nowrap",
  },
  group: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    flexShrink: 0,
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#444",
    whiteSpace: "nowrap",
  },
  scrollContainer: {
    flex: "1",
    position: "relative",
    display: "flex",
    // We removed justifyContent/alignItems center here
    // allowing the child to determine its position (margin: auto)
    // which enables scrolling when content is larger than container
    overflow: "auto",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
    WebkitOverflowScrolling: "touch",
    touchAction: "pan-x pan-y",
    backgroundColor: "#525659",
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // margin: auto handles centering when small, 
    // and top-left alignment when scrolling is needed
    margin: "auto", 
    position: "relative",
    transformOrigin: "center",
    transition: 'opacity 0.2s ease-in-out',
    // Removed maxWidth/maxHeight to allow zooming to expand the element
  },
  canvas: {
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    backgroundColor: "white",
    display: "block",
    // Removed maxWidth/maxHeight to prevent scaling down
  },
  loadingOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    padding: '12px 20px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    color: '#007bff',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  }
};