import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import Routers from './routes/Routers'
// 初始化 moment 时间属性
// import moment from 'moment'
import 'moment/locale/zh-cn'
// moment.locale()

ReactDOM.render(
	<ConfigProvider locale={zh_CN}>
		<Routers />
	</ConfigProvider>,
	document.getElementById('root')
)
