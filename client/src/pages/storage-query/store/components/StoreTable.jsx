import React from 'react'
import { Card, Table } from 'antd'

import {
	toFixedWithoutTrailingZero,
	makeKeyFromNameSize,
} from '../../../../tools'

const columns = [
	{
		title: '类型',
		dataIndex: 'type',
		key: 'type',
	},
	{
		title: '名称',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: '规格',
		dataIndex: 'size',
		key: 'size',
	},
	{
		title: '入库数量',
		dataIndex: 'in',
		key: 'in',
	},
	{
		title: '出库数量',
		dataIndex: 'out',
		key: 'out',
	},
	{
		title: '结存数量',
		dataIndex: 'delta',
		key: 'delta',
	},
	{
		title: '小计',
		dataIndex: 'total',
		key: 'total',
	},
]

const oldProductStructure = products => {
	const names = {}
	const results = []
	products.forEach(product => {
		if (!names[product.name]) {
			names[product.name] = product
			results.push(product)
			product.sizes = []
		}
		names[product.name].sizes.push(product.size)
	})
	return results
}

/**
 * 计算规格的数值表达
 * @param product
 * @returns {number}
 */
export const getScale = (product) => {
  return product.isScaled ? product.scale : 1
}

const getRecords = stock => {
	const inRecords = stock.inRecords
	const outRecords = stock.outRecords
	let inRecordMap = {}
	inRecords.forEach(record => {
		inRecordMap[makeKeyFromNameSize(record._id.name, record._id.size)] =
			record.sum
	})
	let outRecordMap = {}
	outRecords.forEach(record => {
		outRecordMap[makeKeyFromNameSize(record._id.name, record._id.size)] =
			record.sum
	})

	let records = [] // [{ total, entries }]
	const articles = oldProductStructure(this.props.articles.toArray())
	articles.forEach(article => {
		// 算每一项
		let inTotal = 0
		let outTotal = 0
		let total = 0

		let record = {
			total: null,
			entries: [],
		}

		// 如果有规格数据的话
		article.sizes.forEach(size => {
			const key = makeKeyFromNameSize(article.name, size)
			let value = {}
			value.delta = 0
			let exists = false
			if (key in inRecordMap) {
				value.in = inRecordMap[key]
				value.delta = value.in
				value.inTotal = toFixedWithoutTrailingZero(
					inRecordMap[key] * getScale(this.props.products[key])
				)
				inTotal += Number(value.inTotal)
				exists = true
			}
			if (key in outRecordMap) {
				value.out = outRecordMap[key]
				value.delta -= value.out
				value.outTotal = toFixedWithoutTrailingZero(
					outRecordMap[key] * getScale(this.props.products[key])
				)
				outTotal += Number(value.outTotal)
				exists = true
			}

			if (exists) {
				value.total = toFixedWithoutTrailingZero(
					(value.inTotal || 0) - (value.outTotal || 0)
				)
				record.entries.push({
					type: article.type,
					name: article.name,
					size: size,
					...value,
				})
			}
		})

		// 如果没有规格数据，比如电脑
		if (article.sizes.length === 0) {
			const size = undefined
			const key = makeKeyFromNameSize(article.name, size)
			let value = {}
			value.delta = 0
			let exists = false
			if (key in inRecordMap) {
				value.in = inRecordMap[key]
				value.delta += value.in
				value.inTotal = toFixedWithoutTrailingZero(
					inRecordMap[key] * getScale(this.props.products[key])
				)
				inTotal += Number(value.inTotal)
				exists = true
			}
			if (key in outRecordMap) {
				value.out = outRecordMap[key]
				value.delta -= value.out
				value.outTotal = toFixedWithoutTrailingZero(
					outRecordMap[key] * getScale(this.props.products[key])
				)
				outTotal += Number(value.outTotal)
				exists = true
			}

			if (exists) {
				value.total = toFixedWithoutTrailingZero(
					(value.inTotal || 0) - (value.outTotal || 0)
				)
				record.entries.push({
					type: article.type,
					name: article.name,
					size: size,
					...value,
				})
			}
		}

		// 计算合计
		if (inTotal !== 0 || outTotal !== 0) {
			total = toFixedWithoutTrailingZero(inTotal - outTotal)
			record.total = {
				type: article.type,
				name: article.name,
				inTotal: toFixedWithoutTrailingZero(inTotal),
				outTotal: toFixedWithoutTrailingZero(outTotal),
				total,
			}

			records.push(record)
		}
	})
	return records
}
export const StoreTable = ({ tableDatas }) => {
	return (
		<Card style={{ marginTop: '20px' }}>
			<Table
				columns={columns}
				dataSource={tableDatas}
				rowKey={'_id'}
				pagination={{
					hideOnSinglePage: true,
					simple: true,
				}}
			/>
		</Card>
	)
}
