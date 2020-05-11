import moment from 'moment'

let renderNumber_
let formatCurrency_
let formatNumber_
let formatPercent_

if (window.Intl) {
	renderNumber_ = number => {
		return isNaN(number) ? '' : new Intl.NumberFormat().format(number)
	}
	formatCurrency_ = (number, fractionDigits = 2) => {
		const options = {
			style: 'currency',
			currency: 'CNY',
			minimumFractionDigits: fractionDigits,
			maximumFractionDigits: fractionDigits,
		}
		const formatNumber = new Intl.NumberFormat('zh-CN', options)
		return number ? formatNumber.format(number) : formatNumber.format(0)
	}
	formatPercent_ = (number, fractionDigits = 2) => {
		const options = {
			style: 'percent',
			minimumFractionDigits: fractionDigits,
			maximumFractionDigits: fractionDigits,
		}
		const formatNumber = new Intl.NumberFormat('zh-CN', options)
		return number ? formatNumber.format(number) : formatNumber.format(0)
	}
	formatNumber_ = (number, fractionDigits = 2) => {
		const formatNumber = new Intl.NumberFormat('zh-CN', {
			minimumFractionDigits: fractionDigits,
			maximumFractionDigits: fractionDigits,
		})
		return formatNumber.format(number)
	}
} else {
	renderNumber_ = number => number
	formatCurrency_ = number => {
		return isNaN(number) ? '' : number
	}
	formatNumber_ = number => number
	formatPercent_ = number => number
}

export const renderNumberSimple = renderNumber_
export const formatCurrency = formatCurrency_
export const formatNumber = formatNumber_
export const formatPercent = formatPercent_

export const formatTime = time => moment(time).format('llll')
export const formatDate = date => moment(date).format('YYYY-MM-DD')
