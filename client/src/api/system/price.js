import ajax from '../ajax'

export function querySystemPrice(params) {
	return ajax({
		url: '/plan/price',
		method: 'GET',
		params,
	})
}

// export function createSystemProduct(product) {
// 	return ajax({
// 		url: '/product',
// 		method: 'POST',
// 		data: product,
// 	})
// }

// export function editSystemProduct(product) {
// 	return ajax({
// 		url: `/product/${product.number}`,
// 		method: 'POST',
// 		data: product,
// 	})
// }

export function deleteSystemPrice(id) {
	return ajax({
		url: `/plan/price/${ id }/delete`,
		method: 'POST',
	})
}