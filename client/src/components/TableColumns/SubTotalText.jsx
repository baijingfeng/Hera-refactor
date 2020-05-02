import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
	total_,
	toFixedWithoutTrailingZero as fixed,
	useTableDatas,
} from '../../utils'

const getTotal = (products, rowValue) => {
	try {
		const total = total_(rowValue, products)
		return isNaN(total) ? false : total
	} catch (e) {
		return false
	}
}

/** 表单列表项-小计 */
export const SubTotalText = ({ rowValue }) => {
	const products = useSelector(store => store.system.products)
	const subtotal = fixed(getTotal(products, rowValue))

  const { handleFieldChange } = useTableDatas()
  
	useEffect(() => {
		handleFieldChange(rowValue.key, 'subtotal', subtotal)
	}, [rowValue, subtotal])

	return <span>{subtotal}</span>
}
