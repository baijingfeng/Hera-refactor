import React from 'react'
import { Row, Col, Form, Input, Select, DatePicker, Card } from 'antd'
import { PURCHASING_CLIENT_TYPES } from '../../../../configs'
import TradeTableForm from './TradeTableForm'
import { ProjectTypeItem } from '../../../../components'

const { Item } = Form
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

export const TradeForm = () => {
	return (
		<Form {...formItemLayout} onFinish={() => {}}>
			<Card title="表头信息" bordered={false}>
				<Row gutter={25}>
					<ProjectTypeItem
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
						<Item
							label={fieldLabels.project}
							name="project"
							rules={[{ required: true, message: '请选择项目部!' }]}
						>
							<Select style={{ width: 300 }} placeholder="请选择项目部">
								{PURCHASING_CLIENT_TYPES.map((item, index) => (
									<Option key={`${index}${item}`} value={item}>
										{item}
									</Option>
								))}
							</Select>
						</Item>
					</Col>
					<Col
						xl={{ span: 8, offset: 2 }}
						lg={{ span: 10 }}
						md={{ span: 24 }}
						sm={24}
					>
						<Item label={fieldLabels.outDate} name="outDate">
							<DatePicker onChange={() => {}} style={{ width: 300 }} />
						</Item>
					</Col>
				</Row>
				<Row gutter={25}>
					<Col lg={6} md={12} sm={24}>
						<Item label={fieldLabels.originalOrder} name="originalOrder">
							<Input style={{ width: 300 }} placeholder="请填写原始单号" />
						</Item>
					</Col>
					<Col
						xl={{ span: 6, offset: 2 }}
						lg={{ span: 8 }}
						md={{ span: 12 }}
						sm={24}
					>
						<Item label={fieldLabels.carNumber} name="carNumber">
							<Input style={{ width: 300 }} placeholder="请填写车号" />
						</Item>
					</Col>
					<Col
						xl={{ span: 8, offset: 2 }}
						lg={{ span: 10 }}
						md={{ span: 24 }}
						sm={24}
					>
						<Item label={fieldLabels.comments} name="comments">
							<TextArea autoSize={{ maxRows: 3 }} style={{ width: 300 }} placeholder="备注信息" />
						</Item>
					</Col>
				</Row>
			</Card>
			<Card title="表单信息" style={{}} bordered={false}>
				<Item name="entries">
					<TradeTableForm />
				</Item>
			</Card>
		</Form>
	)
}
