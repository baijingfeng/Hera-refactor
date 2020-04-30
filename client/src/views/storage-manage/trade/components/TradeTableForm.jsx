import React, { useRef } from 'react'

import { TableForm } from '../../../../components'
import { tradeColumns, tradeColumnsInitialRowValue } from '../../../../configs'

const TradeTableForm = ({ value, onChange }) => {
	const tableForm = useRef(null)
	const columns = tradeColumns.map(itemFunc => itemFunc(tableForm))
	const initialRowValue = tradeColumnsInitialRowValue
	return (
		<TableForm
			ref={tableForm}
			columns={columns}
			value={value}
			initialRowValue={initialRowValue}
			onChange={onChange}
		/>
	)
}

export default TradeTableForm
