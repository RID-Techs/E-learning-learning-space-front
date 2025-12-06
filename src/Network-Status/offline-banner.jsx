import { useNetworkStatus } from './networkHook';
import './OfflineBanner.css'; // Simple CSS for red background

const OfflineBanner = () => {
  const isOnline = useNetworkStatus();

  if (isOnline) return null; // Don't show anything if online

  return (
    <div className="offline-banner">
      <span>⚠️ You are currently offline. Some features may be limited.</span>
    </div>
  );
};

export default OfflineBanner;