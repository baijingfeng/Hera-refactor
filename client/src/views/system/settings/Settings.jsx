import React, { useState, useCallback } from 'react'
import { Card, message } from 'antd'

import { SubmitButton } from '../../../components'
import { SettingsForm } from './SettingsForm'
import { saveSettings } from '../../../api/system/settings'
import { useSelector, useDispatch } from 'react-redux'
import { systemSettingsUpdated } from '../../../redux/actions'

//TODO: 在本页面刷新,数据无法初始化填充
export const Settings = () => {
	const config = useSelector(store => store.system.config)
	const [formValue, setFormValue] = useState(config)
	const dispatch = useDispatch()

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
				onChange={setFormValue}
			/>
		</Card>
	)
}
