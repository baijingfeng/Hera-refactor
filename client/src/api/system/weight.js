import ajax from '../ajax'

export function querySystemWeight(params) {
	return ajax({
		url: '/plan/weight',
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

export function deleteSystemWeight(id) {
	return ajax({
		url: `/plan/weight/${ id }/delete`,
		method: 'POST',
	})
}