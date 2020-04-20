import React, { Component } from 'react'
import {
	Icon,
	Pagination,
	Spin,
	Tooltip,
	Modal,
	Form,
	Checkbox,
	Button,
	Col,
	Row,
} from 'antd'

export default class ModelTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
		}
	}

	render() {
		const { loading } = this.state
		return <Spin loading={loading}></Spin>
	}
}
