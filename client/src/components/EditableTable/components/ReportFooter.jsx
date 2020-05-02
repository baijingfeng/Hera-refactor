import React from 'react'
import { List } from 'antd'

const ListItem = List.Item

export const ReportFooter = ({ reports = [] }) => (
	<List>
		{reports.map(({ name, total, unit }, index) => (
			<ListItem key={index.toString()}>{`${name} ${total} ${unit}`}</ListItem>
		))}
	</List>
)
