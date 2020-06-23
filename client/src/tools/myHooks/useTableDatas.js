import { useState, useCallback } from 'react'

const getRowByKey = (key, newDatas = []) =>
	newDatas.find(item => item.key === key)

export const useTableDatas = ({ initialRowValue = {} } = {}) => {
	const [datas, setDatas] = useState([])
	const [index, setIndex] = useState(0)
	const addNewRow = useCallback(() => {
		const newDatas = datas.map(item => ({ ...item }))
		newDatas.push({
			key: `KEY_${index}`,
			...initialRowValue,
		})

		setDatas(newDatas)
		setIndex(prevIndex => prevIndex + 1)
	}, [initialRowValue, datas, index])

	const handleFieldChange = useCallback(
		(key, fieldName, value) => {
			// console.log('key', key)
			// console.log('datas', datas)
			const newDatas = [...datas]
			// console.log('newDatas', newDatas)
			const target = getRowByKey(key, newDatas)
			// console.log('target', target)
			if (target) {
				target[fieldName] = value
				console.log('changeTableData')

				setDatas(newDatas)
			}
		},
		[datas]
	)

	const removeRow = useCallback(
		rowKey => {
			const newDatas = datas.filter(item => item.key !== rowKey)
			setDatas(newDatas)
		},
		[datas]
	)

	return {
		datas,
		addNewRow,
		handleFieldChange,
		removeRow,
	}
}
