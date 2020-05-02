import React, { useRef, useState, useCallback } from 'react'

import { EditableTable } from '../../../../components'
import { tradeColumns, tradeColumnsInitialRowValue } from '../../../../configs'

const TradeEditableTable = () => {
	const [index, setIndex] = useState(0)
	const [tableDatas, setTableDatas] = useState(value)

	const tableForm = useRef(null)
	const columns = tradeColumns.map(itemFunc => itemFunc(tableForm))
	const initialRowValue = tradeColumnsInitialRowValue

	const addNewRow = useCallback(() => {
		const newDatas = tableDatas.map(item => ({ ...item }))
		newDatas.push({
			key: `KEY_${index}`,
			...initialRowValue,
		})
		setIndex(index + 1)
		setTableDatas(newDatas)

		if (onChange) {
			onChange(newDatas)
		}
	}, [tableDatas, initialRowValue, onChange])

	const getRowByKey = (key, newData) =>
		(newData || data || []).find(item => item.key === key)

	const removeRow = key => {
		const newData = (data || []).filter(item => item.key !== key)
		setData(newData)

		if (onChange) {
			onChange(newData)
		}
	}

	const handleFieldChange = (e, fieldName, key, value) => {
		const newData = [...data]

		const target = getRowByKey(key, newData)
		if (target) {
			target[fieldName] = e ? e.target.value : value
			setData(newData)
		}

		if (onChange) {
			onChange(newData)
		}
	}

	return (
		<EditableTable
			ref={tableForm}
			columns={columns}
			tableDatas={value}
			initialRowValue={initialRowValue}
			onChange={onChange}
			addNewRow={addNewRow}
		/>
	)
}

export default TradeEditableTable
