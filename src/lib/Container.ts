export enum StaticTypes {
    static = 'static',
    dynamic = 'dynamic'
}

export interface Module {
    name: string
    src: string
}

export default class Container {
    private target: Element
    private modules: Module[]
    private activeModules: Module[]

    constructor(modules: Module[]) {
        this.modules = modules
        this.target = document.getElementsByTagName('head')?.[0]
    }

    private exist(moduleName: string): Element {
        return this.target.children.namedItem(moduleName)
    }

    private createModule(moduleName: string): Element {
        const module = document.createElement('script')
        module.id = moduleName
        module.src = this.modules.find(item => item.name == moduleName)?.src
        return module
    }

    private async createNativeModule(moduleName: string): Promise<string> {
        const response = await new Promise((res) => {
            const file = new XMLHttpRequest();
            file.open("GET", this.modules.find(item => item.name == moduleName)?.src, true);
            file.onreadystatechange = function() {
                if (file.readyState === 4) {
                    res(file.responseText);
                }
            }
            file.send();
        })
        return response.toString()
    }

    public async mount(moduleName: string, staticType: StaticTypes = StaticTypes.dynamic): Promise<void> {
        if (!this.exist(moduleName)) {
            if (staticType === StaticTypes.dynamic) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const context = eval(await this.createNativeModule(moduleName) + ' this.window')
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
                console.log(new context.Vue({ template: '<div>1</div>'}).$mount('#frame'))
            }
            if (staticType === StaticTypes.static) {
                this.target.append(this.createModule(moduleName))
            }
        }
    }

    public umount(moduleName: string): void {
        const module = this.exist(moduleName)
        if (module) {
            module.remove()
        }
    }
}
