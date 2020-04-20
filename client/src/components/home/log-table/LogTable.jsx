import React, { Component } from 'react'
import { ModelTable } from '../../../models'

export class LogTable extends Component {
	columns = [
		{
			title: '日志等级',
			dataIndex: 'level',
			key: 'level',
		},
		{
			title: '操作时间',
			dataIndex: 'timestamp',
			key: 'timestamp',
		},
		{
			title: '操作类型',
			dataIndex: 'type',
			key: 'type',
		},
		{
			title: '操作人',
			dataIndex: 'user',
			key: 'user',
			render: user => user && user.username,
		},
		{
			title: '修改内容',
			dataIndex: 'report',
			key: 'report',
			render: (report ={}) =>
				report.message ? report.message : this.renderReport(report),
		},
	]

	getTablePage = params =>
		Promise.resolve({
			dataList: this.data,
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
