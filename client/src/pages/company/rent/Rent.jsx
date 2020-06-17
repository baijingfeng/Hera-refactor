import React, { useState } from 'react'
import { message } from 'antd'

import { queryRentData } from '../../../api'
import { parseRangeDate } from '../../../tools'
import { RentFilter } from './components/RentFilter'
import { RentTable } from './components/RentTable'


export const Rent = () => {
	const [rentDatas, setRentDatas] = useState([])

	const onSubmit = async ({ rangeDate, ...rest }) => {
		const params = {
			...parseRangeDate(rangeDate),
			...rest,
		}

		try {
			const { data } = await queryRentData(params)

			const { rent } = data
			setRentDatas(rent)
			message.success('查询成功')
		} catch (error) {
			message.error(`查询失败 ${error}`)
		}
	}

	return (
		<>
			<RentFilter onSubmit={onSubmit} />
			<RentTable rentDatas={rentDatas} />
		</>
	)
}
