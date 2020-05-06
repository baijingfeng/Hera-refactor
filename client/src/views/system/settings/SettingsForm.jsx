import React, { useState } from 'react'
import { Form, Input } from 'antd'

import { EditableTagGroup } from '../../../components'

const FormItem = Form.Item

export const SettingsForm = ({ formId, formValue, onSubmit }) => {
	const [tags, setTags] = useState(formValue['externalNames'])
	return (
		<Form
			id={formId}
			onFinish={onSubmit}
			initialValues={formValue}
			labelAlign="right"
		>
			<FormItem label="系统应用名称" name="systemName">
				<Input style={{ width: 300 }} />
			</FormItem>
			<FormItem label="对外公司名称" name="externalNames">
				<EditableTagGroup tags={tags} onChange={setTags} />
			</FormItem>
			<FormItem label="打印侧边说明" name="printSideComment">
				<Input style={{ width: 500 }} />
			</FormItem>
		</Form>
	)
}
