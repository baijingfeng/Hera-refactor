import React from 'react'
import { Row, Form, Input, Select, DatePicker, Card } from 'antd'

import { getVendors, memoryUtils } from '../../../../tools'
import { EditableTable } from '../../../../components'
import {
	rentColumns,
	rentColumnsInitialRowValue,
	formStyle,
} from '../../../../configs'

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

export const RentForm = ({ formId, onSubmit }) => {
	return (
		<Form id={formId} onFinish={onSubmit} {...formItemLayout}>
			<Card title="表头信息" bordered={false}>
				<Row style={formStyle}>
					<FormItem
						label={fieldLabels.project}
						name="project"
						rules={[{ required: true, message: '请选择项目部!' }]}
					>
						<Select style={{ width: 300 }} placeholder="请选择项目部">
							{getVendors(projects).map(project => (
								<Option key={project._id} value={project._id}>
									{project.company + project.name}
								</Option>
							))}
						</Select>
					</FormItem>

					<FormItem label={fieldLabels.outDate} name="outDate">
						<DatePicker onChange={() => {}} style={{ width: 300 }} />
					</FormItem>
					<FormItem label={fieldLabels.originalOrder} name="originalOrder">
						<Input style={{ width: 300 }} placeholder="请填写原始单号" />
					</FormItem>
				</Row>
				<Row style={formStyle}>
					<FormItem label={fieldLabels.carNumber} name="carNumber">
						<Input style={{ width: 300 }} placeholder="请填写车号" />
					</FormItem>

					<FormItem label={fieldLabels.comments} name="comments">
						<TextArea
							autoSize={{ maxRows: 3 }}
							style={{ width: 300 }}
							placeholder="备注信息"
						/>
					</FormItem>
				</Row>
			</Card>
			<Card title="租赁" style={{}} bordered={false}>
				<FormItem name="entries">
					<EditableTable
						columns={rentColumns}
						initialRowValue={rentColumnsInitialRowValue}
					/>
				</FormItem>
			</Card>
			<Card title="销售" style={{}} bordered={false}>
				<FormItem name="entries">
					<EditableTable
						columns={rentColumns}
						initialRowValue={rentColumnsInitialRowValue}
					/>
				</FormItem>
			</Card>
			<Card title="赔偿" style={{}} bordered={false}>
				<FormItem name="entries">
					<EditableTable
						columns={rentColumns}
						initialRowValue={rentColumnsInitialRowValue}
					/>
				</FormItem>
			</Card>
			<Card title="服务(维修或者运费等不影响库存)" style={{}} bordered={false}>
				<FormItem name="entries">
					<EditableTable
						columns={rentColumns}
						initialRowValue={rentColumnsInitialRowValue}
					/>
				</FormItem>
			</Card>
		</Form>
	)
}
