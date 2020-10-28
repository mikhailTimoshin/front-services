export default class {
  constructor() {
    this.storeList = []
  }
  add(module) {
    this.storeList.push(module)
  }
  delete(module) {
    this.storeList.splice(this.storeList.indexOf(module), 1)
  }
  getList() {
    return this.storeList
  }
  exist(item) {
    return !!this.storeList.find(storeitem => storeitem === item)
  }
  clear() {
    this.storeList.splice(0, this.storeList.length)
  }
}
