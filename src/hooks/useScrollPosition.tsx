import { useState, useEffect } from 'react';

function useScrollPosition() {
  const [scrollPosY, setPosY] = useState<number>(0);

  useEffect(() => {
    const getPos = () => {
      setPosY(window.scrollY);
    }
    window.addEventListener("scroll", getPos);
    getPos();
    return () => window.removeEventListener("scroll", getPos);
  }, []);

  return scrollPosY;
}

export default useScrollPosition;