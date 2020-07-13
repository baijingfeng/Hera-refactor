import ajax from '../ajax'

export function querySystemProduct(params) {
	return ajax({
		url: '/product',
		method: 'GET',
		params,
	})
}

export function createSystemProduct(product) {
	return ajax({
		url: '/product',
		method: 'POST',
		data: product,
	})
}

export function editSystemProduct(product) {
	return ajax({
		url: `/product/${product.number}`,
		method: 'POST',
		data: product,
	})
}

export function deleteSystemProduct(number) {
	return ajax({
		url: `/product/${number}/delete`,
		method: 'POST',
	})
}
