import Axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

/** 创建一个axios实例对象ajax */
const ajax = Axios.create({
	baseURL: 'http://localhost:6762/api', //process.env.BASE_URL
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
ajax.interceptors.response.use(
	response => {
		return response.data
	},
	error => {
		message.error(`请求失败 ${error}`)
		return Promise.reject(error)
	}
)

export default ajax
