
const slides     = document.querySelectorAll('.slide');
const dotsWrap   = document.getElementById('slideDots');
const leftBtn    = document.querySelector('.slider-btn.left');
const rightBtn   = document.querySelector('.slider-btn.right');
const perspText  = document.getElementById('perspective-text');

const slideColors = [
  '#FF6B6B','#6e7272','#fa2d2d','#95E1D3','rgba(192,185,185,0.8)',
  '#813f02','#73b9f3','#6e7272','#5d95ea','#C7CEEA',
  '#FFDAB9','#e5eaec','#f50707','#535756','#f1d257','#AA96DA'
];

let current   = 0;
let autoTimer = null;

// Build dots
slides.forEach((_, i) => {
  const d = document.createElement('button');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.setAttribute('aria-label', `Slide ${i + 1}`);
  d.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(d);
});

function getDots() { return dotsWrap.querySelectorAll('.dot'); }

function goTo(index) {
  slides[current].classList.remove('active');
  getDots()[current].classList.remove('active');

  current = (index + slides.length) % slides.length;

  slides[current].classList.add('active');
  getDots()[current].classList.add('active');

  if (perspText) {
    perspText.style.color = slideColors[current % slideColors.length];
  }
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

leftBtn.addEventListener('click',  () => { clearInterval(autoTimer); prev(); startAuto(); });
rightBtn.addEventListener('click', () => { clearInterval(autoTimer); next(); startAuto(); });

function startAuto() {
  autoTimer = setInterval(next, 5000);
}

// Init
goTo(0);
startAuto();

// ─── Live date ────────────────────────────────
const liveDateEl = document.getElementById('live-date');
if (liveDateEl) {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  liveDateEl.textContent = fmt.format(new Date());
}

// ─── Typewriter ───────────────────────────────
const typeEl = document.getElementById('typewriter-text');
const segments = [
  "Welcome to Sarah's Perspective News, your go-to source for insightful coverage of women's rights.",
  " We shine a light on child marriage, domestic violence, FGM, and sexual assault.",
  " Every story told is a step toward justice."
];

let segIdx  = 0;
let charIdx = 0;
let built   = '';

function type() {
  if (!typeEl) return;
  if (segIdx >= segments.length) return;

  const seg = segments[segIdx];
  if (charIdx < seg.length) {
    built += seg[charIdx];
    typeEl.textContent = built;
    charIdx++;
    setTimeout(type, charIdx === 1 && segIdx > 0 ? 200 : 38);
  } else {
    segIdx++;
    charIdx = 0;
    setTimeout(type, 400);
  }
}

setTimeout(type, 1400);

// ─── Mobile menu ─────────────────────────────
const menuBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.topbar-nav');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Close on nav link click
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}
