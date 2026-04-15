// @ts-check

const sample = document.getElementById('sample');
const slidebar = document.getElementById('slidebar');

if (!(sample instanceof HTMLParagraphElement)) {
  throw TypeError('`sample` is not HTMLParagraphElement');
}

if (!(slidebar instanceof HTMLInputElement)) {
  throw TypeError('`slidebar` is not HTMLInputElement');
}

/**
 *
 * @param {number} weight
 */
const updateWeight = (weight) => {
  sample.style.fontWeight = `${weight}`;
  sample.textContent = `${weight}: Lorem ipsum dolor sit amet`;
};

const inputHandler = () => {
  const weight = Number.parseInt(slidebar.value);
  if (!Number.isFinite(weight)) {
    throw Error('not finite');
  }
  updateWeight(weight);
};

slidebar.addEventListener('input', inputHandler, false);
inputHandler();

export {};
