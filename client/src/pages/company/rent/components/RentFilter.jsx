import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Form, Select, DatePicker } from 'antd'

import { queryPricePlan } from '../../../../api'
import {
	useResetForm,
	getStockOptions,
	generateOptions,
	getPlanOptions,
} from '../../../../utils'
import { PRICE_PLAN } from '../../../../redux/action-types'
import { saveResults } from '../../../../redux/actions'
import { dateRanges, formStyle } from '../../../../configs'
import { SearchButton, ResetButton } from '../../../../components'

const FormItem = Form.Item
const { RangePicker } = DatePicker

export const RentFilter = ({ onSubmit }) => {
	const projects = useSelector(store => store.system.projects)
	const plans = useSelector(store => store.results.get(PRICE_PLAN, []))
	const dispatch = useDispatch()
	const { form, resetForm } = useResetForm()

	useEffect(() => {
		const fetchPricePlan = async () => {
			const { data } = await queryPricePlan()
			dispatch(saveResults({ key: PRICE_PLAN, result: data.plans }))
		}
		fetchPricePlan()
	}, [dispatch])

	return (
		<Card
			title={<ResetButton onClick={resetForm} />}
			extra={<SearchButton form="rentForm" />}
		>
			<Form
				id="rentForm"
				form={form}
				hideRequiredMark
				onFinish={onSubmit}
				style={formStyle}
			>
				<FormItem
					name="project"
					rules={[{ required: true, message: '请选择要计算的项目部!' }]}
				>
					<Select style={{ width: 300 }} placeholder="项目部">
						{getStockOptions(
							projects,
							project => project.type !== '基地仓库'
						).map(generateOptions)}
					</Select>
				</FormItem>
				<FormItem name="rangeDate">
					<RangePicker style={{ width: 300 }} ranges={dateRanges} />
				</FormItem>
				<FormItem
					name="planId"
					rules={[{ required: true, message: '请选择要使用的合同方案!' }]}
				>
					<Select style={{ width: 300 }} placeholder="合同方案">
						{getPlanOptions(plans).map(generateOptions)}
					</Select>
				</FormItem>
			</Form>
		</Card>
	)
}
