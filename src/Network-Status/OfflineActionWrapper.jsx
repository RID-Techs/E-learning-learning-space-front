import React from 'react';
import { useNetworkStatus } from './networkHook';
import { toast, Zoom } from "react-toastify";

const OfflineActionWrapper = ({ children, onAction, fallbackMessage }) => {
  const isOnline = useNetworkStatus();

    const offlineNotification = (fallbackMessage) => {
    toast.warning(fallbackMessage, {
        theme: "light",
        position:"top-center",
        autoClose: 2000,
        transition: Zoom
    })
}

  const handleClick = (e) => {
    e.preventDefault(); // Stop form submissions or links

    if (!isOnline) {
      // User is Offline: Show the error message
      // alert(fallbackMessage || "You need an internet connection to do this.");
      offlineNotification(fallbackMessage || "You need an internet connection to do this.");
      // Or use a nice toast library: toast.error(...)
      return; 
    }

    // User is Online: Proceed with the actual action
    if (onAction) onAction();
  };

  // We clone the child element (the button) to hijack its onClick
  return React.cloneElement(children, { onClick: handleClick });
};

export default OfflineActionWrapper;