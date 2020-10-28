import StoreLib from '../store/storeLib'

export default class extends StoreLib {
  activate(module, context = null, node = null) {
    const service = { ...module, context: this.createRuntimeContext(context), node }
    if (!this.find(service)) this.add(service)
  }
  find(service) {
    return this.getList().find((item) => item.name === service.name )
  }
  createRuntimeContext(context){
    return !!context ? eval(context + 'delete this.createRuntimeContext; this') : null
  }
}
