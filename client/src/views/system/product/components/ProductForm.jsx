import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item
export const ProductForm = () => {
	return (
		<Form>
			<FormItem label="编号">
				<Input />
			</FormItem>
		</Form>
	)
}
