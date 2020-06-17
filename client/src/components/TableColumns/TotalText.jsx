import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
	total_,
	toFixedWithoutTrailingZero as fixed,
	useTableDatas,
} from '../../tools'

const getTotal = (products, rowValue) => {
	try {
		const total = total_(rowValue, products)
		return isNaN(total) ? false : total
	} catch (e) {
		return false
	}
}

/** 表单列表项-小计 */
export const TotalText = ({ rowValue }) => {
	const products = useSelector(store => store.system.products)
	const total = fixed(getTotal(products, rowValue))

	const { handleFieldChange } = useTableDatas()

	const { key } = rowValue
	useEffect(() => {
		console.log('TotalText')
		handleFieldChange(key, 'total', total)
	}, [handleFieldChange, key, total])

	return <span>{total}</span>
}
