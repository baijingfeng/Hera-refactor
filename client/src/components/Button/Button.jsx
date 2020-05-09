/**
 * 试着将Button整合在一起. 
 * 但经过思考过后, 觉得整合的同时也失去了一部分的可读性.
 * 出于保持可读性的考虑, 一定程度的重复代码是可接受的.
 * 此处整合废弃, 可安全删除该文件.
 */

import React from 'react'
import { Button as AntButton } from 'antd'
import { SaveOutlined, PlusOutlined } from '@ant-design/icons'

const getConfig = icon => ({
	htmlType: icon === 'save' || icon === 'search' ? 'submit' : undefined,
})

const getIconText = icon => {
	switch (icon) {
		case 'save':
			return (
				<>
					<SaveOutlined />
					保存
				</>
			)

		case 'new':
			return (
				<>
					<PlusOutlined /> 新增
				</>
			)
		default:
			return null
	}
}

export const Button = ({ icon, ...restAttr }) => (
	<AntButton type="primary" {...getConfig(icon)} {...restAttr}>
		{getIconText(icon)}
	</AntButton>
)
