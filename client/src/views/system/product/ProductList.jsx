import React, { useState, useEffect } from 'react'
import { Card, message, Button, Modal } from 'antd'
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

import {
	reqSystemProduct,
	createSystemProduct,
	editSystemProduct,
	deleteSystemProduct,
} from '../../../api'
import { ProductFilter } from './components/ProductFilter'
import { ProductTable } from './components/ProductTable'
import { ProductForm } from './components/ProductForm'

const getFilterPageData = (pageData, filterValue) =>
	pageData.filter(({ name }) => new RegExp(filterValue).test(name))

export const ProductList = () => {
	const [modalVisible, setModalVisible] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const [modalTitle, setModalTitle] = useState('新增')
	const [loading, setLoading] = useState(false)
	const [pageData, setPageData] = useState([])
	const [needUpdate, setNeedUpdate] = useState(true)
	const [inputValue, setInputValue] = useState('')

	useEffect(() => {
		const getTablePage = async () => {
			setLoading(true)
			const {
				data: { products },
			} = await reqSystemProduct()
			message.success('查询产品信息成功!')
			setPageData(products)
			setLoading(false)
		}
		if (needUpdate) {
			getTablePage()
			setNeedUpdate(false)
		}
	}, [needUpdate])

	const handleOk = () => {
		setConfirmLoading(true)
		setConfirmLoading(false)
		setModalVisible(false)
	}

	const handleCancel = () => {
		setModalVisible(false)
	}

	const addNewProduct = () => {
		setModalVisible(true)
	}

	const editProduct = () => {
		setModalTitle('编辑')
		setModalVisible(true)
	}

	const deleteProduct = number => {
		Modal.confirm({
			title: '确认删除?',
			icon: <ExclamationCircleOutlined />,
			content:
				'删除后可能造成不必要的麻烦，如果需要恢复，请新增一个编号相同的产品！',
			okText: '确定删除',
			okType: 'danger',
			cancelText: '取消',
			onOk: async () => {
				try {
					await deleteSystemProduct(number)
					message.success(`删除记录${number}成功`)
					setNeedUpdate(true)
				} catch (error) {
					message.error('删除失败')
				}
			},
		})
	}

	const getFilterValue = e => {
		setInputValue(e.target.value)
	}

	return (
		<Card
			title="产品信息维护"
			style={{ width: '100%' }}
			extra={
				<Button type="primary" onClick={addNewProduct}>
					<PlusOutlined /> 新增
				</Button>
			}
		>
			<ProductFilter getFilterValue={getFilterValue} />
			<ProductTable
				editProduct={editProduct}
				deleteProduct={deleteProduct}
				pageData={getFilterPageData(pageData, inputValue)}
				loading={loading}
			/>
			<Modal
				title={modalTitle}
				visible={modalVisible}
				confirmLoading={confirmLoading}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<ProductForm />
			</Modal>
		</Card>
	)
}
