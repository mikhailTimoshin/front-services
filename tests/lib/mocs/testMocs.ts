import {Module, StaticTypes} from '@src/types/frame.types'

export const moduleMoc: Module = {
    name: 'test',
    src: 'http://localhost',
    type: StaticTypes.dynamic
}

export const newModuleMoc: Module = {
    name: 'newModule',
    src: '//localhost',
    type: StaticTypes.dynamic
}

export const modulesListMoc: Module[] = [
    {
        name: 'test',
        src: 'http://localhost',
        type: StaticTypes.dynamic
    },
    {
        name: 'test2',
        src: 'http://localhost2',
        type: StaticTypes.dynamic
    }
]