import moment from 'moment'

export const renderTime = time => moment(time).format('llll')

export const renderDate = date => moment(date).format('YYYY-MM-DD')
