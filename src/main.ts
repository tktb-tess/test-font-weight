import './style.css';

const pars = [...Array(9)].map((_, i) => {
  const p = document.createElement('p');
  const weight = `${(i + 1) * 100}`;
  p.style.fontWeight = weight;
  p.textContent = `font-weight: ${weight};`;
  return p;
});

const app = document.getElementById('app');

if (!(app instanceof HTMLDivElement)) {
  throw TypeError('!');
}

app.replaceChildren(...pars);
