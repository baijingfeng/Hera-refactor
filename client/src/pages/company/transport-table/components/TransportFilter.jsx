import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Form, Select, DatePicker, Input } from 'antd'

import {
	useResetForm,
	getStockOptions,
	generateOptions,
	getPayerOptions,
} from '../../../../utils'
import { PAYERS } from '../../../../redux/action-types'
import { saveResults } from '../../../../redux/actions'
import { queryAllPayerData } from '../../../../api'
import { dateRanges, formStyle } from '../../../../configs'
import { SearchButton, ResetButton } from '../../../../components'

const FormItem = Form.Item
const { RangePicker } = DatePicker

export const TransportFilter = ({ onSubmit }) => {
	const projects = useSelector(store => store.system.projects)
	const payers = useSelector(store => store.results.get(PAYERS, []))
	const dispatch = useDispatch()
	const { form, resetForm } = useResetForm()

	useEffect(() => {
		const fetchAllPayers = async () => {
			const { data } = await queryAllPayerData()
			dispatch(saveResults({ key: PAYERS, result: data.payers }))
		}
		fetchAllPayers()
	}, [dispatch])

	return (
		<Card
			title={<ResetButton onClick={resetForm} />}
			extra={<SearchButton form="transportForm" />}
		>
			<Form
				id="transportForm"
				form={form}
				hideRequiredMark
				onFinish={onSubmit}
				style={formStyle}
			>
				<FormItem name="project">
					<Select style={{ width: 300 }} placeholder="项目部">
						{getStockOptions(projects).map(generateOptions)}
					</Select>
				</FormItem>
				<FormItem name="payer">
					<Select style={{ width: 300 }} placeholder="付款方">
						{getPayerOptions(payers).map(generateOptions)}
					</Select>
				</FormItem>
				<FormItem name="payee">
					<Input placeholder="收款人" />
				</FormItem>
				<FormItem name="rangeDate">
					<RangePicker ranges={dateRanges} />
				</FormItem>
				<FormItem name="carNumber">
					<Input placeholder="车号" />
				</FormItem>
				<FormItem name="number">
					<Input placeholder="单号" />
				</FormItem>
				<FormItem name="originalOrder">
					<Input placeholder="原始单号" />
				</FormItem>
			</Form>
		</Card>
	)
}
