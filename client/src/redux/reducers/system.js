import { Map, OrderedMap } from 'immutable'

import { makeKeyFromNameSize } from '../../utils'
import { SystemRecord } from '../records'
import { SYSTEM_LOADED } from '../action-types'

const system = (state = new SystemRecord(), { type, data }) => {
	switch (type) {
		case SYSTEM_LOADED:
			return getNewSystemState(state, data)
		default:
			return state
	}
} 

const transformProjects = (projects = []) =>
	new Map(projects.map(project => [project._id, project]))

const transformUsers = (users = []) =>
	new Map(users.map(user => [user._id, user]))

const transformProducts = (products = []) => {
	const results = {}
	products.forEach(product => {
		const { name, size } = product
		results[makeKeyFromNameSize(name, size)] = product
	})

	return results
}

const getArticles = (products = []) =>
	new OrderedMap(products.map(product => [product.number, product]))

const getNewSystemState = (
	state,
	{ base, user, config, projects, users, products }
) =>
	state
		.set('base', base)
		.set(
			'projects',
			transformProjects(projects).filter(
				project => project.status !== 'FINISHED'
			)
		)
		.set('rawProjects', projects)
		.set('articles', getArticles(products))
		.set('products', transformProducts(products))
		.set('users', transformUsers(users))
		.set('user', user)
		.set('config', config)
		.set('loading', false)

export default system
