import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { Table, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const TableForm = (
	{ columns = [], value = [], initialValue = {}, onChange },
	ref
) => {
	const [index, setIndex] = useState(0)
	const [data, setData] = useState(value)

	const getRowByKey = (key, newData) =>
		(newData || data || []).find(item => item.key === key)

	const addRow = () => {
		const newData = (data || []).map(item => ({ ...item }))
		newData.push({
			key: `KEY_${index}`,
			...initialValue,
		})
		setIndex(index + 1)
		setData(newData)
	}

	const removeRow = key => {
		const newData = (data || []).filter(item => item.key !== key)
		console.log('newData', newData)
		setData(newData)
	}

	const handleFieldChange = (e, fieldName, key, value) => {
		const newData = [...data]
		const target = getRowByKey(key, newData)
		if (target) {
			target[fieldName] = e ? e.target.value : value
			setData(newData)
		}
	}

	useImperativeHandle(ref, () => ({
		handleFieldChange,
		removeRow,
	}))

	return (
		<>
			<Table columns={columns} dataSource={data} pagination={false} />
			<Button
				onClick={addRow}
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
