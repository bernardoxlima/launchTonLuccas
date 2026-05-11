const SCROLL_DURATION_MS = 2000;

// Trapezoidal-velocity easing: quadratic accel ramp -> constant cruise -> quadratic
// decel ramp. Unlike easeInOut/easeOut curves (which spend most of the time near
// the target), this keeps the scroll moving at a steady, visible pace through
// the middle of the screen, so the user perceives a deliberate "smooth pan"
// rather than a quick burst followed by a long tail.
// Accel kept short (200ms at 2000ms total) so there's no perceptual "stick"
// at the start; cruise consumes 70%% of the time so the middle reads as a
// deliberate, even pan.
const ACCEL_PHASE = 0.10;
const DECEL_PHASE = 0.20;
const CRUISE_PHASE = 1 - ACCEL_PHASE - DECEL_PHASE;
// Solve for the cruise velocity V such that total distance == 1:
//   accel area (V*ACCEL/2) + cruise (V*CRUISE) + decel area (V*DECEL/2) = 1
const CRUISE_VELOCITY = 1 / (ACCEL_PHASE / 2 + CRUISE_PHASE + DECEL_PHASE / 2);
const DIST_AFTER_ACCEL = (CRUISE_VELOCITY * ACCEL_PHASE) / 2;
const DIST_AFTER_CRUISE = DIST_AFTER_ACCEL + CRUISE_VELOCITY * CRUISE_PHASE;

function easeTrapezoid(t: number): number {
  if (t < ACCEL_PHASE) {
    return (CRUISE_VELOCITY * t * t) / (2 * ACCEL_PHASE);
  }
  if (t < ACCEL_PHASE + CRUISE_PHASE) {
    return DIST_AFTER_ACCEL + CRUISE_VELOCITY * (t - ACCEL_PHASE);
  }
  const td = t - ACCEL_PHASE - CRUISE_PHASE;
  return DIST_AFTER_CRUISE + CRUISE_VELOCITY * td - (CRUISE_VELOCITY * td * td) / (2 * DECEL_PHASE);
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
      const eased = easeTrapezoid(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) requestAnimationFrame(step);
      else history.replaceState(null, '', href);
    }

    requestAnimationFrame(step);
  });
}
