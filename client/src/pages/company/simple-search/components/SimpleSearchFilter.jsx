import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Form, Select, DatePicker, Input } from 'antd'

import {
	useResetForm,
	getStockOptions,
	generateOptions,
	getTypeOptions,
} from '../../../../utils'
import { SearchButton, ResetButton } from '../../../../components'
import { RECORD_TYPES, dateRanges, formStyle } from '../../../../configs'

const FormItem = Form.Item
const { RangePicker } = DatePicker

export const SimpleSearchFilter = () => {
	const projects = useSelector(store => store.system.projects)
	const { form, resetForm } = useResetForm()

	const onChange = (dates, dateStrings) => {
		console.log('From: ', dates[0], ', to: ', dates[1])
		console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
	}

	const onFinish = () => {
		console.log('object')
	}

	return (
		<Card
			title={<ResetButton onClick={resetForm} />}
			extra={<SearchButton form="simpleSearchForm" />}
		>
			<Form
				id="simpleSearchForm"
				form={form}
				hideRequiredMark
				onFinish={onFinish}
				style={formStyle}
			>
				<FormItem
					name="project"
					rules={[{ required: true, message: '请选择要计算的项目部!' }]}
				>
					<Select style={{ width: 300 }} placeholder="项目部">
						{getStockOptions(projects).map(generateOptions)}
					</Select>
				</FormItem>
				<FormItem
					name="type"
					rules={[{ required: true, message: '请选择类型!' }]}
				>
					<Select style={{ width: 300 }} placeholder="类型">
						{getTypeOptions(RECORD_TYPES).map(generateOptions)}
					</Select>
				</FormItem>
				<FormItem name="rangeDate">
					<RangePicker style={{ width: 300 }} ranges={dateRanges} onChange={onChange} />
				</FormItem>
				<FormItem name="carNumber">
					<Input style={{ width: 200 }} placeholder="车号" />
				</FormItem>
				<FormItem name="number">
					<Input style={{ width: 200 }} placeholder="单号" />
				</FormItem>
				<FormItem name="originalOrder">
					<Input style={{ width: 200 }} placeholder="原始单号" />
				</FormItem>
			</Form>
		</Card>
	)
}
