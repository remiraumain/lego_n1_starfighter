export function getOrientation() {
  if (typeof window !== "undefined") {
    return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  }
  return "portrait";
}

export function isLandscaped() {
  if (typeof window !== "undefined") {
    if (window.innerWidth > window.innerHeight) {
      return true;
    }
  }
  return false;
}
