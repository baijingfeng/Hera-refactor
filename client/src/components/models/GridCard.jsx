import React from 'react'
import { Col, Card } from 'antd'

export const GridCard = props => {
	const { span, title, extra, children } = props
	return (
		<Col span={span}>
			<Card title={title} extra={extra}>
				{children}
			</Card>
		</Col>
	)
}
