import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Card, message } from 'antd'

import { OperatorTable } from './components/OperatorTable'


export const Operator = () => {
	const users = useSelector(store => store.system.users)
	const [loading, setLoading] = useState(false)
	const [pageData, setPageData] = useState([])

	useEffect(() => {
		const getTablePage = async () => {
			setLoading(true)
			const seqUsers = users.valueSeq().toArray()
			message.success('加载操作员列表成功!')
			setPageData(seqUsers)
			setLoading(false)
		}

		getTablePage()
	}, [users])

	const addNewProduct = () => {}

	const editProduct = product => {}

	const deleteProduct = async id => {}

	return (
		<Card style={{ width: '100%' }}>
			<OperatorTable
				addNewProduct={addNewProduct}
				editProduct={editProduct}
				deleteProduct={deleteProduct}
				pageData={pageData}
				loading={loading}
			/>
		</Card>
	)
}
