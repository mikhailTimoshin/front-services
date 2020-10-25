export default class Frame {
  /**
   *
   * @type {[]}
   */
  modulesList = []
  
  /**
   *
   * @type {*}
   */
  moduleTarget = document.getElementsByTagName('head')?.[0]
  
  /**
   *
   * @param modules
   */
  constructor(modules) {
    this.modulesList = modules
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
