import React, { useState } from 'react'

import { queryRentData } from '../../../api'
import { parseRangeDate } from '../../../utils'
import { RentFilter } from './components/RentFilter'
import { RentTable } from './components/RentTable'

export const Rent = () => {
	const [rentDatas, setRentDatas] = useState([])

	const onSubmit = async ({ rangeDate, ...rest }) => {
		const {
			data: { rent },
		} = await queryRentData({ ...parseRangeDate(rangeDate), ...rest })

		setRentDatas(rent)
	}

	return (
		<>
			<RentFilter onSubmit={onSubmit} />
			<RentTable rentDatas={rentDatas} />
		</>
	)
}
