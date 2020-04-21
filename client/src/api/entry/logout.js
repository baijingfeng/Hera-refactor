import ajax from '../ajax'

export function reqLogout() {
	return ajax({
		url: '/logout',
		method: 'POST'
	})
}