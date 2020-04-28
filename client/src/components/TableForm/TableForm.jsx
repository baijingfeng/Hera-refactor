import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { Table, Button, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const TableForm = (
	{ columns = [], value = [], initialValue = {}, onChange },
	ref
) => {
	// const [clickedCancel, setClickedCancel] = useState(false)
	// const [loading, setLoading] = useState(false)
	const [index, setIndex] = useState(0)
	// const [cacheOriginData, setCacheOriginData] = useState({})
	const [data, setData] = useState(value)

	const getRowByKey = (key, newData) =>
		(newData || data || []).find(item => item.key === key)

	// const toggleEditable = (e, key) => {
	// 	e.preventDefault()
	// 	const newData = data && data.map(item => ({ ...item }))
	// 	const target = getRowByKey(key, newData, data)
	// 	if (target) {
	// 		// 进入编辑状态前保存原始数据
	// 		if (!target.editable) {
	// 			cacheOriginData[key] = { ...target }
	// 			setCacheOriginData(cacheOriginData)
	// 		}

	// 		target.editable = !target.editable
	// 		setData(newData)
	// 	}
	// }

	const removeRow = key => {
		const newData = (data || []).filter(item => item.key !== key)
		setData(newData)
		if (onChange) {
			onChange(newData)
		}
	}

	const handleFieldChange = (e, fieldName, key, value) => {
		console.log(e, fieldName, key)
		const newData = [...data]
		const target = getRowByKey(key, newData)
		if (target) {
			target[fieldName] = e ? e.target.value : value
			setData(newData)
		}
	}

	// const handleFieldSelectChange = (value, fieldName ,key) => {
	// 	const newData = [...data]
	// 	const target = getRowByKey(key, newData)
	// 	if (target) {
	// 		target[fieldName] = value
	// 		setData(newData)
	// 	}
	// }

	// const saveRow = (e, key) => {
	// 	e.persist()
	// 	setLoading(true)
	// 	setTimeout(() => {
	// 		if (clickedCancel) {
	// 			setClickedCancel(false)
	// 			return
	// 		}

	// 		const target = getRowByKey(key) || {}

	// 		if (!target.type || !target.name) {
	// 			message.error('请填写完整的成员信息')
	// 			e.target.focus()
	// 			setLoading(false)
	// 			return
	// 		}

	// 		delete target.isNew
	// 		toggleEditable(e, key)

	// 		if (onChange) {
	// 			onChange(data)
	// 		}

	// 		setLoading(false)
	// 	}, 500)
	// }

	// const handleKeyPress = (e, key) => {
	// 	// 回车键自动保存
	// 	if (e.key === 'Enter') {
	// 		saveRow(e, key)
	// 	}
	// }

	// const cancelAction = (e, key) => {
	// 	e.preventDefault()
	// 	setClickedCancel(true)
	// 	const newData = [...data]

	// 	const cacheData = newData.map(item => {
	// 		if (item.key === key) {
	// 			if (cacheOriginData[key]) {
	// 				const originItem = {
	// 					...item,
	// 					...cacheOriginData[key],
	// 					editable: false,
	// 				}

	// 				delete cacheOriginData[key]

	// 				setCacheOriginData(cacheOriginData)
	// 				return originItem
	// 			}
	// 		}

	// 		return item
	// 	})

	// 	setData(cacheData)
	// 	setClickedCancel(false)
	// }

	const addNewMember = () => {
		const newData = (data || []).map(item => ({ ...item }))

		newData.push({
			key: `KEY_${index}`,
			editable: true,
			isNew: true,
			...initialValue,
		})

		console.log('newData', newData)

		setIndex(index + 1)
		setData(newData)
		console.log(data, index)
	}

	useImperativeHandle(ref, () => ({
		handleFieldChange,
		// handleKeyPress,
		// cancelAction,
		removeRow,
		// saveRow,
		// toggleEditable,
		// loading,
	}))

	return (
		<>
			<Table
				// loading={loading}
				columns={columns}
				dataSource={data}
				pagination={false}
			/>
			<Button
				onClick={addNewMember}
				type="primary"
				ghost
				style={{
					marginTop: 16,
					marginBottom: 8,
					width: '100%',
					borderStyle: 'dashed',
				}}
			>
				<PlusOutlined />
				增加
			</Button>
		</>
	)
}

export default forwardRef(TableForm)
