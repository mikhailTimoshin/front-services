import ServiceTransformer from './lib/ServiceTransformer'
import Container from './lib/Container'

export default class extends ServiceTransformer {
  /**
   *
   * @param modules
   */
  constructor(modules) {
    super(modules);
    this.container = new Container()
  }
  
  /**
   *
   * @param moduleName
   * @return {Promise<*|null>}
   */
  async load(moduleName) {
    const foundModule = this.getModule(moduleName)
    if (foundModule) {
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
      }
    }
    return this.getService(moduleName) ?? null
  }
}
