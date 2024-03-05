import { useRef } from 'react';

function useDebounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); 

  function debouncedFunction(...args: Parameters<T>): void { 
    clearTimeout(timeoutRef.current!); 
    timeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  }

  return debouncedFunction;
}

export default useDebounce;

