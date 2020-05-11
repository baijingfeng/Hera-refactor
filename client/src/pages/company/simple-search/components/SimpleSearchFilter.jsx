import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Form, Select, DatePicker, Input } from 'antd'
import moment from 'moment'

import { getVendors, useResetForm } from '../../../../utils'
import { SearchButton, ResetButton } from '../../../../components'

const FormItem = Form.Item
const { Option } = Select
const { RangePicker } = DatePicker

const formStyle = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
}

const ranges = {
	最近一个月: [moment().startOf('month'), moment().endOf('month')],
	最近两个月: [moment(), moment()],
	今年: [moment(), moment()],
	上一年: [moment(), moment()],
	下一年: [moment(), moment()],
}

const getPlanOptions = plans =>
	plans.map(plan => ({
		value: plan._id,
		label: plan.name,
		pinyin: '',
	}))

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

	const projectOptions = getVendors(projects).map(project => (
		<Option key={project._id} value={project._id}>
			{project.company + project.name}
		</Option>
	))

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
						{projectOptions}
					</Select>
				</FormItem>
				<FormItem
					name="type"
					rules={[{ required: true, message: '请选择类型!' }]}
				>
					<Select style={{ width: 150 }} placeholder="类型">
						{projectOptions}
					</Select>
				</FormItem>
				<FormItem name="rangeDate">
					<RangePicker ranges={ranges} onChange={onChange} />
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