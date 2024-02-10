export function throttle<T extends unknown[]>(fn: (...args: T) => void, timeout: number) {
  let timer: NodeJS.Timeout | null = null;
  return function perform(...args: T) {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      clearTimeout(timer as NodeJS.Timeout);
      timer = null;
    }, timeout);
  }
}
