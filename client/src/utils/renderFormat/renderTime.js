import moment from 'moment'

export const renderTime = time => moment(time).format('llll')
