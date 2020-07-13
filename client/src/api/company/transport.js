import ajax from '../ajax'

export function queryAllPayerData(params) {
	return ajax({
		url: '/record/all_payer',
		method: 'GET',
		params,
	})
}

export function updateTransportPaidStatus({ id, paid }) {
	return ajax({
		url: `/record/${id}/transport_paid`,
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		data: JSON.stringify({ paid }),
	})
}

export function updateTransportCheckedStatus({ id, checked }) {
	return ajax({
		url: `/record/${id}/transport_checked`,
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		data: JSON.stringify({ checked }),
	})
}
