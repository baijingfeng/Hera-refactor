import ajax from '../ajax'

export function reqBaseConfig() {
	return ajax({
		url: '/load',
		method: 'get',
	})
}