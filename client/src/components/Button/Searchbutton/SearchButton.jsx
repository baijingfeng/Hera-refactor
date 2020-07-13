import React from 'react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export const SearchButton = ({ type = 'primary', form, ...restAttr }) => (
	<Button type="primary" htmlType="submit" form={form} {...restAttr}>
		<SearchOutlined />
		查询
	</Button>
)
