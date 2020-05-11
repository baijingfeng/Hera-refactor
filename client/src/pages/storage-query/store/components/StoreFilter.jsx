import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Form, Select, DatePicker, Button, Input } from 'antd'
import { ReloadOutlined, SearchOutlined } from '@ant-design/icons'

import { getVendors } from '../../../../utils'
import { dateRanges } from '../../../../configs'

const FormItem = Form.Item
const { Option } = Select
const { RangePicker } = DatePicker

const formStyle = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
}

const getPlanOptions = plans =>
	plans.map(plan => ({
		value: plan._id,
		label: plan.name,
		pinyin: '',
	}))

export const StoreFilter = () => {
	const projects = useSelector(store => store.system.projects)

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
		<Form hideRequiredMark onFinish={onFinish}>
			<Card
				title={
					<Button type="dashed" htmlType="reset">
						<ReloadOutlined />
						重置
					</Button>
				}
				extra={
					<Button type="primary" htmlType="submit">
						<SearchOutlined />
						查询
					</Button>
				}
			>
				<div style={formStyle}>
					<FormItem name="rangeDate">
						<RangePicker ranges={dateRanges} onChange={onChange} style={{ width: 300 }}/>
					</FormItem>
					<FormItem
						name="type"
						rules={[{ required: true, message: '请选择类型!' }]}
					>
						<Select style={{ width: 200 }} placeholder="类型">
							{projectOptions}
						</Select>
					</FormItem>

					<FormItem
						name="project"
						rules={[{ required: true, message: '请选择仓库!' }]}
					>
						<Select style={{ width: 400 }} placeholder="选择要查询的仓库">
							{projectOptions}
						</Select>
					</FormItem>
				</div>
			</Card>
		</Form>
	)
}
