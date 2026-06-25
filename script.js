// ============================================
// Mobile nav toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('menu-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile menu when a link is tapped
  document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// Signal-line hero animation
// Draws a "sensor reading" pulse across the hero divider,
// echoing the adaptive-systems theme (traffic density / demand signals)
// ============================================
const signalPath = document.getElementById('signalPath');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (signalPath && !prefersReducedMotion) {
  let t = 0;
  const width = 1200;
  const baseline = 30;

  function buildPath(time) {
    let d = `M0,${baseline}`;
    const segments = 60;
    for (let i = 0; i <= segments; i++) {
      const x = (width / segments) * i;
      // mostly flat line with occasional "spike" — like a sparse sensor signal
      const spike = Math.sin((x * 0.01) + time) * 2;
      const noise = (Math.sin(x * 0.15 + time * 2) > 0.96) ? (Math.random() * 14 - 7) : 0;
      const y = baseline + spike + noise;
      d += ` L${x.toFixed(1)},${y.toFixed(1)}`;
    }
    return d;
  }

  function animate() {
    t += 0.012;
    signalPath.setAttribute('d', buildPath(t));
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
} else if (signalPath) {
  // Reduced motion: keep it as a static straight line (already default)
  signalPath.setAttribute('d', 'M0,30 L1200,30');
}

// ============================================
// Footer year
// ============================================
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
