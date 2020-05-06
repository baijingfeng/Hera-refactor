import React, { useState } from 'react'
import { Form, Input } from 'antd'

import { EditableTagGroup } from '../../../components'

const FormItem = Form.Item

export const SettingsForm = ({ formId, formValue, onSubmit, onChange }) => {
	const { systemName, externalNames, printSideComment } = formValue
	const [tags, setTags] = useState(formValue['externalNames'])
	// console.log({ systemName, externalNames, printSideComment })
	return (
		<Form
			id={formId}
			onFinish={onSubmit}
			// initialValues={formValue}
			labelAlign="right"
		>
			<FormItem label="系统应用名称" name="systemName">
				<Input style={{ width: 300 }} value={systemName} onChange={onChange} />
			</FormItem>
			<FormItem label="对外公司名称" name="externalNames">
				<EditableTagGroup tags={externalNames} onChange={onChange} />
			</FormItem>
			<FormItem label="打印侧边说明" name="printSideComment">
				<Input
					style={{ width: 500 }}
					value={printSideComment}
					onChange={onChange}
				/>
			</FormItem>
		</Form>
	)
}
