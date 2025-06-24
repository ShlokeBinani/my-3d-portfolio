import { useRef, useEffect, useState } from "react";

export function usePathLengths(count: number): {
  lengths: number[];
  refs: React.RefObject<(SVGPathElement | null)[]>;
  isReady: boolean;
} {
  // Use useRef instead of useMotionValue to avoid hook loop
  const lengths = useRef<number[]>(Array(count).fill(0));
  const refs = useRef<(SVGPathElement | null)[]>(Array(count).fill(null));
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Calculate path lengths after refs are set
    let allLengthsCalculated = true;
    refs.current.forEach((path, i) => {
      if (path) {
        lengths.current[i] = path.getTotalLength();
      } else {
        allLengthsCalculated = false;
      }
    });
    
    if (allLengthsCalculated && !isReady) {
      setIsReady(true);
    }
  }, [count, isReady]);

  return { 
    lengths: lengths.current, 
    refs, 
    isReady 
  };
}
