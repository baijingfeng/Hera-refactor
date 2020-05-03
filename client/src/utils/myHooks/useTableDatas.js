import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	addTableDatas,
	changeTableDatas,
	removeTableDatas,
} from '../../redux/actions'

const getRowByKey = (key, newDatas = []) =>
	newDatas.find(item => item.key === key)

export const useTableDatas = ({ rowKey, initialRowValue } = {}) => {
	const datas = useSelector(store => store.tableDatas.dataList)
	const index = useSelector(store => store.tableDatas.index)
	const dispatch = useDispatch()

	const addNewRow = useCallback(
		initValue => {
			const lastInitValue = initialRowValue || initValue
			const newDatas = datas.map(item => ({ ...item }))
			newDatas.push({
				key: `KEY_${index}`,
				...lastInitValue,
			})

			dispatch(addTableDatas(newDatas))
		},
		[datas, index, dispatch]
	)

	const handleFieldChange = useCallback(
		(key, fieldName, value) => {
			const newDatas = [...datas]
			const target = getRowByKey(key, newDatas)
			if (target) {
				target[fieldName] = value
				console.log('changeTableData')
				dispatch(changeTableDatas(newDatas))
			}
		},
		[datas, getRowByKey, dispatch, changeTableDatas]
	)

	const removeRow = useCallback(
		key => {
			const targetKey = rowKey || key
			const newDatas = datas.filter(item => item.key !== targetKey)
			dispatch(removeTableDatas(newDatas))
		},
		[rowKey, datas, dispatch]
	)

	return {
		datas,
		index,
		addNewRow,
		handleFieldChange,
		removeRow,
	}
}
