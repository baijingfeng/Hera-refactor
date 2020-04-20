import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

import Routers from './routes/Routers'

// 初始化 moment 时间属性
moment.locale('zh-cn')

ReactDOM.render(
	<ConfigProvider locale={zh_CN}>
		<Routers />
	</ConfigProvider>,
	document.getElementById('root')
)
