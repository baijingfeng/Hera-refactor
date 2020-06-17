/**
 * 操作local数据的工具函数模块
 */
import store from 'store'

const USER_INFO = 'USER_INFO'
const SYSTEM_INFO = 'SYSTEM_INFO'

export const storageUtils = {
	setUserInfo(userInfo) {
		store.set(USER_INFO, userInfo)
	},

	getUserInfo() {
		return store.get(USER_INFO) || {}
	},

	removeUserInfo() {
		store.remove(USER_INFO)
	},

	setSystemInfo(systemInfo) {
		store.set(SYSTEM_INFO, systemInfo)
	},

	getSystemInfo() {
		return store.get(SYSTEM_INFO) || {}
	},

	removeSystemInfo() {
		store.remove(SYSTEM_INFO)
	},
}
