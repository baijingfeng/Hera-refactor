import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { EditableTable } from '../../../../components'
import { tradeColumns, tradeColumnsInitialRowValue } from '../../../../configs'
import { changeTableDatas } from '../../../../redux/actions'

const TradeEditableTable = () => {
	const dispatch = useDispatch()
	const [index, setIndex] = useState(0)
	const [datas, setDatas] = useState([])

	const columns = tradeColumns.map(itemFunc => itemFunc())
	const initialRowValue = tradeColumnsInitialRowValue

	const addNewRow = useCallback(() => {
		const newDatas = datas.map(item => ({ ...item }))
		newDatas.push({
			key: `KEY_${index}`,
			...initialRowValue,
		})

		setIndex(index + 1)
		setDatas(newDatas)
		dispatch(changeTableDatas(newDatas))

	}, [datas, initialRowValue, dispatch, index])

	// const getRowByKey = (key, newDatas) =>
	// 	(newDatas || datas || []).find(item => item.key === key)

	// const removeRow = key => {
	// 	const newDatas = (datas || []).filter(item => item.key !== key)

	// 	setDatas(newDatas)
	// 	dispatch(changeTableDatas(newDatas))
	// }

	// const handleFieldChange = (e, fieldName, key, value) => {
	// 	const newDatas = [...datas]

	// 	const target = getRowByKey(key, newDatas)
	// 	if (target) {
	// 		target[fieldName] = e ? e.target.value : value

	// 		setDatas(newDatas)
	// 		dispatch(changeTableDatas(newDatas))
	// 	}
	// }

	return (
		<EditableTable
			columns={columns}
			tableDatas={datas}
			initialRowValue={initialRowValue}
			addNewRow={addNewRow}
		/>
	)
}

export default TradeEditableTable
