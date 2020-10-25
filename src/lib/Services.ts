import Frame from '@src/lib/Frame'
import { Module, Service, StaticTypes}  from '@src/types/frame.types'
import Container from "@src/lib/Container";

export default class Services extends Frame {
    private servicesList: Service[]

    constructor(modules: Module[]) {
        super(modules);
    }

    public async load(moduleName: string): Promise<void> {
        const foundModule: Module = this.getModule(moduleName)
        if (foundModule) {
            if (foundModule.type === StaticTypes.dynamic) {
                const stringContext = await Container.createNativeModule(foundModule)
                this.addService(foundModule, stringContext)
            }
        }
    }

    private addService(module: Module, stringContext: string): void {
        const service = {
            ...module,
            context: Services.createRuntimeModule(stringContext)
        }
        if (!this.existService(service)) {
            this.servicesList.push(service)
            Container.add(module)
        }
    }

    private getModule(moduleName: string): Module {
        return this.getModulesList().find((item) => item.name === moduleName)
    }

    private existService(service: Service): Service {
        return this.servicesList.find((item) => item.name === service.name)
    }

    private static createRuntimeModule(codeString: string): Window {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const context = eval(codeString + ' this.window')
        return context as Window
    }
}