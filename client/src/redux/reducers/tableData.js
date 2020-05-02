import { CHANGE_TABLE } from '../action-types'

const initialTableData = {
  type: '租赁类',
  name: '',
  size: '',
  count: 0,
}

export const tableData = (state = initialTableData, { type, payload }) => {
	switch (type) {
		case CHANGE_TABLE:
			return { ...state, ...payload }

		default:
			return state
	}
}