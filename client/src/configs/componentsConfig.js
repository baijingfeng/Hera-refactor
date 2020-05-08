import moment from 'moment'

export const dateRanges = {
	最近一个月: [moment().startOf('month'), moment().endOf('month')],
	最近两个月: [moment(), moment()],
	今年: [moment(), moment()],
	上一年: [moment(), moment()],
	下一年: [moment(), moment()],
}