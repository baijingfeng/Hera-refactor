import React from 'react'
import { Table, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const styleObject = {
	marginTop: 16,
	marginBottom: 8,
	width: '100%',
	borderStyle: 'dashed',
}

export const EditableTable = ({ columns = [], tableDatas = [], addNewRow }) => {
	return (
		<>
			<Table columns={columns} dataSource={tableDatas} pagination={false} />
			<Button onClick={addNewRow} type="primary" ghost style={styleObject}>
				<PlusOutlined />
				增加
			</Button>
		</>
	)
}
