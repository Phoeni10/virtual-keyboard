import {
  makeKeyboard, makeKeysEn, makeKeysRu, pressKeys, changeLocalSorage, flashKeysR, flashKeysV,
  flashKeysHover, flashKeysOut, flashKeysRNo, flashKeysVNo, writeFromR,
// eslint-disable-next-line import/extensions
} from '../modules/functions.js';

/* добавление клавиатуры */
document.addEventListener('DOMContentLoaded', makeKeyboard());

/* добавление клавиш */
if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'En');
  document.addEventListener('DOMContentLoaded', makeKeysEn());
} else if (localStorage.getItem('lang') === 'En') {
  document.addEventListener('DOMContentLoaded', makeKeysEn());
} else {
  document.addEventListener('DOMContentLoaded', makeKeysRu());
}

document.addEventListener('keydown', flashKeysR);
document.addEventListener('keyup', flashKeysRNo);

document.addEventListener('mouseover', flashKeysHover);

document.addEventListener('mouseout', flashKeysOut);

document.addEventListener('mousedown', flashKeysV);
document.addEventListener('mouseup', flashKeysVNo);

pressKeys(changeLocalSorage, 'ShiftLeft', 'AltLeft');

/* нажатие клавиш на реальной клавиатуре */
document.addEventListener('keyup', writeFromR);
