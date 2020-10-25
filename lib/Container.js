const modules = []

export default class Container {
  
  /**
   *
   * @return {[]}
   */
  static getModules() {
    return modules
  }
  
  /**
   *
   * @param module
   */
  static add(module) {
    if (!this.find(module.name)) {
      modules.push(module)
    }
  }
  
  /**
   *
   * @param module
   */
  static delete(module) {
    if (this.find(module.name)) {
      module.splice(this.modules.indexOf(module), 1)
    }
  }
  
  /**
   *
   * @param moduleName
   * @return {*}
   */
  static find(moduleName) {
    return modules.find(item => item.name === moduleName)
  }
  
  /**
   *
   * @param module
   * @return {HTMLScriptElement}
   */
  static createScriptModule(module) {
    const scriptModule = document.createElement('script')
    scriptModule.id = module.name
    scriptModule.src = module.src
    return scriptModule
  }
  
  /**
   *
   * @param module
   * @return {Promise<unknown>}
   */
  static async createNativeModule(module) {
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
