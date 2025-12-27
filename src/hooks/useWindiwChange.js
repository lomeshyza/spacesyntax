import React, { useState,useEffect } from 'react'

function useWindiwChange() {
    const [windowSize, setWindowSize] = useState(getWindowSize());
      useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    
      function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }
    return {innerWidth, innerHeight};
}

export default useWindiwChange
