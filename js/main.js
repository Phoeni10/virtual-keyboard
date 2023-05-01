import {
  makeKeyboard, makeKeysEn, makeKeysRu, pressKeys, changeLocalSorage,
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

pressKeys(changeLocalSorage, 'ShiftLeft', 'AltLeft');
