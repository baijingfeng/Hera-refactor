import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Spin, Table, Button } from 'antd'

export class ModelTable extends PureComponent {
	static propTypes = {
		getPage: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			pageData: [],
		}
	}

	componentDidMount() {
		this.fetchPage()
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

	getNextPageData = async currentPageData => {
		this.setState({ loading: true })
		try {
			const { dataList, totalCount, total } = await this.props.getNextPage(
				currentPageData
			)
			this.setState({
				pageData: dataList,
				total: totalCount,
				totalEntity: total,
			})
		} finally {
			this.setState({ loading: false })
		}
	}

	render() {
		const { ...tableOptions } = this.props
		const { loading, pageData } = this.state
		return (
			<Spin spinning={loading} delay={100}>
				<Table
					dataSource={pageData}
					pagination={false}
					footer={currentPageData => (
						<Button
							type="link"
							onClick={() => this.getNextPageData(currentPageData)}
						>
							加载更多
						</Button>
					)}
					{...tableOptions}
				/>
			</Spin>
		)
	}
}
