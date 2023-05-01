import {
  makeKeyboard, makeKeysEn, makeKeysRu, pressKeys, changeLocalSorage, flashKeysR, flashKeysV,
  flashKeysHover, flashKeysOut,
// eslint-disable-next-line import/extensions
} from '../modules/functions.js';

localStorage.setItem('lang', 'Ru');

/* добавление клавиатуры */
document.addEventListener('DOMContentLoaded', makeKeyboard());

/* добавление клавиш */
if (localStorage.getItem('lang') === 'En') {
  document.addEventListener('DOMContentLoaded', makeKeysEn());
} else {
  document.addEventListener('DOMContentLoaded', makeKeysRu());
}

document.addEventListener('keydown', flashKeysR);

document.addEventListener('mouseover', flashKeysHover);

document.addEventListener('mouseout', flashKeysOut);

document.addEventListener('click', flashKeysV);

pressKeys(changeLocalSorage, 'ShiftLeft', 'AltLeft');
