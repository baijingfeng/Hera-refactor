import React from 'react'
import { Input } from 'antd'

export const ProductFilter = ({ getFilterValue }) => {
	return (
		<Input
			placeholder="过滤出指定名称产品"
			onChange={getFilterValue}
			allowClear
		/>
	)
}
