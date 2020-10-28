import StoreLib from '../store/storeLib'

export default class extends StoreLib {
  createScriptModule(module) {
    const scriptModule = document.createElement('script')
    scriptModule.id = module.name
    scriptModule.src = module.src
    return scriptModule
  }
  async createVirtualModule(module) {
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
  getModuleByName(moduleName) {
    return this.getList().find((item) => item.name === moduleName)
  }
}
