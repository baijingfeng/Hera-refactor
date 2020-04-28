import ajax from '../ajax'

export function reqSystemInfo() {
	return ajax({
		url: '/load',
		method: 'get',
	})
}