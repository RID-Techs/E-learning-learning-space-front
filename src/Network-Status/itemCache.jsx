export const isItemInCache = async (url) => {
  if (!url) return false;

  try {
    // 1. Get a list of ALL cache names (local-media-cache, learning-materials, etc.)
    const cacheKeys = await caches.keys();

    // 2. Loop through every cache box to find the file
    for (const key of cacheKeys) {
      const cache = await caches.open(key);
      const match = await cache.match(url);
      
      // If we found it, return TRUE immediately
      if (match) {
        // console.log(`Found ${url} in cache: ${key}`);
        return true; 
      }
    }
    
    // console.log(`File ${url} not found in any cache.`);
    return false; // Not found anywhere
  } catch (error) {
    console.error("Error checking cache:", error);
    return false;
  }
};

//   const cacheName = 'learning-materials-cache'; 
  
//   try {
//     // Check if the cache exists
//     const cache = await caches.open(cacheName);
    
//     // Look for the item's URL in that cache
//     const cachedResponse = await cache.match(url);
    
//     // Returns true if a match is found and the response is valid (not undefined)
//     return !!cachedResponse; 
//   } catch (error) {
//     // If the cache API isn't available (e.g., very old browser), assume false
//     console.error("Cache check failed:", error);
//     return false;
//   }
// };

// export default isItemInCache;