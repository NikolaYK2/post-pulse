export function debounce<F extends (...args: never[]) => unknown>(fn: F, ms: number) {
  let timeout: NodeJS.Timeout | null = null;

  const debouncedFn = function(this: ThisParameterType<F>, ...args: Parameters<F>) {
    const fnCall = () => {
      fn.apply(this, args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(fnCall, ms);
  };

  debouncedFn.cancel = function() {
    if (timeout) {
      clearTimeout(timeout);
    }
  };

  return debouncedFn;
}
