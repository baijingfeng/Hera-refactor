import { combineReducers } from 'redux'

import system from './system'
import { tableDatas } from './tableDatas'

export default combineReducers({
	system,
	tableDatas,
})
