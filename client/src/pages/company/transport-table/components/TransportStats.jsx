import React from 'react'
import { Descriptions, Card } from 'antd'

const { Item } = Descriptions

export const TransportStats = () => {
	return (
		<Card style={{ marginTop: '20px' }}>
			<Descriptions title="统计结果" layout="vertical" column={6} bordered>
				<Item label="收款人">合计</Item>
				<Item label="小计">0</Item>
        <Item label="已结清款	">0</Item>
        <Item label="未结清款	">0</Item>
        <Item label="已核对款	">0</Item>
        <Item label="未核对款">0</Item>
			</Descriptions>
		</Card>
	)
}
