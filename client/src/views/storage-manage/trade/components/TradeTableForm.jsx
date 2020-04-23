import React, { useRef } from 'react'

import { TableForm } from '../../../../components'
import { tradeColumns, tradeColumnsInitialValue } from '../../../../configs'

const TradeTableForm = () => {
	const tableForm = useRef()
	const columns = tradeColumns(tableForm)
	const initialValue = tradeColumnsInitialValue
	return <TableForm ref={tableForm} columns={columns} initialValue={initialValue}/>
}

export default TradeTableForm
