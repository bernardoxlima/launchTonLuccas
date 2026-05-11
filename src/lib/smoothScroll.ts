const SCROLL_DURATION_MS = 2400;

// Three-phase velocity profile: short fast kick-off so the user immediately
// sees motion (no "stuck" feeling), then a long slow cruise through the
// middle of the screen (this is where the user reads the page), then a soft
// quadratic decel that lands on the section.
//
// Velocity at t=0:      KICKOFF_RATIO * V_cruise   (high — feedback)
// Velocity at t=K:      V_cruise                   (drops linearly)
// Velocity K -> 1-D:    V_cruise                   (constant cruise)
// Velocity 1-D -> 1:    V_cruise -> 0              (linear, quadratic pos)
const KICKOFF_PHASE = 0.08;
const DECEL_PHASE = 0.15;
const CRUISE_PHASE = 1 - KICKOFF_PHASE - DECEL_PHASE;
const KICKOFF_RATIO = 3.0;

// Solve for V_cruise so total area (distance) is exactly 1:
//   kickoff trapezoid: K * (KICKOFF_RATIO*V + V) / 2 = K*V*(KICKOFF_RATIO+1)/2
//   cruise rectangle:  C * V
//   decel triangle:    D * V / 2
const CRUISE_VELOCITY =
  1 /
  ((KICKOFF_PHASE * (KICKOFF_RATIO + 1)) / 2 +
    CRUISE_PHASE +
    DECEL_PHASE / 2);
const KICKOFF_INITIAL_VELOCITY = KICKOFF_RATIO * CRUISE_VELOCITY;
const DIST_AFTER_KICKOFF =
  (KICKOFF_PHASE * (KICKOFF_INITIAL_VELOCITY + CRUISE_VELOCITY)) / 2;
const DIST_AFTER_CRUISE = DIST_AFTER_KICKOFF + CRUISE_VELOCITY * CRUISE_PHASE;

function easeKickoffCruise(t: number): number {
  if (t < KICKOFF_PHASE) {
    // Linearly decreasing velocity from V_initial to V_cruise -> quadratic pos
    return (
      KICKOFF_INITIAL_VELOCITY * t -
      ((KICKOFF_INITIAL_VELOCITY - CRUISE_VELOCITY) * t * t) /
        (2 * KICKOFF_PHASE)
    );
  }
  if (t < KICKOFF_PHASE + CRUISE_PHASE) {
    return DIST_AFTER_KICKOFF + CRUISE_VELOCITY * (t - KICKOFF_PHASE);
  }
  const td = t - KICKOFF_PHASE - CRUISE_PHASE;
  return (
    DIST_AFTER_CRUISE +
    CRUISE_VELOCITY * td -
    (CRUISE_VELOCITY * td * td) / (2 * DECEL_PHASE)
  );
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
      const eased = easeKickoffCruise(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) requestAnimationFrame(step);
      else history.replaceState(null, '', href);
    }

    requestAnimationFrame(step);
  });
}
