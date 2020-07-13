import React from 'react'
import { Button } from 'antd'
import { ReloadOutlined } from '@ant-design/icons'

export const ResetButton = ({ ...restAttr }) => (
	<Button type="dashed" htmlType="reset" {...restAttr}>
		<ReloadOutlined />
		重置
	</Button>
)
