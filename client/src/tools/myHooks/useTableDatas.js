import { useState, useCallback } from 'react'

const getRowByKey = (key, newDatas = []) =>
	newDatas.find(item => item.key === key)

export const useTableDatas = ({ initialRowValue = {}, value = [] } = {}) => {
	const [datas, setDatas] = useState(value)
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

	const handleFieldChange = useCallback((key, fieldName, value) => {
		setDatas(prevDatas => {
			const newDatas = [...prevDatas]
			const target = getRowByKey(key, newDatas)

			if (target) {
				target[fieldName] = value
			}

			return newDatas
		})
	}, [])

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
