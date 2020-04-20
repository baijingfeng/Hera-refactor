import ajax from '../ajax'

export function reqLogFirstPageData() {
	return ajax({
		url: '/api/operation/top_k',
		method: 'GET',
	})
}

export function reqLogNextPageData(params) {
	return ajax({
		url: '/api/operation/next_k',
		method: 'GET',
		params,
	})
}
