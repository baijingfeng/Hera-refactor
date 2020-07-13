import React, { useState } from 'react'
import { message } from 'antd'

import { queryStoreData } from '../../../api'
import { parseRangeDate } from '../../../tools'
import { StoreFilter } from './components/StoreFilter'
import { StoreTable } from './components/StoreTable'

export const Store = () => {
	const [tableDatas, setTableDatas] = useState([])

	const onSubmit = async ({ rangeDate, ...rest }) => {
		const params = {
			...parseRangeDate(rangeDate),
			...rest,
		}

		try {
			const { data } = await queryStoreData(params)

			const { rent } = data
			setTableDatas(rent)
			message.success('查询成功')
		} catch (error) {
			message.error(`查询失败 ${error}`)
		}
	}

	return (
		<>
			<StoreFilter onSubmit={onSubmit} />
			<StoreTable tableDatas={tableDatas} />
		</>
	)
}
