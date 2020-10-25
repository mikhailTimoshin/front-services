import Container from '@src/lib/Container'
import { moduleMoc as module } from './mocs/testMocs';

describe('Container tests', () => {
    test('Container can get modules list', () => {
        expect(Container.getModules().length).toEqual(0)
    })
    test('Container can add module into store', () => {
        Container.add(module)
        expect(Container.find(module.name)).toEqual(module)
    })
    test('Container cant add duplicate module', () => {
        Container.add(module)
        Container.add(module)
        expect(Container.getModules().length).toEqual(1)
    })
    test('Container can delete module from store', () => {
        Container.add(module)
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
           .catch((e: Error) => expect(e.message).toMatch('ECONNREFUSED'))
    })
})