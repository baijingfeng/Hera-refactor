import { formatCurrency, formatNumber } from './format'

export const renderCurrency = currency => formatCurrency(currency)
export const renderNumber = number => formatNumber(number)
