import React from 'react'
import { Row, Form, Input, DatePicker, Card } from 'antd'

import { EditableTable } from '../../../../components'
import {
	getTradeColumns,
	tradeColumnsInitialRowValue,
	formStyle,
} from '../../../../configs'

const { Item: FormItem } = Form

const { TextArea } = Input

export const StocktakingForm = ({ formId, onSubmit }) => {
	return (
		<Form id={formId} onFinish={onSubmit} layout="vertical" hideRequiredMark>
			<Card title="表头信息" bordered={false}>
				<Row style={formStyle}>
					<FormItem label="日期" name="outDate">
						<DatePicker onChange={() => {}} style={{ width: 300 }} />
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
				</FormItem>
			</Card>
		</Form>
	)
}
