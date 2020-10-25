import Services from '@src/lib/Services'
import {
    modulesListMoc as modulesList
} from './mocs/testMocs'

const srv = new Services(modulesList)
describe('Services tests', () => {
    test('Service can take modules list', () => {
        expect(srv.getModulesList()).toEqual(modulesList)
    })
})