import React, { Component } from 'react'
import { ModelTable } from '../../../models'
import { renderReport, renderLogLevel, renderTime } from '../../../utils'
import { reqLogFirstPageData } from '../../../api'

export class LogTable extends Component {
	columns = [
		{
			title: '日志等级',
			dataIndex: 'level',
			key: 'level',
			render: renderLogLevel,
		},
		{
			title: '操作时间',
			dataIndex: 'timestamp',
			key: 'timestamp',
			render: renderTime, // TODO:　解决时间显示为英文的问题
		},
		{
			title: '操作类型',
			dataIndex: 'type',
			key: 'type',
			render: type =>　 type || '修改'
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
	// TODO: 统一定义接口格式; 以及写分页器
	render() {
		const params = {}
		return (
			<ModelTable
				rowKey={'_id'}
				columns={this.columns}
				params={params}
				getPage={this.getTablePage}
			/>
		)
	}
}
