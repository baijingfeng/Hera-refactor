import React, { useState, useEffect } from 'react'
import { Form, Input } from 'antd'

import { EditableTagGroup } from '../../../../components'

const FormItem = Form.Item

export const SettingsForm = ({ formId, formValue, onSubmit, onChange }) => {
	const { systemName, externalNames, printSideComment } = formValue
	const [tags, setTags] = useState(externalNames)
	const [name, setName] = useState(systemName)
	const [comment, setComment] = useState(printSideComment)

	useEffect(() => {
		setName(systemName)
		setTags(externalNames)
		setComment(printSideComment)
		console.log({ systemName, externalNames, printSideComment })
	}, [externalNames, printSideComment, systemName])

	return (
		<Form
			id={formId}
			onFinish={onSubmit}
			initialValues={formValue}
		>
			<FormItem label="系统应用名称" name="systemName">
				<Input style={{ width: 300 }} value={name} />
			</FormItem>
			<FormItem label="对外公司名称" name="externalNames">
				<EditableTagGroup tags={tags} onChange={setTags} />
			</FormItem>
			<FormItem label="打印侧边说明" name="printSideComment">
				<Input style={{ width: 500 }} value={comment} />
			</FormItem>
		</Form>
	)
}
