export function disableScroll() {
  // Easy but really dirty way to disable scroll
  document.body.style.overflow = 'hidden';
}

export function enableScroll() {
  document.body.removeAttribute('style');
}
