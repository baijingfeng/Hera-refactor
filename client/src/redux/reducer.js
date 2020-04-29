import { Map, OrderedMap } from 'immutable'
import {
  SystemRecord,
  StoreRecord,
  NavRecord,
  PostRecord,
  PostRecords,
  WorkerRecord,
  PaycheckRecord,
} from './records'

export const system = (state = new SystemRecord(), { type, data }) => {
  switch (type) {

  case actionTypes.SYSTEM_LOADED:
    const base = data.base
      const user = data.user
      const config = data.config
      const projects = new Map(data.projects.map(project => [project._id, project]))
      const users = new Map(data.users.map(user => [user._id, user]))
      const products = {}
      const articles = new OrderedMap(data.products.map((product) => {
        products[makeKeyFromNameSize(product.name, product.size)] = product
        return [product.number, product]
      }))

      return state.set('base', base)
        .set('projects', projects.filter(project => project.status !== 'FINISHED'))
        .set('rawProjects', projects)
        .set('articles', articles)
        .set('products', products)
        .set('users', users)
        .set('user', user)
        .set('config', config)
        .set('loading', false)
  case 'typeName':
    return { ...state, ...data }

  default:
    return state
  }
}
