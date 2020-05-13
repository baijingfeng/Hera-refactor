import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Form, Select, DatePicker } from 'antd'

import {
	useResetForm,
	getVendors,
	getTypeOptions,
	generateOptions,
} from '../../../../utils'
import { RECORD_TYPES, dateRanges, formStyle } from '../../../../configs'
import { SearchButton, ResetButton } from '../../../../components'

const FormItem = Form.Item
const { RangePicker } = DatePicker

export const StoreFilter = () => {
	const store = useSelector(state => state.system.store)
	const { form, resetForm } = useResetForm()

	const { _id, company, name, pinyin } = store || {}

	const options = [
		{
			value: _id,
			label: company + name,
			pinyin: pinyin,
		},
	]

	const onFinish = () => {
		console.log('object')
	}

	console.log('options', options)
	return (
		<Card
			title={<ResetButton onClick={resetForm} />}
			extra={<SearchButton form="storeForm" />}
		>
			<Form
				id="storeForm"
				form={form}
				style={formStyle}
				hideRequiredMark
				onFinish={onFinish}
			>
				<FormItem name="rangeDate">
					<RangePicker ranges={dateRanges} style={{ width: 300 }} />
				</FormItem>
				<FormItem
					name="type"
					rules={[{ required: true, message: '请选择类型!' }]}
				>
					<Select style={{ width: 200 }} placeholder="类型">
						{getTypeOptions(RECORD_TYPES).map(generateOptions)}
					</Select>
				</FormItem>

				<FormItem
					name="project"
					rules={[{ required: true, message: '请选择仓库!' }]}
				>
					<Select style={{ width: 400 }} placeholder="选择要查询的仓库">
						{options.map(generateOptions)}
					</Select>
				</FormItem>
			</Form>
		</Card>
	)
}
