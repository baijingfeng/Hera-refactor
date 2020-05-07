export { default as ajax } from './ajax'

/** 登录页面 */
export { reqLogin } from './entry/login'
export { reqLogout } from './entry/logout'
/** 登录页面 */

/** Admin */
export { reqSystemInfo } from './admin/load'
/** Admin */

/** 首页 */
export { reqRecordsData, reqAllTypeRecordsData } from './home/records'
export { reqLogFirstPageData, reqLogNextPageData } from './home/log'
/** 首页 */

/** 系统信息 */
export { saveSettings } from './system/settings'
export {
	reqSystemProduct,
	createSystemProduct,
	editSystemProduct,
	deleteSystemProduct,
} from './system/product'
export { reqSystemPrice, deleteSystemPrice } from './system/price'
export { reqSystemWeight, deleteSystemWeight } from './system/weight'
/** 系统信息 */
