import React, { PureComponent } from 'react'
import { Spin, Table } from 'antd'

export class ModelTable extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			pageData: [],
		}
	}

	fetchPage = async (params = this.props.params) => {
		this.setState({ loading: true })
		try {
			const { dataList, totalCount, total } = await this.props.getPage(params)

			this.setState({
				pageData: dataList,
				total: totalCount,
				totalEntity: total,
			})
		} finally {
			this.setState({ loading: false })
		}
	}

	componentDidMount() {
		this.fetchPage()
	}

	render() {
		const { ...tableOptions } = this.props
		const { loading, pageData } = this.state
		return (
			<Spin spinning={loading} delay={100}>
				<Table dataSource={pageData} {...tableOptions} />
			</Spin>
		)
	}
}
