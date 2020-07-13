import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Form, Select, DatePicker, Input } from 'antd'

import {
	useResetForm,
	getStockOptions,
	generateOptions,
} from '../../../../tools'
import { dateRanges, formStyle } from '../../../../configs'
import { SearchButton, ResetButton } from '../../../../components'

const FormItem = Form.Item

const { RangePicker } = DatePicker

export const TransportFilter = ({ onSubmit }) => {
	const projects = useSelector(store => store.system.projects)
	const { form, resetForm } = useResetForm()

	return (
		<Card
			title={<ResetButton onClick={resetForm} />}
			extra={<SearchButton form="transportForm" />}
		>
			<Form
				id="transportForm"
				form={form}
				hideRequiredMark
				onFinish={onSubmit}
				style={formStyle}
			>
				<FormItem name="project">
					<Select style={{ width: 300 }} placeholder="项目部">
						{getStockOptions(projects).map(generateOptions)}
					</Select>
				</FormItem>
				<FormItem
					name="rangeDate"
					rules={[{ required: true, message: '请选择时间范围!' }]}
				>
					<RangePicker ranges={dateRanges} />
				</FormItem>
				<FormItem name="carNumber">
					<Input placeholder="车号" />
				</FormItem>
				<FormItem name="number">
					<Input placeholder="单号" />
				</FormItem>
				<FormItem name="originalOrder">
					<Input placeholder="原始单号" />
				</FormItem>
			</Form>
		</Card>
	)
}
