/**
 * 操作local数据的工具函数模块
 */
import store from 'store'

const TOKEN_NAME = 'X-Hera-Token'

export default {
	setToken(token) {
		store.set(TOKEN_NAME, token)
	},

	getToken() {
		return store.get(TOKEN_NAME)
	},

	removeToken() {
		store.remove(TOKEN_NAME)
	},
}
