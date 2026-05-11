const SCROLL_DURATION_MS = 1700;

function easeOutQuint(t: number): number {
  return 1 - Math.pow(1 - t, 5);
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
      window.scrollTo(0, destinationY);
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
      const eased = easeOutQuint(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) requestAnimationFrame(step);
      else history.replaceState(null, '', href);
    }

    requestAnimationFrame(step);
  });
}
