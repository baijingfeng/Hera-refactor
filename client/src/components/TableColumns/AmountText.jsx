import React, { useEffect } from 'react'

import { toFixedWithoutTrailingZero as fixed } from '../../tools'

const getSum = ({ total, price }) => {
	const sum = total * price
	return isNaN(sum) ? false : sum
}

/** 表单列表项-金额 */
export const AmountText = ({ handleFieldChange, rowValue }) => {
	const amount = fixed(getSum(rowValue))
	const {key} = rowValue
	useEffect(() => {
		handleFieldChange(key, 'amount', amount)
	}, [amount, handleFieldChange, key])

	return <span>{amount}</span>
}
