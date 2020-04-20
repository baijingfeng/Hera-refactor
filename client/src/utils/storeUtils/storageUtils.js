/**
 * 操作local数据的工具函数模块
 */
import store from 'store'

const USER_INFO = 'USER_INFO'

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
}
