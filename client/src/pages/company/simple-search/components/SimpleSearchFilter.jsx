import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Form, Select, DatePicker, Input } from 'antd'

import {
	useResetForm,
	getStockOptions,
	generateOptions,
	getTypeOptions,
} from '../../../../tools'
import { SearchButton, ResetButton } from '../../../../components'
import { RECORD_TYPES, dateRanges, formStyle } from '../../../../configs'

const FormItem = Form.Item
const { RangePicker } = DatePicker

export const SimpleSearchFilter = ({ onSubmit }) => {
	const [project, setProject] = useState()
	const projects = useSelector(store => store.system.projects)
	const { form, resetForm } = useResetForm()

	const onResetForm = () => {
		resetForm()
		setProject(undefined)
	}

	return (
		<Card
			title={<ResetButton onClick={onResetForm} />}
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
					<Select
						style={{ width: 300 }}
						placeholder="项目部"
						onChange={setProject}
						allowClear
					>
						{getStockOptions(projects).map(generateOptions)}
					</Select>
				</FormItem>
				<FormItem name="type">
					<Select style={{ width: 300 }} placeholder="类型" allowClear>
						{getTypeOptions(RECORD_TYPES).map(generateOptions)}
					</Select>
				</FormItem>
				{project && (
					<FormItem name="inOut">
						<Select style={{ width: 300 }} placeholder="出入库" allowClear>
							{getTypeOptions(['出库', '入库']).map(generateOptions)}
						</Select>
					</FormItem>
				)}
				<FormItem
					name="rangeDate"
					rules={[{ required: true, message: '请选择时间范围!' }]}
				>
					<RangePicker style={{ width: 300 }} ranges={dateRanges} allowClear />
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
