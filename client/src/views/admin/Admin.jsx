import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd'

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav/LeftNav'
import Header from '../../components/header/Header'

const { Footer, Sider, Content } = Layout

export default class Admin extends Component {
	render() {
		const token = memoryUtils.token

		if (!token) {
			return <Redirect to="/login" />
		}

		return (
			<div>
				<Layout style={{height: '100vh'}}>
					<Sider>
            <LeftNav/>
          </Sider>
					<Layout>
						<Header/>
						<Content style={{backgroundColor: "white"}}>Content</Content>
						<Footer>Footer</Footer>
					</Layout>
				</Layout>
			</div>
		)
	}
}
