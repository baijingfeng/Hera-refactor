import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Form, Select, DatePicker } from 'antd'

import { queryPricePlan } from '../../../../api'
import { convertMapToArray, useResetForm } from '../../../../utils'
import { PRICE_PLAN } from '../../../../redux/action-types'
import { saveResults } from '../../../../redux/actions'
import { dateRanges } from '../../../../configs'
import { SearchButton, ResetButton } from '../../../../components'

const FormItem = Form.Item
const { Option } = Select
const { RangePicker } = DatePicker

const formStyle = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
}

const getPlanOptions = (plans = []) =>
	plans.map(plan => ({
		value: plan._id,
		label: plan.name,
		pinyin: '',
	}))

const getStockOptions = (projects = []) =>
	projects
		.filter(project => project.type !== '基地仓库')
		.map(project => ({
			value: project._id,
			label: project.company + project.name,
			pinyin: project.pinyin,
		}))

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
						{getStockOptions(convertMapToArray(projects)).map(
							({ value, label }) => {
								return (
									<Option key={value} value={value}>
										{label}
									</Option>
								)
							}
						)}
					</Select>
				</FormItem>
				<FormItem name="rangeDate">
					<RangePicker ranges={dateRanges} />
				</FormItem>
				<FormItem
					name="planId"
					rules={[{ required: true, message: '请选择要使用的合同方案!' }]}
				>
					<Select style={{ width: 300 }} placeholder="合同方案">
						{getPlanOptions(plans).map(({ value, label }) => {
							return (
								<Option key={value} value={value}>
									{label}
								</Option>
							)
						})}
					</Select>
				</FormItem>
			</Form>
		</Card>
	)
}
