import { useState, useCallback } from 'react'

const getRowByKey = (key, newDatas = []) =>
	newDatas.find(item => item.key === key)

export const useTableDatas = ({ rowKey, initialRowValue } = {}) => {
	// const datas = useSelector(store => store.tableDatas.dataList)
	// const index = useSelector(store => store.tableDatas.index)
	// const dispatch = useDispatch()

	const [datas, setDatas] = useState([])
	const [index, setIndex] = useState(0)
	const addNewRow = useCallback(
		initValue => {
			const lastInitValue = initialRowValue || initValue
			const newDatas = datas.map(item => ({ ...item }))
			newDatas.push({
				key: `KEY_${index}`,
				...lastInitValue,
			})

			setIndex(prevIndex => prevIndex + 1)
			console.log('newDatas_addNew', newDatas)
			// console.log('index', index)
			
			// dispatch(addTableDatas(newDatas))
			setDatas(newDatas)
			console.log('datas_now', datas)
		},
		[initialRowValue, datas, index]
	)

	const handleFieldChange = useCallback(
		(key, fieldName, value) => {
			const newDatas = [...datas]
			const target = getRowByKey(key, newDatas)
			if (target) {
				target[fieldName] = value
				console.log('changeTableData')
				// dispatch(changeTableDatas(newDatas))
				setDatas(newDatas)
				
			}
		},
		[datas]
	)

	const removeRow = useCallback(
		key => {
			console.log('datas', datas)
			const targetKey = rowKey || key
			const newDatas = datas.filter(item => item.key !== targetKey)
			// dispatch(removeTableDatas(newDatas))
			console.log('targetKey', targetKey)
			console.log('newDatas', newDatas)
			setDatas(newDatas)
		},
		[rowKey, datas]
	)

	return {
		datas,
		index,
		addNewRow,
		handleFieldChange,
		removeRow,
	}
}
