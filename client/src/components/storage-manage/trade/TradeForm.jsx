import React, { PureComponent } from 'react'
import TradeHeaderForm from './TradeHeaderForm'
import TradeFormList from './TradeFormList'

export class TradeForm extends PureComponent {
	render() {
		return (
			<div>
				<TradeHeaderForm />
				<TradeFormList />
			</div>
		)
	}
}
