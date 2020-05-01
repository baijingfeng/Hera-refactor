import { CHANGE_TABLE_FORM_TYPE } from '../action-types'

const initialFormDeps = {
	tableFormType: '租赁类',
}

export const formDeps = (state = initialFormDeps, { type, tableFormType }) => {
	switch (type) {
		case CHANGE_TABLE_FORM_TYPE:
			return { ...state, tableFormType }

		default:
			return state
	}
}
