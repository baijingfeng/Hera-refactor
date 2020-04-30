import React, { useState } from 'react'
import { Row, Col, Form, Input, Select, DatePicker, Card } from 'antd'
import { getVendors, memoryUtils } from '../../../../utils'
import TradeTableForm from './TradeTableForm'
import { ProjectTypeItem } from '../../../../components'

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
	const [entries, setEntries] = useState([])

	return (
		<Form id={formId} onFinish={onSubmit} {...formItemLayout} >
			<Card title="表头信息" bordered={false}>
				<Row gutter={25}>
					<ProjectTypeItem
						onChange={setProjectType}
						colCof={{
							lg: 6,
							md: 12,
							sm: 24,
						}}
					/>
					<Col
						xl={{ span: 6, offset: 2 }}
						lg={{ span: 8 }}
						md={{ span: 12 }}
						sm={24}
					>
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
					</Col>
					<Col
						xl={{ span: 8, offset: 2 }}
						lg={{ span: 10 }}
						md={{ span: 24 }}
						sm={24}
					>
						<FormItem label={fieldLabels.outDate} name="outDate">
							<DatePicker onChange={() => {}} style={{ width: 300 }} />
						</FormItem>
					</Col>
				</Row>
				<Row gutter={25}>
					<Col lg={6} md={12} sm={24}>
						<FormItem label={fieldLabels.originalOrder} name="originalOrder">
							<Input style={{ width: 300 }} placeholder="请填写原始单号" />
						</FormItem>
					</Col>
					<Col
						xl={{ span: 6, offset: 2 }}
						lg={{ span: 8 }}
						md={{ span: 12 }}
						sm={24}
					>
						<FormItem label={fieldLabels.carNumber} name="carNumber">
							<Input style={{ width: 300 }} placeholder="请填写车号" />
						</FormItem>
					</Col>
					<Col
						xl={{ span: 8, offset: 2 }}
						lg={{ span: 10 }}
						md={{ span: 24 }}
						sm={24}
					>
						<FormItem label={fieldLabels.comments} name="comments">
							<TextArea
								autoSize={{ maxRows: 3 }}
								style={{ width: 300 }}
								placeholder="备注信息"
							/>
						</FormItem>
					</Col>
				</Row>
			</Card>
			<Card title="表单信息" style={{}} bordered={false}>
				<FormItem name="entries">
					<TradeTableForm value={entries} onChange={setEntries}/>
				</FormItem>
			</Card>
		</Form>
	)
}
