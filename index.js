import ServiceTransformer from './lib/ServiceTransformer'
import ServiceState from './lib/ServiceState'
import Container from './lib/Container'

export default class extends ServiceTransformer {
  /**
   *
   * @param modules
   */
  constructor(modules) {
    super(modules);
  }
  
  /**
   *
   * @param moduleName
   * @return {Promise<*|null>}
   */
  async load(moduleName) {
    const foundModule = this.getModule(moduleName)
    if (foundModule) {
      if (!ServiceState.isProcess(foundModule.name)) {
        ServiceState.addProcess(foundModule.name)
        if (!this.existService(foundModule)) {
          if (foundModule.type === 'dynamic') {
            const stringContext = await Container.createNativeModule(foundModule)
            this.addService(foundModule, stringContext)
          }
          if(foundModule.type === 'static') {
            const scriptContext = Container.createScriptModule(foundModule)
            this.moduleTarget.appendChild(scriptContext)
            this.addService(foundModule, "", scriptContext)
          }
          ServiceState.deleteProcess(foundModule.name)
        }
      }
    }
    return this.getService(moduleName)
  }
}
