import { keysEn, keysRu } from './variables.js';

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
  info1.textContent = 'Клавиатура создана в операционной системе Windows'
  const info2 = document.createElement('p');
  info2.classList.add('info');
  info2.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
  keyboard.after(info1);
  keyboard.after(info2);
}

function makeKeysEn() {
  const keyboard = document.querySelector('.keyboard');

  for (let i = 0; i < keysEn.length; i++) {
    const key = document.createElement('div');
    key.classList.add('keyboard__key');
    const str = String(Object.keys(keysEn[i])).toLowerCase();
    key.classList.add(str);
    key.textContent = Object.values(keysEn[i]);

    keyboard.append(key);
  }
}

function makeKeysRu() {
  const keyboard = document.querySelector('.keyboard');

  for (let i = 0; i < keysRu.length; i++) {
    const key = document.createElement('div');
    key.classList.add('keyboard__key');
    const str = String(Object.keys(keysRu[i])).toLowerCase();
    key.classList.add(str);
    key.textContent = Object.values(keysRu[i]);

    keyboard.append(key);
  }
}

export { makeKeyboard, makeKeysEn, makeKeysRu };
