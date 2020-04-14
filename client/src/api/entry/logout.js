import ajax from '../ajax'

export function reqLogout(params) {
	return ajax({
		url: '/logout',
		method: 'POST',
		data: params,
	})
}