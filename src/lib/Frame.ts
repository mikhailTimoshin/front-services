import { Module } from '@src/types/frame.types'

export default class Frame {
    protected modulesList: Module[] = []
    protected moduleTarget: Element = document.getElementsByTagName('head')?.[0]

    constructor(modules: Module[]) {
        this.modulesList = modules
    }

    public getModulesList(): Module[] {
        return this.modulesList
    }

    public exist(module: Module): boolean {
        return !!this.modulesList.find((item) => item.name === module.name)
    }

    public addModule(module: Module): void {
        if (!this.exist(module)) {
            this.modulesList.push(module)
        }
    }

    public removeModule(module: Module): void {
        if (this.exist(module)) {
            this.modulesList = this.modulesList.splice(this.modulesList.indexOf(module), 1)
        }
    }
}
