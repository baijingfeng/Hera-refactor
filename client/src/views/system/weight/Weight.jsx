import React, { useState, useEffect } from 'react'
import { Card, message } from 'antd'

import { querySystemWeight, deleteSystemWeight } from '../../../api'
import { WeightTable } from './components/WeightTable'

export const Weight = () => {
	const [loading, setLoading] = useState(false)
	const [pageData, setPageData] = useState([])
	const [needUpdate, setNeedUpdate] = useState(true)

	useEffect(() => {
		const getTablePage = async () => {
			setLoading(true)
			const {
				data: { plans },
			} = await querySystemWeight()
			message.success('加载计重方案成功!')
			setPageData(plans)
			setLoading(false)
		}
		if (needUpdate) {
			getTablePage()
			setNeedUpdate(false)
		}
	}, [needUpdate])

	const addNewProduct = () => {}

	const editProduct = product => {}

	const deleteProduct = async id => {
		try {
			await deleteSystemWeight(id)
			message.success(`删除记录${id}成功`)
			setNeedUpdate(true)
		} catch (error) {
			message.error('删除失败')
		}
	}

	return (
		<Card style={{ width: '100%' }}>
			<WeightTable
				addNewProduct={addNewProduct}
				editProduct={editProduct}
				deleteProduct={deleteProduct}
				pageData={pageData}
				loading={loading}
			/>
		</Card>
	)
}
