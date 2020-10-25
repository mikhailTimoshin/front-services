import ServiceTransformer from './lib/ServiceTransformer'

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
      if (foundModule.type === 'dynamic') {
        const stringContext = await super.container.createNativeModule(foundModule)
        this.addService(foundModule, stringContext)
      }
      if(foundModule.type === 'static') {
        const scriptContext = super.container.createScriptModule(foundModule)
        this.moduleTarget.appendChild(scriptContext)
        this.addService(foundModule, "", scriptContext)
      }
    }
    return this.getService(moduleName) ?? null
  }
}
