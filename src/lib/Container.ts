import { Module } from '@src/types/frame.types'

export default class Container {
    private static modules: Module[] = []

    public static getModules(): Module[] {
        return this.modules
    }

    public static add(module: Module): void {
        if (!this.find(module.name)) {
            this.modules.push(module)
        }
    }

    public static delete(module: Module): void {
        if (this.find(module.name)) {
            this.modules.splice(this.modules.indexOf(module), 1)
        }
    }

    public static find(moduleName: string): Module {
        return this.modules.find(item => item.name === moduleName)
    }

    public static createScriptModule(module: Module): Element {
        const scriptModule = document.createElement('script')
        scriptModule.id = module.name
        scriptModule.src = module.src
        return scriptModule
    }

    public static async createNativeModule(module: Module): Promise<string> {
        return await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', module.src, true)
            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(new Error("ECONNREFUSED"))
                }
            }
            xhr.onerror = () => {
                reject(new Error("ECONNREFUSED"))
            }
            xhr.send()
        })
    }
}