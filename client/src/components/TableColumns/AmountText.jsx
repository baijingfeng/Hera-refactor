import React, { useEffect } from 'react'

import { toFixedWithoutTrailingZero as fixed } from '../../tools'

const getSum = ({ total, price }) => {
	const sum = total * price
	return isNaN(sum) ? false : sum
}

export const AmountText = ({ handleFieldChange, rowValue }) => {
	const amount = fixed(getSum(rowValue))
	const {key} = rowValue
	console.log('amount', key, amount)
	
	useEffect(() => {
		console.log("AmountText")
		handleFieldChange(key, 'amount', amount)
	}, [amount, handleFieldChange, key])

	return <span>{amount}</span>
}
