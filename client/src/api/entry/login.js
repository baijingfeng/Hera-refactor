import ajax from '../ajax'

// TODO: 此处之后可以用ts进行类型约束
export function reqLogin(params) {
	return ajax({
		url: '/login',
		method: 'post',
		data: params,
	})
}
