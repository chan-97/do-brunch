import { useState, useEffect } from "react";

export function useInterval(passedArr, interval) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const activeTimeout = setTimeout(() => {
      setActiveIndex((prev) => {
        return prev === passedArr.length - 1 ? 0 : prev + 1;
      })
    }, interval);

    return () => clearTimeout(activeTimeout);
  }, [activeIndex]);

  const plusActiveIndex = () => {
    setActiveIndex((prev) => {
      return prev === passedArr.length - 1 ? 0 : prev + 1;
    })
  }

  const minusActiveIndex = () => {
    setActiveIndex((prev) => {
      return prev === 0 ? passedArr.length - 1 : prev - 1;
    })
  }

  return [
    activeIndex,
    {
      slideToPrev: minusActiveIndex,
      slideToNext: plusActiveIndex
    }
  ];
}