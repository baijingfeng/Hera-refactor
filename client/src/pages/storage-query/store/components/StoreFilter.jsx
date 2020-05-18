import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Form, Select, DatePicker } from 'antd'

import {
	useResetForm,
	getVendors,
	getTypeOptions,
	generateOptions,
} from '../../../../utils'
import { RECORD_TYPES, dateRanges, formStyle } from '../../../../configs'
import { SearchButton, ResetButton } from '../../../../components'

const FormItem = Form.Item
const { RangePicker } = DatePicker

export const StoreFilter = ({ onSubmit }) => {
	const store = useSelector(state => state.system.store)
	const { form, resetForm } = useResetForm()

	// TODO: 之后根据具体的业务逻辑处理仓库选择的问题, 这里暂且写死
	const { _id, company, name, pinyin } = store || {
		_id: '586df7fe2d256304867ab346',
		company: '上海创兴建筑设备租赁有限公司',
		name: '松江基地仓库',
		pinyin:
			'shanghaichuangxingjianzhushebeizulinyouxiangongsisongjiangjididecangku',
	}

	const options = [
		{
			value: _id,
			label: company + name,
			pinyin: pinyin,
		},
	]

	return (
		<Card
			title={<ResetButton onClick={resetForm} />}
			extra={<SearchButton form="storeForm" />}
		>
			<Form
				id="storeForm"
				form={form}
				style={formStyle}
				hideRequiredMark
				onFinish={onSubmit}
			>
				<FormItem name="rangeDate">
					<RangePicker ranges={dateRanges} style={{ width: 300 }} />
				</FormItem>
				<FormItem name="type">
					<Select style={{ width: 200 }} placeholder="类型">
						{getTypeOptions(RECORD_TYPES).map(generateOptions)}
					</Select>
				</FormItem>

				<FormItem
					name="project"
					rules={[{ required: true, message: '请选择仓库!' }]}
				>
					<Select style={{ width: 400 }} placeholder="选择要查询的仓库">
						{options.map(generateOptions)}
					</Select>
				</FormItem>
			</Form>
		</Card>
	)
}
