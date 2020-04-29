import React, { useRef } from 'react'

import { TableForm } from '../../../../components'
import { tradeColumns, tradeColumnsInitialRowValue } from '../../../../configs'

const TradeTableForm = ({ value }) => {
	const tableForm = useRef()
	const columns = tradeColumns.map(itemFunc => itemFunc(tableForm))
	const initialRowValue = tradeColumnsInitialRowValue
	return (
		<TableForm
			ref={tableForm}
			columns={columns}
			value={value}
			initialRowValue={initialRowValue}
		/>
	)
}

export default TradeTableForm
