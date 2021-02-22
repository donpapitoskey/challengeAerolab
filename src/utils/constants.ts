import {useEffect, useState} from 'react';

export const URL_API = 'https://coding-challenge-api.aerolab.co';

export const isMobile = (screenSize?: number): boolean => {
  const [mobile, setMobile] = useState(true);
  const mobileScreenSize = screenSize || 650;

  useEffect(() => {
    function handleResize() {
      setMobile(typeof window === 'undefined' || window.innerWidth > mobileScreenSize ? false : true);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  }, [setMobile]);
  return mobile;
};
