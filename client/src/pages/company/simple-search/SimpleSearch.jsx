import React from 'react'

import { SimpleSearchFilter } from './components/SimpleSearchFilter'
import { SimpleSearchTable } from './components/SimpleSearchTable'

export const SimpleSearch = () => {
	return (
		<div>
			<SimpleSearchFilter />
			<SimpleSearchTable />
		</div>
	)
}