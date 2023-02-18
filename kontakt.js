const child1 = document.querySelector('.left');
const child2 = document.querySelector('.right');

function updateHeight() {
  child2.style.height = child1.offsetHeight + 'px';
}

// Update height on page load and resize
window.addEventListener('load', updateHeight);
window.addEventListener('resize', updateHeight);

// Update height on media query changes
const mediaQueries = ['(max-width: 576px)','(max-width: 768px)', '(max-width: 992px)', '(max-width: 1200px)'];

mediaQueries.forEach(query => {
  const mediaQuery = window.matchMedia(query);
  mediaQuery.addEventListener('change', updateHeight);
});

