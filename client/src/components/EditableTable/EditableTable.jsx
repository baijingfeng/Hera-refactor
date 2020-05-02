import React from 'react'
import { Table, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { useTableDatas } from '../../utils'

const styleObject = {
	marginTop: 16,
	marginBottom: 8,
	width: '100%',
	borderStyle: 'dashed',
}

export const EditableTable = ({ columns = [], initialRowValue = {} }) => {
	const { datas, addNewRow } = useTableDatas({ initialRowValue })
	return (
		<>
			<Table columns={columns} dataSource={datas} pagination={false} />
			<Button onClick={addNewRow} type="primary" ghost style={styleObject}>
				<PlusOutlined />
				增加
			</Button>
		</>
	)
}
