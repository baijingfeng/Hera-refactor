import ajax from '../ajax'

export function queryLogFirstPageData() {
	return ajax({
		url: '/operation/top_k',
		method: 'GET',
	})
}

export function queryLogNextPageData(params) {
	return ajax({
		url: '/operation/next_k',
		method: 'GET',
		params,
	})
}
