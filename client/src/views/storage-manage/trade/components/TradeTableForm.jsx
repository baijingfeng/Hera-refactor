import React, { useRef } from 'react'

import { TableForm } from '../../../../components'
import { tradeColumns } from '../../../../configs'

const TradeTableForm = () => {
	const tableForm = useRef()
	const columns = tradeColumns(tableForm)

	return <TableForm ref={tableForm} columns={columns} />
}

export default TradeTableForm
