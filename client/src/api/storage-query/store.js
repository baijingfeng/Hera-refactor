import ajax from '../ajax'

export function queryStoreData(params) {
	const { project } = params
	return ajax({
		url: `/store/${project}`,
		method: 'GET',
		params: {
			condition: JSON.stringify(params),
		},
	})
}
