import ajax from '../ajax'

export function querySimpleSearchData(params) {
	return ajax({
		url: '/store/simple_search',
		method: 'GET',
		params: {
			condition: JSON.stringify(params),
		},
	})
}
