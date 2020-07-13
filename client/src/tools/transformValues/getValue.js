import { Map } from 'immutable'
import { total_, toFixedWithoutTrailingZero } from './system'

export const getProjectName = (projects, id) => {
	const project = projects.get(id)
	return project ? project.company + project.name : ''
}

const getTotal = (entries = [], products) => {
	let names = new Map()
	entries.forEach(entry => {
		names = names.update(
			entry.name,
			0,
			total => total + total_(entry, products)
		)
	})

	return names
}

export const getTotalString = (products, entries) => {
	let totals = []
	getTotal(entries, products).forEach((v, k) => {
		totals.push(k + '：' + toFixedWithoutTrailingZero(v)) //拼凑显示的字符串
	})

	return totals.join(' ')
}
