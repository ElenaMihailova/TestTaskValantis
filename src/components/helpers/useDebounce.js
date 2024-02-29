import { useRef } from 'react';

function useDebounce(func, delay) {
  const timeoutRef = useRef(null);

  function debouncedFunction(...args) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  }

  return debouncedFunction;
}

export default useDebounce;

