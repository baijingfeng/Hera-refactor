import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Form, Select, DatePicker, Input } from 'antd'

import {
	getStockOptions,
	generateOptions,
	useResetForm,
	getTypeOptions,
} from '../../../../utils'
import { RECORD_TYPES, dateRanges, formStyle } from '../../../../configs'
import { SearchButton, ResetButton } from '../../../../components'

const FormItem = Form.Item

const { RangePicker } = DatePicker

export const SimpleSearchFilter = ({ onSubmit }) => {
	const projects = useSelector(store => store.system.projects)

	const { form, resetForm } = useResetForm()

	return (
		<Card
			title={<ResetButton onClick={resetForm} />}
			extra={<SearchButton form="simpleSearchForm" />}
		>
			<Form
				id="simpleSearchForm"
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
				<FormItem name="type">
					<Select style={{ width: 150 }} placeholder="类型">
						{getTypeOptions(RECORD_TYPES).map(generateOptions)}
					</Select>
				</FormItem>
				<FormItem name="inOut">
					<Select style={{ width: 150 }} placeholder="出入库">
						{getTypeOptions(['出库', '入库']).map(generateOptions)}
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
