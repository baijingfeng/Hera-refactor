import React from 'react'
import PropTypes from 'prop-types'
import { Col, Form } from 'antd'

const ColItem = ({ children, colCof, itemCof }) => {
	return (
		<Col {...colCof}>
			<Form.Item {...itemCof}>{children}</Form.Item>
		</Col>
	)
}

ColItem.propTypes = {
	children: PropTypes.element,
	colCof: PropTypes.object,
	itemCof: PropTypes.object,
}

export default ColItem
