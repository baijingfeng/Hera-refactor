import React, { useRef, useState, useCallback } from 'react'

import { EditableTable } from '../../../../components'
import { tradeColumns, tradeColumnsInitialRowValue } from '../../../../configs'

const TradeEditableTable = ({ value, onChange }) => {
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
