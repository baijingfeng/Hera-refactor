import React, { useState } from 'react'
import { Row, Form, Input, Select, DatePicker, Card } from 'antd'

import { getVendors, memoryUtils } from '../../../../tools'
import { EditableTable, EditableTable1 } from '../../../../components'
import {
	PURCHASING_CLIENT_TYPES,
	getTradeColumns,
	tradeColumnsInitialRowValue,
	formStyle,
} from '../../../../configs'

const { Item: FormItem } = Form
const { Option } = Select
const { TextArea } = Input

const { projects } = memoryUtils.systemInfo

export const TradeForm = ({ formId, onSubmit }) => {
	const [projectType, setProjectType] = useState('项目仓库')
	return (
		<Form id={formId} onFinish={onSubmit} layout="vertical" hideRequiredMark>
			<Card title="表头信息" bordered={false}>
				<Row style={formStyle}>
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
						label="项目部"
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
					<FormItem label="日期" name="outDate">
						<DatePicker onChange={() => {}} style={{ width: 300 }} />
					</FormItem>
				</Row>
				<Row style={formStyle}>
					<FormItem label="原始单号" name="originalOrder">
						<Input style={{ width: 300 }} placeholder="请填写原始单号" />
					</FormItem>

					<FormItem label="车号" name="carNumber">
						<Input style={{ width: 300 }} placeholder="请填写车号" />
					</FormItem>
					<FormItem label="备注" name="comments">
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
						getColumns={getTradeColumns}
						initialRowValue={tradeColumnsInitialRowValue}
					/>
					{/* <EditableTable1/> */}
				</FormItem>
			</Card>
		</Form>
	)
}
