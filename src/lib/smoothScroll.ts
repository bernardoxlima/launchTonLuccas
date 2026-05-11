const SCROLL_DURATION_MS = 2500;

// Classic easeInOutCubic. Starts gently, accelerates through the middle,
// decelerates softly into the target — symmetric smooth motion all the way.
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function initSmoothScroll(): void {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    const link = target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#') || href === '#') return;

    const id = href.slice(1);
    const destination = document.getElementById(id);
    if (!destination) return;

    event.preventDefault();

    const styles = window.getComputedStyle(destination);
    const scrollMargin = parseFloat(styles.scrollMarginTop) || 0;
    const destinationY =
      destination.getBoundingClientRect().top + window.scrollY - scrollMargin;

    if (prefersReducedMotion) {
      window.scrollTo({ top: destinationY, behavior: 'instant' });
      history.replaceState(null, '', href);
      return;
    }

    const startY = window.scrollY;
    const distance = destinationY - startY;
    if (Math.abs(distance) < 8) {
      history.replaceState(null, '', href);
      return;
    }

    const startTime = performance.now();

    function step(now: number): void {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
      const eased = easeInOutCubic(progress);
      // behavior:'instant' bypasses the CSS `scroll-behavior: smooth` on
      // <html>; otherwise the browser tries to smooth-scroll to every frame
      // we set and fights our own animation (visible as a stuttery start).
      window.scrollTo({ top: startY + distance * eased, behavior: 'instant' });
      if (progress < 1) requestAnimationFrame(step);
      else history.replaceState(null, '', href);
    }

    requestAnimationFrame(step);
  });
}
