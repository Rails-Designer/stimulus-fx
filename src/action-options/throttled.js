const throttleTimers = new WeakMap();

export function throttled({ element }, { wait = 1000 } = {}) {
  if (!throttleTimers.has(element)) {
    throttleTimers.set(element, 0);
  }

  const now = Date.now();
  const lastRun = throttleTimers.get(element);

  if (now - lastRun >= wait) {
    throttleTimers.set(element, now);

    return true;
  }

  return false;
}
