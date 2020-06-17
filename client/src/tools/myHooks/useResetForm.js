import { Form } from 'antd'

export const useResetForm = () => {
	const [form] = Form.useForm()
	const resetForm = () => {
		form.resetFields()
	}

	return {
		form,
		resetForm,
	}
}
