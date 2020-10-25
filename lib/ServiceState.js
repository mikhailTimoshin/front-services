let process = []

export default class ServiceState {
  
  static addProcess(moduleName) {
    process.push(moduleName)
  }
  
  static deleteProcess(moduleName) {
    process.splice(process.indexOf(moduleName), 1)
  }
  
  static isProcess(moduleName) {
    return process.find((module) => module === moduleName)
  }
}
