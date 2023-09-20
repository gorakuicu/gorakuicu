/// <reference lib="dom" />

import { expect, test } from 'bun:test';

test('set button text', () => {
  document.body.innerHTML = `<button>My button</button>`;
  const button = document.querySelector('button');
  expect(button?.textContent).toEqual('My button');
});
