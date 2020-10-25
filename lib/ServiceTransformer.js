import Frame from './Frame'
import Container from './Container'

export default class ServiceTransformer extends Frame {
  /**
   *
   * @type {[]}
   */
  servicesList = []
  
  /**
   *
   * @param modules
   */
  constructor(modules) {
    super(modules);
  }
  
  /**
   *
   * @param service
   * @return {*}
   */
  existService(service) {
    return this.servicesList.find((item) => item.name === service.name)
  }
  
  /**
   *
   * @param module
   * @param strContext
   * @param nodeElem
   */
  addService(module, strContext, nodeElem = null) {
    if (!this.existService(module.name)) {
      const service = {
        ...module,
        context: strContext ? this.createRuntimeModule(strContext) : null,
        node: nodeElem
      }
      this.servicesList.push(service)
      Container.add(module)
    }
  }
  
  /**
   *
   * @param serviceName
   * @return {*}
   */
  getService(serviceName) {
    return this.servicesList.find(service => service.name === serviceName)
  }
  
  /**
   *
   * @param moduleName
   * @return {*}
   */
  getModule(moduleName) {
    return this.getModulesList().find((item) => item.name === moduleName)
  }
  
  /**
   *
   * @param codeString
   * @return {any}
   */
  createRuntimeModule(codeString) {
    return eval(codeString + 'delete this.createRuntimeModule; this')
  }
  
}
