import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { message } from 'antd'

import { querySimpleSearchData } from '../../../api'
import { parseRangeDate } from '../../../utils'
import { TransportFilter } from './components/TransportFilter'
import { TransportTable } from './components/TransportTable'
import { TransportStats } from './components/TransportStats'

export const Transport = () => {
	const { _id } = useSelector(state => state.system.base)
	const [tableDatas, setTableDatas] = useState([])

	const onSubmit = async ({ rangeDate, ...rest }) => {
		const params = {
			...parseRangeDate(rangeDate),
			...rest,
			company: true,
			hasTransport: true, // 这个里面最重要的参数
			self: _id,
		}

		try {
			const { data } = await querySimpleSearchData(params)
			const { search } = data
			setTableDatas(search)
			message.success('查询成功')
		} catch (error) {
			message.error(`查询失败 ${error}`)
		}
	}
	return (
		<>
			<TransportFilter onSubmit={onSubmit} />
			<TransportTable tableDatas={tableDatas} />
			<TransportStats />
		</>
	)
}
