import React, { Component } from 'react'
import { ModelTable } from '../../../models'

export class FlowTable extends Component {
	columns = [
		{
			title: '时间',
			dataIndex: 'datetime',
			key: 'datetime',
		},
		{
			title: '类型',
			dataIndex: 'type',
			key: 'type',
		},
		{
			title: '操作人',
			dataIndex: 'operator',
			key: 'operator',
		},
		{
			title: '内容详情',
			key: 'content',
			dataIndex: 'content',
		},
		{
			title: '操作',
			key: 'action',
		},
	]

	getTablePage = params =>
		Promise.resolve({
			dataList: [],
		})

	render() {
		const params = {}
		return (
			<ModelTable
				columns={this.columns}
				params={params}
				getPage={this.getTablePage}
			/>
		)
	}
}
