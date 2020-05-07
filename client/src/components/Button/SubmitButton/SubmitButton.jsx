import React from 'react'
import { Button } from 'antd'

export const SubmitButton = ({ type = 'primary', form, ...restAttr }) => (
	<Button htmlType="submit" type={type} form={form} {...restAttr}>
		保存
	</Button>
)
