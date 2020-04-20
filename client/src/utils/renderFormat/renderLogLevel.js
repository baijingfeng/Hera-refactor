import React from 'react'
import { Tag } from 'antd'

/**
 * @param level 日志内部名称
 * @returns 日志对外名称
 */
export const renderLogLevel = level => {
	switch (level) {
		case 'INFO':
			return <Tag color="processing">{'提示'}</Tag>
		case 'DANGER':
			return <Tag color="error">{'危险'}</Tag>
		default:
			return ''
	}
}
