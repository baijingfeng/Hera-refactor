import React, { Component } from 'react'
import { ModelTable } from '../../../models'
import { renderReport } from '../../../utils'
import { reqLogFirstPageData } from '../../../api'

export class LogTable extends Component {
	columns = [
		{
			title: '日志等级',
			dataIndex: 'level',
			key: 'log-level',
		},
		{
			title: '操作时间',
			dataIndex: 'timestamp',
			key: 'log-timestamp',
		},
		{
			title: '操作类型',
			dataIndex: 'type',
			key: 'log-type',
		},
		{
			title: '操作人',
			dataIndex: 'user',
			key: 'log-user',
			render: user => user && user.username,
		},
		{
			title: '修改内容',
			dataIndex: 'report',
			key: 'log-report',
			render: renderReport,
		},
	]

	getTablePage = async () => {
		const {
			data: { operations },
		} = await reqLogFirstPageData()
		return { dataList: [...operations] }
	}

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
