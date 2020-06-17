import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Input, Button, Select, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { history, memoryUtils, storageUtils } from '../../tools'
import { reqLogin } from '../../api'

import './login.less'

const { Item } = Form
const { Option } = Select

export default class Login extends Component {
	onFinish = async ({ username, ...restParams }) => {
		const { access_token } = await reqLogin({ username, ...restParams })

		const userInfo = { username, access_token }

		storageUtils.setUserInfo(userInfo)
		memoryUtils.userInfo = userInfo

		history.replace('/')
		message.success('登录成功!')
	}
	render() {
		const { access_token } = memoryUtils.userInfo

		if (access_token) {
			return <Redirect to="/" />
		}

		return (
			<div className="login">
				<div className="login-content">
					<h1> 用户登录 </h1>
					<Form
						name="login"
						className="login-form"
						initialValues={{
							company: '上海创兴建筑设备租赁有限公司',
						}}
						onFinish={this.onFinish}
					>
						<Item
							name="company"
							rules={[
								{
									required: true,
									message: '请输入公司名称!',
								},
							]}
						>
							<Select style={{ width: '100%' }} allowClear>
								<Option value="上海创兴建筑设备租赁有限公司">上海创兴建筑设备租赁有限公司</Option>
							</Select>
						</Item>
						<Item
							name="username"
							rules={[
								{
									required: true,
									message: '请输入您的用户名!',
								},
							]}
						>
							<Input
								prefix={<UserOutlined className="site-form-item-icon" />}
								placeholder="用户名"
								allowClear
							/>
						</Item>
						<Item
							name="password"
							rules={[
								{
									required: true,
									message: '请输入您的密码!',
								},
							]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="密码"
								allowClear
							/>
						</Item>

						<Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								登录
							</Button>
						</Item>
					</Form>
				</div>
			</div>
		)
	}
}
