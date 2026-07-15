const progressBar = document.querySelector('#reading-progress-bar');
const sidebar = document.querySelector('#sidebar');
const navToggle = document.querySelector('.nav-toggle');
const tocLinks = [...document.querySelectorAll('.toc a')];

function updateReadingProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
}

function setActiveSection(entries) {
  const visible = entries.find((entry) => entry.isIntersecting);
  if (!visible) return;
  tocLinks.forEach((link) => {
    link.toggleAttribute('aria-current', link.hash === `#${visible.target.id}`);
  });
}

navToggle?.addEventListener('click', () => {
  const isOpen = sidebar.dataset.open === 'true';
  sidebar.dataset.open = String(!isOpen);
  navToggle.setAttribute('aria-expanded', String(!isOpen));
});

tocLinks.forEach((link) => link.addEventListener('click', () => {
  sidebar.dataset.open = 'false';
  navToggle?.setAttribute('aria-expanded', 'false');
}));


document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && sidebar?.dataset.open === 'true') {
    sidebar.dataset.open = 'false';
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.focus();
  }
});

window.addEventListener('scroll', updateReadingProgress, { passive: true });
window.addEventListener('resize', updateReadingProgress);
updateReadingProgress();

const observer = new IntersectionObserver(setActiveSection, { rootMargin: '-30% 0px -55% 0px', threshold: 0.01 });
document.querySelectorAll('main [id]').forEach((section) => observer.observe(section));
