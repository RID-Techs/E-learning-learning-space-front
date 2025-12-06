export const handleSmartDownload = async (url, filename) => {
  try {
    // 1. Fetch the file (Uses your PWA Cache!)
    const response = await fetch(url);
    const blob = await response.blob();

    // 2. Create a proper File object (Required for Sharing)
    const file = new File([blob], filename, { type: blob.type });

    // 3. MOBILE CHECK: Can the browser share files natively?
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: filename,
          text: `Here is the document: ${filename}`,
        });
        return; // Success! We used the native sheet. Stop here.
      } catch (shareError) {
        // If user cancelled the share, just log it and do nothing
        if (shareError.name === 'AbortError') return;
      }
    }

    // 4. DESKTOP FALLBACK: The "Blob Link" method
    // (This runs if we are on a PC or if Sharing failed)
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);

  } catch (error) {
    console.error("Download failed:", error);
    // Ultimate fallback: Just open the URL
    window.open(url, '_blank');
  }
};