import { afterEach, describe, test } from '@jest/globals'
import ServiceLib from '@src/lib/services/serviceLib'

const Service = new ServiceLib()
const serviceMoc = {
  name: 'react',
  src: 'https://unpkg.com/react@16/umd/react.development.js',
  type: 'dynamic',
  context: null,
  node: null
}

afterEach(() => {
  Service.clear();
});

describe('Service tests', () => {
  test('Service has store', () => {
    Service.add(serviceMoc)
    expect(Service.getList()).toEqual([serviceMoc])
  })
  test('Service can be find', () => {
    Service.add(serviceMoc)
    expect(Service.find(serviceMoc)).toEqual(serviceMoc)
  })
  test('New service can be activate and can`t be activated twice', () => {
    Service.activate(serviceMoc)
    Service.activate(serviceMoc)
    expect(Service.find(serviceMoc)).toEqual(serviceMoc)
    expect(Service.getList().length).toEqual(1)
  })
})
