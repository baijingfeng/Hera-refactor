import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { message } from 'antd'

import { querySimpleSearchData } from '../../../api'
import { parseRangeDate } from '../../../tools'
import { SimpleSearchFilter } from './components/SimpleSearchFilter'
import { SimpleSearchTable } from './components/SimpleSearchTable'


export const SimpleSearch = () => {
	const { _id } = useSelector(state => state.system.base)
	const [tableDatas, setTableDatas] = useState([])

	const onSubmit = async ({ rangeDate, ...rest }) => {
		const params = {
			...parseRangeDate(rangeDate),
			...rest,
			company: true,
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
		<div>
			<SimpleSearchFilter onSubmit={onSubmit} />
			<SimpleSearchTable tableDatas={tableDatas} />
		</div>
	)
}
