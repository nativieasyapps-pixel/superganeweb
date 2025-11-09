
// Simple client-side search (filters visible cards by title/keywords)
const input = document.querySelector('#q');
const cards = [...document.querySelectorAll('[data-title]')];
function filter(){
  const term = (input.value || '').trim().toLowerCase();
  cards.forEach(c=>{
    const hay = c.dataset.title + ' ' + c.dataset.keywords;
    c.style.display = hay.includes(term) ? '' : 'none';
  });
}
document.querySelector('#searchForm').addEventListener('submit', e=>{e.preventDefault(); filter(); input.blur();});
input.addEventListener('input', filter);

// PWA
if('serviceWorker' in navigator){ navigator.serviceWorker.register('/service-worker.js'); }
