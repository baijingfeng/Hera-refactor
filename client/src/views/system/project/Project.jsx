import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Card, message } from 'antd'

import { TAB2TYPE } from '../../../configs'
import { AddNewButton } from '../../../components'
import { ProjectTable } from './components/ProjectTable'

const tabList = [
	{
		key: '基地仓库',
		tab: '基地仓库',
	},
	{
		key: '项目仓库',
		tab: '项目仓库',
	},
	{
		key: '租赁客户',
		tab: '租赁客户',
	},
	{
		key: '同行客户',
		tab: '同行客户',
	},
	{
		key: '供应商',
		tab: '供应商',
	},
	{
		key: '承运商',
		tab: '承运商',
	},
]

export const Project = () => {
	const projects = useSelector(store => store.system.rawProjects)
	const [key, setKey] = useState('基地仓库')
	const [loading, setLoading] = useState(false)
	const [pageData, setPageData] = useState([])

	useEffect(() => {
		const getTablePage = async () => {
			setLoading(true)
			
			const keyProjects = projects.filter(
				project => key === project.type
			)
      console.log('keyProjects', keyProjects)
			message.success('加载客户列表成功!')
			setPageData(keyProjects)
			setLoading(false)
		}

		getTablePage()
	}, [key, projects])

	const addNewProduct = () => {}

	const editProduct = product => {}

	const deleteProduct = async id => {}

	return (
		<Card
			style={{ width: '100%' }}
			tabList={tabList}
			activeTabKey={key}
			onTabChange={setKey}
			tabBarExtraContent={<AddNewButton />}
		>
			<ProjectTable
				addNewProduct={addNewProduct}
				editProduct={editProduct}
				deleteProduct={deleteProduct}
				pageData={pageData}
				loading={loading}
			/>
		</Card>
	)
}
