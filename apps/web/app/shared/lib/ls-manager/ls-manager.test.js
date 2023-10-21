import { beforeEach, describe, expect, test } from 'bun:test';

import { LocalStorageManager } from './ls-manager';

const namespace = 'test';

const keyTest = 'key';
const valueTest = 'value';

describe('LocalStorageManager', () => {
  let localStorageManager;

  beforeEach(() => {
    localStorageManager = new LocalStorageManager(namespace);
    localStorage.clear();
  });

  test('sets and gets an item', () => {
    localStorageManager.set(keyTest, valueTest);
    expect(localStorageManager.get(keyTest)).toBe(valueTest);
  });

  test('removes an item', () => {
    localStorageManager.set(keyTest, valueTest);
    localStorageManager.remove(keyTest);
    expect(localStorageManager.get(keyTest)).toBeNull();
  });

  test('clears all items', () => {
    const keyTests = [keyTest + 1, keyTest + 2];
    const valueTests = [valueTest + 1, valueTest + 2];
    keyTests.forEach((key, index) =>
      localStorageManager.set(key, valueTests[Number(index)]),
    );
    localStorageManager.clear();
    keyTests.forEach((key) => expect(localStorageManager.get(key)).toBeNull());
  });

  test('notifies subscribers when setting an item', () => {
    let key = null;
    let value = null;

    const callback = (k, v) => {
      [key, value] = [k, v];
    };

    localStorageManager.subscribe(callback);
    localStorageManager.set(keyTest, valueTest);
    expect(key).toBe(keyTest);
    expect(value).toBe(valueTest);
  });

  test('notifies subscribers when removing an item', () => {
    let key = null;
    let value = null;

    const callback = (k, v) => {
      [key, value] = [k, v];
    };

    localStorageManager.set(keyTest, valueTest);
    localStorageManager.subscribe(callback);
    localStorageManager.remove(keyTest);
    expect(key).toBe(keyTest);
    expect(value).toBeNull();
  });

  test('notifies subscribers when clearing all items', () => {
    let key = null;
    let value = null;

    const callback = (k, v) => {
      [key, value] = [k, v];
    };

    localStorageManager.set(keyTest, valueTest);
    localStorageManager.subscribe(callback);
    localStorageManager.clear();
    expect(key).toBeNull();
    expect(value).toBeNull();
  });
});
