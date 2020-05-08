import React from 'react'

import { TransportFilter } from './components/TransportFilter'
import { TransportTable } from './components/TransportTable'
import { TransportStats } from './components/TransportStats'

export const Transport = () => {
	return (
		<>
			<TransportFilter />
			<TransportTable />
			<TransportStats />
		</>
	)
}
