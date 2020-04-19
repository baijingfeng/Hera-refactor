import ajax from '../ajax'

// TODO: 此处之后可以用ts进行类型约束 
// TODO: 之后寻找处理统一前缀/api的办法
export function reqLogin(params) {
	return ajax({
		url: '/api/login',
		method: 'post',
		data: params,
	})
}
