import React from 'react'
import { Select } from 'antd'
const { Option } = Select

/**
 * 生成形如value-label类型的选择项
 */
export const generateOptions = ({ value = '', label }) => (
	<Option key={value} value={value}>
		{label}
	</Option>
)
