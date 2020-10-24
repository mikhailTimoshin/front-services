import Container from '@src/lib/Container'
import { StaticTypes, Module } from '@src/types/frame.types'

const module = { name: 'test', src: 'http://localhost', type: StaticTypes.dynamic } as Module

describe('Container tests', () => {
    test('Container can get modules list', () => {
        expect(Container.getModules().length).toEqual(0)
    })
    test('Container can add module into store', () => {
        Container.add(module)
        expect(Container.find(module.name)).toEqual(module)
    })
    test('Container can delete module from store', () => {
        Container.delete(module)
        expect(Container.find(module.name)).toEqual(undefined)
    })
    test('Container can add module as script element', () => {
        const scriptNode = Container.createScriptModule(module)
        expect(scriptNode.nodeName.toLowerCase()).toEqual('script')
        expect(scriptNode.getAttribute('src')).toEqual(module.src)
    })
    test( 'Container can add module as string element', () => {
       return Container.createNativeModule(module)
           .then((res) => expect(res).toBeTruthy())
           .catch((e) => expect(e.message).toMatch('ECONNREFUSED'))
    })
})