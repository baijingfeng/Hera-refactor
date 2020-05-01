import { combineReducers } from 'redux'

import system from './system'

import { formDeps } from './formDeps'

export default combineReducers({
	system,
	formDeps,
})
