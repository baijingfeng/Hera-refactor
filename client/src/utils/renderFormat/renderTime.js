import moment from 'moment'

export const renderTime = time => moment(time).format('MMMM Do YYYY, h:mm:ss a')
