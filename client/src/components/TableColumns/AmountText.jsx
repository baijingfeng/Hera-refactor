import React, { useEffect } from 'react'

import { toFixedWithoutTrailingZero as fixed, useTableDatas } from '../../tools'

const getSum = ({ total, price }) => {
	const sum = total * price
	return isNaN(sum) ? false : sum
}

export const AmountText = ({ rowValue }) => {
	const amount = fixed(getSum(rowValue))
	const { handleFieldChange } = useTableDatas()

	useEffect(() => {
		// console.log("AmountText")
		handleFieldChange(rowValue.key, 'amount', amount)
	}, [rowValue.key, amount, handleFieldChange])

	return <span>{amount}</span>
}
