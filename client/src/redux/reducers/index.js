import { combineReducers } from 'redux'

import system from './system'
import { formDeps } from './formDeps'
import { tableData } from './tableData'


export default combineReducers({
	system,
	formDeps,
	tableData,
})
