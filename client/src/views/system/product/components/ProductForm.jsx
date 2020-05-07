import React, { useCallback } from 'react'
import { Form, Input, Checkbox } from 'antd'

const FormItem = Form.Item

const getFields = formValue =>
	Object.keys(formValue || {}).reduce((fields, key) => {
		return [
			...fields,
			{
				name: [key],
				value: formValue[key],
			},
		]
	}, [])

export const ProductForm = ({ formValue = {}, onChange }) => {
	const onValuesChange = useCallback(
		(changedValues = {}, allValues) => {
			let newFormValue = allValues

			if (changedValues.hasOwnProperty('isScaled')) {
				newFormValue = { ...allValues, isScaled: !allValues.isScaled }
			}

			onChange(newFormValue)
		},
		[onChange]
	)

	return (
		<Form
			labelCol={{ span: 4 }}
			fields={getFields(formValue)}
			onValuesChange={onValuesChange}
		>
			<FormItem label="编号" name="number">
				<Input />
			</FormItem>
			<FormItem label="类型" name="type">
				<Input />
			</FormItem>
			<FormItem label="型号" name="model">
				<Input />
			</FormItem>
			<FormItem label="名称" name="name">
				<Input />
			</FormItem>
			<FormItem label="规格" name="size">
				<Input />
			</FormItem>
			<FormItem label="理论重量" name="weight" labelAlign>
				<Input addonAfter="千克" />
			</FormItem>
			<FormItem label="计量单位" name="countUnit">
				<Input />
			</FormItem>
			<FormItem label="换算单位" name="unit">
				<Input />
			</FormItem>
			<FormItem label="换算比例" name="scale">
				<Input />
			</FormItem>
			<FormItem label="需要换算" name="isScaled">
				<Checkbox checked={(formValue && formValue.isScaled) || false} />
			</FormItem>
		</Form>
	)
}
