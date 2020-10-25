export enum StaticTypes {
    static = 'static',
    dynamic = 'dynamic'
}

export interface Context {
    mount(nodeName: string): void
}

export interface Module {
    name: string
    src: string,
    type: StaticTypes
}

export interface Service extends Module {
    context: Context,
    node: Element
}

export interface FrameImp {
    getModules(): Module[]
    getActiveModules(): Module[]
    mountModule(moduleName: string, moduleType: StaticTypes): void
    umountModule(moduleName: string): void
}
