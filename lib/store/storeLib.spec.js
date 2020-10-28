import { afterEach, describe, test } from '@jest/globals'
import StoreLib from './storeLib'

const Store = new StoreLib()
const storeMoc = { name: 'test' }

afterEach(() => {
  Store.clear();
});

describe('Store tests', () => {
  test('Store can get modules list', () => {
    expect(Store.getList()).toEqual([])
  })
  test('Store can add module', () => {
    Store.add(storeMoc)
    expect(Store.getList().length).toEqual(1)
  })
  test('Store can delete module', () => {
    Store.add(storeMoc)
    Store.delete(storeMoc)
    expect(Store.getList().length).toEqual(0)
  })
  test('Store can findModule', () => {
    Store.add(storeMoc)
    expect(Store.exist(storeMoc)).toBeTruthy()
  })
  test('Store can clear all modules', () => {
    Store.add(storeMoc)
    Store.clear()
    expect(Store.getList()).toEqual([])
  })
})
