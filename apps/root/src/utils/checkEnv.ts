export function checkHasWindow() {
  return typeof window !== 'undefined';
}

export function checkHasLocalStorage() {
  return checkHasWindow() && typeof window?.localStorage !== 'undefined';
}
