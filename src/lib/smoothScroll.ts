const SCROLL_DURATION_MS = 1600;

// Linear cruise (no initial accel ramp — full velocity from frame 1, so no
// perceptual "stick" at the start) with a quadratic decel ramp only in the
// final 15%% so the scroll lands softly on the section.
//
// Distance math: cruise covers C until t=1-D, velocity V is constant; decel
// covers D and contributes V*D/2 area. Total: V*(1-D) + V*D/2 = V*(1-D/2) = 1
// => V = 1 / (1 - D/2)
const DECEL_PHASE = 0.15;
const CRUISE_VELOCITY = 1 / (1 - DECEL_PHASE / 2);
const DIST_AT_CRUISE_END = CRUISE_VELOCITY * (1 - DECEL_PHASE);

function easeLinearLanding(t: number): number {
  if (t < 1 - DECEL_PHASE) {
    return CRUISE_VELOCITY * t;
  }
  const td = t - (1 - DECEL_PHASE);
  return DIST_AT_CRUISE_END + CRUISE_VELOCITY * td - (CRUISE_VELOCITY * td * td) / (2 * DECEL_PHASE);
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
      const eased = easeLinearLanding(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) requestAnimationFrame(step);
      else history.replaceState(null, '', href);
    }

    requestAnimationFrame(step);
  });
}
