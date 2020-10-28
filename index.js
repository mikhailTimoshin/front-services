import Modules from './lib/modules/moduleLib'
import Services from './lib/services/serviceLib'

export default class {
  constructor(modulesList = []) {
    this.modules = new Modules()
    this.services = new Services()
    this.autoWireModules(modulesList)
  }
  autoWireModules(modulesList) {
    this.modules.clear()
    modulesList.forEach((module) => {
      if (!this.modules.exist(module)) this.modules.add(module)
    })
  }
  getInitModules() {
    return this.modules.getList()
  }
  getServices() {
    return this.services.getList()
  }
  async load(moduleName) {
    const foundedModule = this.modules.getModuleByName(moduleName)
    if (foundedModule) {
      if (foundedModule.type === 'dynamic') {
        const context = await this.modules.createVirtualModule(foundedModule)
        this.services.activate(foundedModule, context)
      }
      if (foundedModule.type === 'static') {
        const node = this.modules.createScriptModule(foundedModule)
        this.services.activate(foundedModule, "", node)
      }
    }
    return this.services.find(foundedModule)
  }
}
