import moment from 'moment'

export const dateRanges = {
	最近一个月: [moment().startOf('day').subtract(1, 'month'), moment().startOf('day')],
	最近两个月: [moment().startOf('day').subtract(2, 'month'), moment().startOf('day')],
	今年: [moment().startOf('year'), moment().endOf('year')],
	上一年: [moment().startOf('year').subtract(1, 'year'), moment().endOf('year').subtract(1, 'year')],
	下一年: [moment().startOf('year').add(1, 'year'), moment().endOf('year').add(1, 'year')],
}