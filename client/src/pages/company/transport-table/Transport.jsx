import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { message } from 'antd'
import _ from 'lodash'

import { querySimpleSearchData } from '../../../api'
import { parseRangeDate } from '../../../tools'
import { TransportFilter } from './components/TransportFilter'
import { TransportTable } from './components/TransportTable'
import { TransportStatsTable } from './components/TransportStatsTable'

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

	const payeeInfo = {}
	const payees = []
	const rows = tableDatas ? tableDatas.filter(entry => entry.hasTransport) : []
	let total = {
		fee: 0,
		paid: 0,
		checked: 0,
	}
	rows.forEach(entry => {
		if (!entry.hasTransport) {
			// TODO 不是运费单，需要提醒用户
			return
		}
		const fee = (entry.transport.fee =
			(entry.transport.price * entry.transport.weight || 0) +
			_.toNumber(entry.transport.extraPrice ? entry.transport.extraPrice : 0))
		entry.transportPaid = entry.transportPaid || false
		entry.transportChecked = entry.transportChecked || false
		const payee = entry.transport.payee || '未填写'
		if (payee in payeeInfo) {
			payeeInfo[payee].fee += fee
		} else {
			payeeInfo[payee] = {
				fee: fee,
				paid: 0,
				checked: 0,
			}
			payees.push(payee)
		}
		total.fee += fee
		// 已支付
		if (entry.transportPaid) {
			payeeInfo[payee].paid += fee
			total.paid += fee
		}
		// 已核对
		if (entry.transportChecked) {
			payeeInfo[payee].checked += fee
			total.checked += fee
		}
	})
	payees.unshift('合计')
	payeeInfo['合计'] = {
		fee: total.fee,
		paid: total.paid,
		checked: total.checked,
	}

	const statsTableDatas = payees.map(item => ({
		payee: item,
		...payeeInfo[item],
	}))

	return (
		<>
			<TransportFilter onSubmit={onSubmit} />
			<TransportTable tableDatas={rows} />
			{tableDatas.length > 0 && (
				<TransportStatsTable tableDatas={statsTableDatas} />
			)}
		</>
	)
}
