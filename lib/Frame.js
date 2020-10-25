export default class Frame {
  /**
   *
   * @param modules
   */
  constructor(modules) {
    this.modulesList = modules
    this.moduleTarget = document.getElementsByTagName('head')?.[0]
  }
  
  /**
   *
   * @return {[]}
   */
  getModulesList() {
    return this.modulesList
  }
  
  /**
   *
   * @param module
   * @return {boolean}
   */
  exist(module) {
    return !!this.modulesList.find((item) => item.name === module.name)
  }
  
  /**
   *
   * @param module
   */
  addModule(module) {
    if (!this.exist(module)) {
      this.modulesList.push(module)
    }
  }
  
  /**
   *
   * @param module
   */
  removeModule(module) {
    if (this.exist(module)) {
      this.modulesList.splice(this.modulesList.indexOf(module), 1)
    }
  }
}
