import React from 'react'
import { Button } from 'antd'
import { SaveOutlined } from '@ant-design/icons'

export const SaveButton = ({ type = 'primary', form, ...restAttr }) => (
	<Button htmlType="submit" type={type} form={form} {...restAttr}>
		<SaveOutlined />
		保存
	</Button>
)
