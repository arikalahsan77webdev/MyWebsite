import React, { useState, useEffect } from 'react';
function Load() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading by using a timeout
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after a set time
    }, 1000); // Change to your preferred delay time (in ms)

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      {isLoading && (
        <div id="loading-screen">
<div
  className="text-arik"
  style={{
    color: 'transparent',
    background: 'linear-gradient(to right, #6a1b9a, #1976d2)', // Use actual color values
    backgroundClip: 'text',
    fontSize: '40px',
    fontWeight: 'bold',
    WebkitBackgroundClip: 'text', // For Safari support
  }}
>
  Welcome To Arik Al Ahsan Website
</div>

          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Load;
