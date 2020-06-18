import React from 'react'
import { Table, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { useTableDatas, useArticles } from '../../tools'
import { ReportFooter } from './components/ReportFooter'

const styleObject = {
	marginTop: 16,
	marginBottom: 8,
	width: '100%',
	borderStyle: 'dashed',
}

const getReport = (fields, nameArticleMap) => {
	let totalObj = {}
	for (let i = 0; i < fields.length; i++) {
		let entry = fields[i]
		let total = entry.total
		total = total ? total : 0

		if (!entry.name) break // name 没填写的时候直接跳出

		if (totalObj[entry.name]) {
			totalObj[entry.name] += Number(total)
		} else {
			totalObj[entry.name] = Number(total)
		}
	}

	let total = []
	for (let i in totalObj) {
		total.push({
			name: i,
			total: totalObj[i],
			unit: nameArticleMap[i].unit,
		})
	}

	return total
}

export const EditableTable = ({ columns = [], initialRowValue = {} }) => {
	const { nameArticleMap } = useArticles()
	const { datas, addNewRow } = useTableDatas({ initialRowValue })
	
	return (
		<>
			<Table columns={columns} dataSource={datas} pagination={false} />
			<Button onClick={addNewRow} type="primary" ghost style={styleObject}>
				<PlusOutlined />
				增加
			</Button>
			<ReportFooter reports={getReport(datas, nameArticleMap)} />
		</>
	)
}
