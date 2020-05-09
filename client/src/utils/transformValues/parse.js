import moment from 'moment'
export const parseRangeDate = (rangeDate = [moment(), moment()]) => {
	const [startDate, endDate] = rangeDate
	return {
		startDate: startDate.format(),
		endDate: moment(endDate.format()).add(1, 'day'),
	}
}
