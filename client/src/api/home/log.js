import ajax from '../ajax'

export function reqLogFirstPageData() {
	return ajax({
		url: '/operation/top_k',
		method: 'GET',
	})
}

export function reqLogNextPageData(params) {
	return ajax({
		url: '/operation/next_k',
		method: 'GET',
		params,
	})
}
