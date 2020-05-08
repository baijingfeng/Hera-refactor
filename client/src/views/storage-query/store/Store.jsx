import React from 'react'

import { StoreFilter } from './components/StoreFilter'
import { StoreTable } from './components/StoreTable'

export const Store = () => {
	return (
		<>
			<StoreFilter />
			<StoreTable />
		</>
	)
}
