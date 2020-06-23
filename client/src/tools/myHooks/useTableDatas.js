import { useState, useCallback } from 'react'
import { set } from 'store'

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

	const handleFieldChange = useCallback((key, fieldName, value) => {
		setDatas(prevDatas => {
			const newDatas = [...prevDatas]
			const target = getRowByKey(key, newDatas)

			if (target) {
				target[fieldName] = value
			}
			console.log('newDatas', newDatas)
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
