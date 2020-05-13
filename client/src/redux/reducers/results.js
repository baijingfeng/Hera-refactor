import {
	SAVE_RESULTS,
	PAYER_TRANSPORT_PAID_STATUS_CHANGED,
	PAYER_TRANSPORT_CHECKED_STATUS_CHANGED,
	OPERATION_TOP_K_RESULT,
	OPERATION_NEXT_K_RESULT,
} from '../action-types'

/**
 * 缓存网络请求结果
 */
export function results(state = new Map(), { type, data }) {
	switch (type) {
		case SAVE_RESULTS:
			return state.set(data.key, data.result)
		case PAYER_TRANSPORT_PAID_STATUS_CHANGED: {
			const records = state.get(data.key) || []
			const newRecords = []
			records.forEach(record => {
				if (record._id === data.id) {
					record.transportPaid = data.paid
				}
				newRecords.push(record)
			})
			return state.set(data.key, newRecords)
		}
		case PAYER_TRANSPORT_CHECKED_STATUS_CHANGED: {
			const records = state.get(data.key) || []
			const newRecords = []
			records.forEach(record => {
				if (record._id === data.id) {
					record.transportChecked = data.checked
				}
				newRecords.push(record)
			})
			return state.set(data.key, newRecords)
		}
		case OPERATION_TOP_K_RESULT: {
			const newOps = data.operations
			return state.set(data.key, newOps)
		}
		case OPERATION_NEXT_K_RESULT: {
			const operations = state.get(data.key)
			return state.set(data.key, operations.concat(data.operations))
		}
		default:
			return state
	}
}
