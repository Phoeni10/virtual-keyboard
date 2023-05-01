// eslint-disable-next-line import/extensions
import { keysEn, keysRu } from './variables.js';

/* создание клавиатуры */
function makeKeyboard() {
  const textarea = document.createElement('textarea');
  textarea.classList.add('text');
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  const body = document.querySelector('body');
  body.append(keyboard);
  keyboard.before(textarea);
  const info1 = document.createElement('p');
  info1.classList.add('info');
  info1.textContent = 'Клавиатура создана в операционной системе Windows';
  const info2 = document.createElement('p');
  info2.classList.add('info');
  info2.textContent = 'Для переключения языка комбинация: левыe alt + shift';
  keyboard.after(info1);
  keyboard.after(info2);
}

/* создание клавиш en */
function makeKeysEn() {
  const keyboard = document.querySelector('.keyboard');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < keysEn.length; i++) {
    const key = document.createElement('div');
    key.classList.add('keyboard__key');
    /* const str = String(Object.keys(keysEn[i])).toLowerCase(); */
    const str = String(Object.keys(keysEn[i]));
    key.classList.add(str);
    key.textContent = Object.values(keysEn[i]);

    keyboard.append(key);
  }
}

/* создание клавиш ru */
function makeKeysRu() {
  const keyboard = document.querySelector('.keyboard');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < keysRu.length; i++) {
    const key = document.createElement('div');
    key.classList.add('keyboard__key');
    /* const str = String(Object.keys(keysRu[i])).toLowerCase(); */
    const str = String(Object.keys(keysRu[i]));
    key.classList.add(str);
    key.textContent = Object.values(keysRu[i]);

    keyboard.append(key);
  }
}

function pressKeys(doFunc, ...keys) {
  const clicked = new Set();

  document.addEventListener('keydown', (event) => {
    clicked.add(event.code);
    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
      if (!clicked.has(key)) {
        return;
      }
    }
    clicked.clear();
    doFunc();
  });
  document.addEventListener('keyup', (event) => {
    clicked.delete(event.code);
  });
}

/* замена языка в localStorage и смена языка раскладки клавиатуры */
function changeLocalSorage() {
  if (localStorage.getItem('lang') === 'En') {
    const keyboard = document.querySelector('.keyboard');
    keyboard.innerHTML = '';
    localStorage.removeItem('lang');
    localStorage.setItem('lang', 'Ru');
    makeKeysRu();
  } else {
    const keyboard = document.querySelector('.keyboard');
    keyboard.innerHTML = '';
    localStorage.removeItem('lang');
    localStorage.setItem('lang', 'En');
    makeKeysEn();
  }
}

/* подсветка кнопок при нажатии на реальную клавиатуру */
function flashKeysR(event) {
  event.preventDefault();

  const { code } = event;
  const btn = document.querySelector(`.${code}`);

  btn.classList.add('key_click');
  setTimeout(() => btn.classList.remove('key_click'), 200);
}

/* подсветка кнопок при нажатии на виртуальную клавиатуру */
function flashKeysV(event) {
  const { target } = event;
  if (target.classList.contains('keyboard__key')) {
    target.classList.remove('hover');
    target.classList.add('key_click');
    setTimeout(() => target.classList.remove('key_click'), 200);
    target.classList.add('hover');
  }
}

/* подсветка кнопок при наведении курсора */
function flashKeysHover(event) {
  const { target } = event;
  if (target.classList.contains('keyboard__key')) {
    target.classList.add('hover');
  }
}

/* удаление подсветки кнопок при выводе курсора */
function flashKeysOut(event) {
  const { target } = event;
  if (target.classList.contains('keyboard__key')) {
    target.classList.remove('hover');
  }
}

export {
  makeKeyboard, makeKeysEn, makeKeysRu, pressKeys, changeLocalSorage, flashKeysR, flashKeysV,
  flashKeysHover, flashKeysOut,
};
