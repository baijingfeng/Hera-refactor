import React, { useState } from 'react'
import { Row, Form, Input, Select, DatePicker, Card } from 'antd'

import { getVendors, memoryUtils } from '../../../../utils'
import { ProjectType, EditableTable } from '../../../../components'
import { tradeColumns, tradeColumnsInitialRowValue } from '../../../../configs'

const FormItem = Form.Item
const { Option } = Select
const { TextArea } = Input

const formItemLayout = {
	layout: 'vertical',
	hideRequiredMark: true,
}

const fieldLabels = {
	projectType: '类型',
	project: '项目部',
	outDate: '日期',
	originalOrder: '原始单号',
	carNumber: '车号',
	comments: '备注',
}

const { projects } = memoryUtils.systemInfo

// const projectTypeWrapperCol = {
// 	lg: 6,
// 	md: 12,
// 	sm: 24,
// }

export const TradeForm = ({ formId, onSubmit }) => {
	const [projectType, setProjectType] = useState('项目仓库')
	return (
		<Form id={formId} onFinish={onSubmit} {...formItemLayout}>
			<Card title="表头信息" bordered={false}>
				<Row>
					<ProjectType
						// wrapperCol={{
						// 	lg: 8,
						// 	md: 12,
						// 	sm: 24,
						// }}
						style={{ display: 'flex' }}
						onChange={setProjectType}
					/>

					<FormItem
						label={fieldLabels.project}
						name="project"
						rules={[{ required: true, message: '请选择项目部!' }]}
						// wrapperCol={{
						// 	xl: { span: 6, offset: 2 },
						// 	lg: { span: 8 },
						// 	md: { span: 12 },
						// 	sm: 24,
						// }}
					>
						<Select
							// style={{ width: 300 }}
							placeholder="请选择项目部"
						>
							{getVendors(projects)
								.filter(project => project.type === projectType)
								.map(project => (
									<Option key={project._id} value={project._id}>
										{project.company + project.name}
									</Option>
								))}
						</Select>
					</FormItem>

					<FormItem
						label={fieldLabels.outDate}
						name="outDate"
						// wrapperCol={{
						// 	xl: { span: 6, offset: 2 },
						// 	lg: { span: 8 },
						// 	md: { span: 12 },
						// 	sm: 24,
						// }}
					>
						<DatePicker
							onChange={() => {}}
							// style={{ width: 300 }}
						/>
					</FormItem>
				</Row>
				<Row>
					<FormItem
						label={fieldLabels.originalOrder}
						name="originalOrder"
						// wrapperCol={{
						// 	lg: 6,
						// 	md: 12,
						// 	sm: 24,
						// }}
					>
						<Input
							// style={{ width: 300 }}
							placeholder="请填写原始单号"
						/>
					</FormItem>

					<FormItem
						label={fieldLabels.carNumber}
						name="carNumber"
						// wrapperCol={{
						// 	xl: { span: 6, offset: 2 },
						// 	lg: { span: 8 },
						// 	md: { span: 12 },
						// 	sm: 24,
						// }}
					>
						<Input
							// style={{ width: 300 }}
							placeholder="请填写车号"
						/>
					</FormItem>

					<FormItem
						label={fieldLabels.comments}
						name="comments"
						// wrapperCol={{
						// 	xl: { span: 8, offset: 2 },
						// 	lg: { span: 10 },
						// 	md: { span: 24 },
						// 	sm: 24,
						// }}
					>
						<TextArea
							autoSize={{ maxRows: 3 }}
							// style={{ width: 200 }}
							placeholder="备注信息"
						/>
					</FormItem>
				</Row>
			</Card>
			<Card title="表单信息" style={{}} bordered={false}>
				<FormItem name="entries">
					<EditableTable
						columns={tradeColumns}
						initialRowValue={tradeColumnsInitialRowValue}
					/>
				</FormItem>
			</Card>
		</Form>
	)
}
