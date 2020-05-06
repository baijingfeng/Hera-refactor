import React, { useState, useCallback } from 'react'
import { Card, message } from 'antd'

import { SubmitButton } from '../../../components'
import { SettingsForm } from './SettingsForm'
import { saveSettings } from '../../../api/system/settings'
import { useSelector, useDispatch } from 'react-redux'
import { systemSettingsUpdated } from '../../../redux/actions'

export const Settings = () => {
	const config = useSelector(store => store.system.config)
	const [formValue, setFormValue] = useState(config)
	const dispatch = useDispatch()

	console.log('config', config)

	const onSubmit = useCallback(
		async settings => {
			console.log(settings)
			const { data } = await saveSettings(settings)
			if (data) {
				dispatch(systemSettingsUpdated(data))
				setFormValue(data)
				message.success('保存系统基础配置成功!')
			} else {
				message.error('保存系统基础配置失败!')
			}
		},
		[dispatch]
	)

	return (
		<Card
			title="系统基础配置项"
			style={{ width: '100%' }}
			extra={<SubmitButton form="settingsForm" />}
		>
			<SettingsForm
				formId="settingsForm"
				formValue={formValue}
				onSubmit={onSubmit}
			/>
		</Card>
	)
}
