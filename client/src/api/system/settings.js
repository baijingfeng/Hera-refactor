import ajax from '../ajax'

export function saveSettings(params) {
	return ajax({
		url: '/system/settings',
		method: 'POST',
		data: params,
	})
}
