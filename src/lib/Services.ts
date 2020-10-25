import {Context, Module, Service, StaticTypes} from '@src/types/frame.types'
import Frame from '@src/lib/Frame'
import Container from '@src/lib/Container'

export default class Services extends Frame {
    private servicesList: Service[] = []

    constructor(modules: Module[]) {
        super(modules);
    }

    public async load(moduleName: string): Promise<Service> {
        const foundModule: Module = this.getModule(moduleName)
        if (foundModule) {
            if (foundModule.type === StaticTypes.dynamic) {
                const stringContext = await Container.createNativeModule(foundModule)
                this.addService(foundModule, stringContext)
            }
            if(foundModule.type === StaticTypes.static) {
                const scriptContext = Container.createScriptModule(foundModule)
                this.moduleTarget.appendChild(scriptContext)
                this.addService(foundModule, "", scriptContext)
            }
        }
        return this.getService(moduleName) ?? null
    }

    private getService(serviceName: string): Service {
        return this.servicesList.find(serv => serv.name === serviceName)
    }

    private addService(module: Module, stringContext: string, node: Element = null): void {
        const service = {
            ...module,
            context: stringContext ? Services.createRuntimeModule(stringContext) : null,
            node
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

    private static createRuntimeModule(codeString: string): Context {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return eval(codeString + 'delete this.createRuntimeModule; this') as Context
    }
}
