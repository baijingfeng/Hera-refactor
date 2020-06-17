import React, { useState } from 'react'
import { Row, Form, Input, Select, DatePicker, Card } from 'antd'

import { getVendors, memoryUtils } from '../../../../tools'
import { EditableTable } from '../../../../components'
import {
	PURCHASING_CLIENT_TYPES,
	tradeColumns,
	tradeColumnsInitialRowValue,
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

export const TradeForm = ({ formId, onSubmit }) => {
	const [projectType, setProjectType] = useState('项目仓库')
	return (
		<Form id={formId} onFinish={onSubmit} {...formItemLayout}>
			<Card title="表头信息" bordered={false}>
				<Row
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
					}}
				>
					<FormItem
						label="类型"
						name="projectType"
						rules={[{ required: true, message: '请选择类型!' }]}
					>
						<Select
							style={{ width: 300 }}
							placeholder="请选择类型"
							onChange={setProjectType}
						>
							{PURCHASING_CLIENT_TYPES.map((item, index) => (
								<Select.Option key={`${index}${item}`} value={item}>
									{item}
								</Select.Option>
							))}
						</Select>
					</FormItem>

					<FormItem
						label={fieldLabels.project}
						name="project"
						rules={[{ required: true, message: '请选择项目部!' }]}
					>
						<Select style={{ width: 300 }} placeholder="请选择项目部">
							{getVendors(projects)
								.filter(project => project.type === projectType)
								.map(project => (
									<Option key={project._id} value={project._id}>
										{project.company + project.name}
									</Option>
								))}
						</Select>
					</FormItem>

					<FormItem label={fieldLabels.outDate} name="outDate">
						<DatePicker onChange={() => {}} style={{ width: 300 }} />
					</FormItem>
				</Row>
				<Row
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
					}}
				>
					<FormItem label={fieldLabels.originalOrder} name="originalOrder">
						<Input style={{ width: 300 }} placeholder="请填写原始单号" />
					</FormItem>

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
			<Card title="表单信息" bordered={false}>
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
