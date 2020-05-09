export { default as ajax } from './ajax'

/** 登录页面 */
export { reqLogin } from './entry/login'
export { reqLogout } from './entry/logout'
/** 登录页面 */

/** Admin */
export { querySystemInfo } from './admin/load'
/** Admin */

/** 首页 */
export { queryRecordsData, queryAllTypeRecordsData } from './home/records'
export { queryLogFirstPageData, queryLogNextPageData } from './home/log'
/** 首页 */

/** 系统信息 */
export { saveSettings } from './system/settings'
export {
	querySystemProduct,
	createSystemProduct,
	editSystemProduct,
	deleteSystemProduct,
} from './system/product'
export { querySystemPrice, deleteSystemPrice } from './system/price'
export { querySystemWeight, deleteSystemWeight } from './system/weight'
/** 系统信息 */
