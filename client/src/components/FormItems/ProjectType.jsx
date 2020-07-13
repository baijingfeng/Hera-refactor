import React from 'react'
import { Form, Select } from 'antd'
import { PURCHASING_CLIENT_TYPES } from '../../configs'

const baseItemCof = {
	label: '类型',
	name: 'projectType',
	rules: [{ required: true, message: '请选择类型!' }],
}

export const ProjectType = ({ wrapperCol, itemCof, onChange }) => (
	<Form.Item {...baseItemCof} wrapperCol={wrapperCol} {...itemCof}>
    <Select 
    // style={{ width: 300 }}
     placeholder="请选择类型" onChange={onChange}>
			{PURCHASING_CLIENT_TYPES.map((item, index) => (
				<Select.Option key={`${index}${item}`} value={item}>
					{item}
				</Select.Option>
			))}
		</Select>
	</Form.Item>
)
