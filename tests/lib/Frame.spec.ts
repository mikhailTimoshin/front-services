import Frame from '@src/lib/Frame'
import {
    modulesListMoc as modulesList,
    moduleMoc as module,
    newModuleMoc as newModule
} from './mocs/testMocs'

const Frm = new Frame(modulesList)

describe('Frame tests', () => {
    test('Frame must have module list', () => {
        expect(Frm.getModulesList()).toEqual(modulesList)
    })
    test('Frame can validate inlist module', () => {
        expect(Frm.exist(module)).toBeTruthy()
    })
    test('Frame can addModule to module list', () => {
        Frm.addModule(newModule)
        expect(Frm.exist(newModule)).toBeTruthy()
    })
    test('Frame can remove module from list', () => {
        Frm.removeModule(module)
        expect(Frm.exist(module)).toBeFalsy()
    })
})