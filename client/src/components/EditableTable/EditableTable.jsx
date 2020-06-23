import React, { useContext, useRef, useState, useEffect } from 'react'
import { Table, Button, Form, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { useTableDatas, useArticles } from '../../tools'
import { ReportFooter } from './components/ReportFooter'

const styleObject = {
	marginTop: 16,
	marginBottom: 8,
	width: '100%',
	borderStyle: 'dashed',
}

const getReport = (fields, nameArticleMap) => {
	let totalObj = {}
	for (let i = 0; i < fields.length; i++) {
		let entry = fields[i]
		let total = entry.total
		total = total ? total : 0

		if (!entry.name) break // name 没填写的时候直接跳出

		if (totalObj[entry.name]) {
			totalObj[entry.name] += Number(total)
		} else {
			totalObj[entry.name] = Number(total)
		}
	}

	let total = []
	for (let i in totalObj) {
		total.push({
			name: i,
			total: totalObj[i],
			unit: nameArticleMap[i].unit,
		})
	}

	return total
}

const EditableContext = React.createContext()

const EditableRow = ({ index, ...props }) => {
	const [form] = Form.useForm()

	return (
		<Form>
			<EditableContext.Provider value={form}>
				<tr {...props} />
			</EditableContext.Provider>
		</Form>
	)
}

const EditableCell = ({
	title,
	editable,
	children,
	dataIndex,
	record,
	handleSave,
	...restProps
}) => {
	const [editing, setEditing] = useState(false)
	const inputRef = useRef()
	const form = useContext(EditableContext)

	useEffect(() => {
		if (editing) {
			inputRef.current.focus()
		}
	}, [editing])

	const toggleEdit = () => {
		setEditing(!editing)
		form.setFieldsValue({
			[dataIndex]: record[dataIndex],
		})
	}

	const save = async e => {
		try {
			const values = await form.validateFields()
			toggleEdit()
			handleSave({ ...record, ...values })
		} catch (error) {
			console.log('Save failed', error)
		}
	}

	let childNode = children

	if (editable) {
		childNode = editing ? (
			<Form.Item
				style={{
					margin: 0,
				}}
				name={dataIndex}
				rules={[
					{
						required: true,
						message: `${title} is required.`,
					},
				]}
			>
				<Input ref={inputRef} onPressEnter={save} onBlur={save} />
			</Form.Item>
		) : (
			<div
				className="editable-cell-value-wrap"
				style={{
					paddingRight: 24,
				}}
				onClick={toggleEdit}
			>
				{children}
			</div>
		)
	}

	return <td {...restProps}>{childNode}</td>
}

export class EditableTable1 extends React.Component {
	constructor(props) {
		super(props)
		this.columns = [
			{
				title: 'name',
				dataIndex: 'name',
				width: '30%',
				editable: true,
			},
			{
				title: 'age',
				dataIndex: 'age',
			},
			{
				title: 'address',
				dataIndex: 'address',
			},
			{
				title: 'operation',
				dataIndex: 'operation',
				render: (text, record) => <a>Delete</a>,
			},
		]
		this.state = {
			dataSource: [
				{
					key: '0',
					name: 'Edward King 0',
					age: '32',
					address: 'London, Park Lane no. 0',
				},
				{
					key: '1',
					name: 'Edward King 1',
					age: '32',
					address: 'London, Park Lane no. 1',
				},
			],
			count: 2,
		}
	}

	handleDelete = key => {
		const dataSource = [...this.state.dataSource]
		this.setState({
			dataSource: dataSource.filter(item => item.key !== key),
		})
	}

	handleAdd = () => {
		const { count, dataSource } = this.state
		const newData = {
			key: count,
			name: `Edward King ${count}`,
			age: 32,
			address: `London, Park Lane no. ${count}`,
		}
		this.setState({
			dataSource: [...dataSource, newData],
			count: count + 1,
		})
	}

	handleSave = row => {
		const newData = [...this.state.dataSource]
		const index = newData.findIndex(item => row.key === item.key)
		const item = newData[index]
		newData.splice(index, 1, { ...item, ...row })
		this.setState({
			dataSource: newData,
		})
	}

	render() {
		const { dataSource } = this.state
		const components = {
			body: {
				row: EditableRow,
				cell: EditableCell,
			},
		}
		const columns = this.columns.map(col => {
			if (!col.editable) {
				return col
			}

			return {
				...col,
				onCell: record => ({
					record,
					editable: col.editable,
					dataIndex: col.dataIndex,
					title: col.title,
					handleSave: this.handleSave,
				}),
			}
		})
		return (
			<div>
				<Button
					onClick={this.handleAdd}
					type="primary"
					style={{
						marginBottom: 16,
					}}
				>
					Add a row
				</Button>
				<Table
					components={components}
					rowClassName={() => 'editable-row'}
					bordered
					dataSource={dataSource}
					columns={columns}
				/>
			</div>
		)
	}
}

export const EditableTable = ({ getColumns, initialRowValue = {} }) => {
	const { nameArticleMap } = useArticles()
	const { datas, addNewRow, handleFieldChange, removeRow } = useTableDatas({
		initialRowValue,
	})

	return (
		<>
			<Table
				columns={getColumns(handleFieldChange, removeRow)}
				dataSource={datas}
				pagination={false}
			/>
			<Button onClick={addNewRow} type="primary" ghost style={styleObject}>
				<PlusOutlined />
				增加
			</Button>
			<ReportFooter reports={getReport(datas, nameArticleMap)} />
		</>
	)
}
