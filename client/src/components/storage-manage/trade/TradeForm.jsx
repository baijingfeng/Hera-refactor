import React, { PureComponent } from 'react'
import { Row, Col, Form, Input, Select, DatePicker, Table, Card } from 'antd'
import { PURCHASING_CLIENT_TYPES } from '../../../configs'
import TradeTable from './TradeTable'

const { Item } = Form
const { Option } = Select
const { TextArea } = Input

const formItemLayout = {
	layout: 'vertical',
	hideRequiredMark: true,
}

const fieldLabels = {
	projectType: '类型',
}

export class TradeForm extends PureComponent {
	render() {
		return (
			<Form {...formItemLayout} onFinish={() => {}}>
				<Card
					title="表头信息"
					bordered={false}
					// style={{ backgroundColor:'#eef' }}
				>
					<Row gutter={16}>
						<Col lg={6} md={12} sm={24}>
							<Item
								label={fieldLabels.projectType}
								name="projectType"
								rules={[{ required: true, message: '请选择类型!' }]}
							>
								<Select style={{ width: 300 }} placeholder="请选择类型">
									{PURCHASING_CLIENT_TYPES.map((item, index) => (
										<Option key={`${index}${item}`} value={item}>
											{item}
										</Option>
									))}
								</Select>
							</Item>
						</Col>
						<Col
							xl={{ span: 6, offset: 2 }}
							lg={{ span: 8 }}
							md={{ span: 12 }}
							sm={24}
						>
							<Item
								label="项目部"
								name="project"
								rules={[{ required: true, message: '请输入项目部!' }]}
							>
								<Select style={{ width: 300 }} onChange={() => {}}>
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
							<Item label="日期" name="outDate">
								<DatePicker onChange={() => {}} style={{ width: 300 }} />
							</Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col lg={6} md={12} sm={24}>
							<Item label="原始单号" name="originalOrder">
								<Input style={{ width: 300 }} />
							</Item>
						</Col>
						<Col
							xl={{ span: 6, offset: 2 }}
							lg={{ span: 8 }}
							md={{ span: 12 }}
							sm={24}
						>
							<Item label="车号" name="carNumber">
								<Input style={{ width: 300 }} />
							</Item>
						</Col>
						<Col
							xl={{ span: 8, offset: 2 }}
							lg={{ span: 10 }}
							md={{ span: 24 }}
							sm={24}
						>
							<Item label="备注" name="comments">
								<TextArea autoSize={{ maxRows: 6 }} style={{ width: 300 }} />
							</Item>
						</Col>
					</Row>
				</Card>
				<Card title="表单信息" style={{}} bordered={false}>
					<Item name="entries">
						<TradeTable />
					</Item>
				</Card>
			</Form>
		)
	}
}
