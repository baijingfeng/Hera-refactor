import React, { useState, useEffect } from 'react'
import { Card, message } from 'antd'

import { querySystemPrice, deleteSystemPrice } from '../../../api'
import { PriceTable } from './components/PriceTable'

export const Price = () => {
	const [loading, setLoading] = useState(false)
	const [pageData, setPageData] = useState([])
	const [needUpdate, setNeedUpdate] = useState(true)

	useEffect(() => {
		const getTablePage = async () => {
			setLoading(true)
			const {
				data: { plans },
			} = await querySystemPrice()
			message.success('加载合同方案成功!')
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
			await deleteSystemPrice(id)
			message.success(`删除记录${id}成功`)
			setNeedUpdate(true)
		} catch (error) {
			message.error('删除失败')
		}
	}

	return (
		<Card style={{ width: '100%' }}>
			<PriceTable
				addNewProduct={addNewProduct}
				editProduct={editProduct}
				deleteProduct={deleteProduct}
				pageData={pageData}
				loading={loading}
			/>
		</Card>
	)
}
