import React from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Item = Form.Item

const LoginForm = () => {
	const onFinish = (values) => {
		console.log('Received values of form: ', values)
	}

	return (
		<Form
			name="login"
			className="login-form"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
		>
			<Item
				name="username"
				rules={[
					{
						required: true,
						message: '请输入您的用户名!',
					},
				]}
			>
				<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
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
				<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
			</Item>

			<Item>
				<Button type="primary" htmlType="submit" className="login-form-button">
					登录
				</Button>
			</Item>
		</Form>
	)
}

export default LoginForm
