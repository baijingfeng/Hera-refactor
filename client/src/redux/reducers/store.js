import { StoreRecord } from '../records'
import { UPDATE_RECORD } from '../action-types'

export function store(state = new StoreRecord(), { type, data }) {
	switch (type) {
		case UPDATE_RECORD:
			const record = data
			return state.update('records', records => records.set(record._id, record))
		// case UPDATE_STORE:
		// 	const stock = data
		// 	return state.update('stocks', stocks => stocks.set(stock.id, stock))
		// case STORE_SEARCH:
		// 	return state.set('search', data)
		// case SIMPLE_SEARCH:
		// 	return state.set('simpleSearch', data)
		default:
			return state
	}
}
