import React from 'react'
import { message } from 'antd'

import { renderReport, renderLogLevel, renderTime } from '../../../utils'
import { reqLogFirstPageData, reqLogNextPageData } from '../../../api'
import { ModelTable } from '../../../components'

const columns = [
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
		render: type => type || '修改',
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
		render: renderReport,
	},
]

const getTablePage = async () => {
	const {
		data: { operations },
	} = await reqLogFirstPageData()
	message.success('查询最近日志记录成功!')
	return { dataList: [...operations] }
}

const getNextTablePage = async currentPageData => {
	const lastItem = [...currentPageData].pop()
	const { _id } = lastItem

	const {
		data: { operations },
	} = await reqLogNextPageData({ id: _id })

	return { dataList: [...currentPageData, ...operations] }
}

const LogTable = (props, logTableRef) => {
	// TODO: 统一定义接口格式
	// TODO: 写分页器
	const params = {}
	return (
		<ModelTable
			ref={logTableRef}
			rowKey={'_id'}
			columns={columns}
			params={params}
			getPage={getTablePage}
			getNextPage={getNextTablePage}
		/>
	)
}

export default React.forwardRef(LogTable)
