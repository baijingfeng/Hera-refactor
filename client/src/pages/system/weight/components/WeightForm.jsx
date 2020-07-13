import React from 'react'
import { Row, Form, Input, DatePicker, Card } from 'antd'
import moment from 'moment'

import { EditableTable } from '../../../../components'
import {
	getWeightColumns,
	weightColumnsInitialRowValue,
	formStyle,
} from '../../../../configs'

const { Item: FormItem } = Form
const { TextArea } = Input

export const WeightForm = ({ formId, onSubmit }) => {
	return (
		<Form
			id={formId}
			onFinish={onSubmit}
			layout="vertical"
			initialValues={{ date: moment() }}
		>
			<Card title="表头信息" bordered={false}>
				<Row style={formStyle}>
					<FormItem
						label="名称"
						name="name"
						rules={[{ required: true, message: '请输入名称!' }]}
					>
						<Input style={{ width: 300 }} placeholder="请填写名称" />
					</FormItem>

					<FormItem
						label="日期"
						name="date"
						rules={[{ required: true, message: '请输入日期!' }]}
					>
						<DatePicker style={{ width: 300 }} />
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
						getColumns={getWeightColumns}
						initialRowValue={weightColumnsInitialRowValue}
					/>
				</FormItem>
			</Card>
		</Form>
	)
}
