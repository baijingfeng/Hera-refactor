import { combineReducers } from 'redux'

import system from './system'
import { tableDatas } from './tableDatas'
import { results } from './results'
import { store } from './store'

export default combineReducers({
	system,
	tableDatas,
	results,
	store,
})
