import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

import store from './redux/store'
import Routers from './routes/Routers'
// 初始化 moment 时间属性
import 'moment/locale/zh-cn'
// import moment from 'moment'
// moment.locale()

ReactDOM.render(
	<Provider store={store}>
		<ConfigProvider locale={zh_CN}>
			<Routers />
		</ConfigProvider>
	</Provider>,
	document.getElementById('root')
)
