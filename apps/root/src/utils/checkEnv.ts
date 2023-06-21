export function haveWindow() {
  return typeof window !== 'undefined';
}

export function haveLocalStorage() {
  return haveWindow() && typeof window?.localStorage !== 'undefined';
}
