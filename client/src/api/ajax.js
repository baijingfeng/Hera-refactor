import axios from 'axios'
import qs from 'qs'

import { message } from 'antd'

/** 创建一个axios实例对象ajax */
const ajax = axios.create({
	baseURL: process.env.BASE_URL,
	timeout: 5000,
})

/** 添加请求拦截器, 对请求参数进行格式化处理 */
ajax.interceptors.request.use(
	config => {
		const { method, data } = config
		if (method.toLowerCase() === 'post' && typeof data === 'object') {
			config.data = qs.stringify(data)
		}
		return config
	},
	error => {
		Promise.reject(error)
	}
)

/** 添加响应拦截器, 筛选出返回的有效数据, 以及进行统一的错误处理 */
axios.interceptors.response.use(
	response => {
		return response.data
	},
	error => {
		console.error('ResponseError: ' + error)
    message.error(`请求失败, ${error}`)
    
    // 返回一个pending状态的promise, 中断promise链
    return new Promise(() => {})
	}
)

export default ajax
