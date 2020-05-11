import React from 'react'

import { TransportFilter } from './components/TransportFilter'
import { TransportTable } from './components/TransportTable'

export const Transport = () => {
	return (
		<>
			<TransportFilter />
			<TransportTable />
		</>
	)
}
