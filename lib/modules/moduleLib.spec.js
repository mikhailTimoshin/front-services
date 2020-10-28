import { afterEach, describe, test } from '@jest/globals'
import ModuleLib from './moduleLib'
const Module = new ModuleLib()

const moduleMoc = {
  name: 'react',
  src: 'https://unpkg.com/react@16/umd/react.development.js',
  type: 'dynamic'
}

afterEach(() => {
  Module.clear();
});

describe('Module tests', () => {
  test('Module has store ', () => {
    Module.add(moduleMoc)
    expect(Module.getList()).toEqual([moduleMoc])
  })
  test('Module can create script module', () => {
    const scriptModule = Module.createScriptModule(moduleMoc)
    expect(scriptModule.nodeName.toLowerCase()).toEqual('script')
    expect(scriptModule.id).toEqual(moduleMoc.name)
    expect(scriptModule.src).toEqual(moduleMoc.src)
  })
  test('Module can create virtual module if module exist or create exception', async () => {
    return Module.createVirtualModule(moduleMoc).then((res) => {
      expect(res.length).toBeGreaterThan(0)
    }).catch((error) => {
      expect(error.message).toContain('ECONNREFUSED')
    })
  })
  test('Module can be fined by name', () => {
    Module.add(moduleMoc)
    expect(Module.getModuleByName('react')).toEqual(moduleMoc)
  })
})
