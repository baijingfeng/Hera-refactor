import ajax from '../ajax'

export function querySystemInfo() {
	return ajax({
		url: '/load',
		method: 'get',
	})
}