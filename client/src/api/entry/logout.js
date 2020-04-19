import ajax from '../ajax'

export function reqLogout() {
	return ajax({
		url: '/api/logout',
		method: 'POST'
	})
}