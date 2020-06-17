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

/** 仓库管理 */
export { queryStoreData } from './storage-query/store'
/** 仓库管理 */

/** 仓库查询 */
export { saveRecordData } from './storage-manage/record'
/** 仓库查询 */

/** 公司 */
export { queryRentData } from './company/rent'
export { querySimpleSearchData } from './company/simple-search'
export { queryRecordData } from './company/record'
export {
	queryAllPayerData,
	updateTransportPaidStatus,
	updateTransportCheckedStatus,
} from './company/transport'
/** 公司 */

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

/** 通用接口 */
export { queryPricePlan } from './common/plan'
/** 通用接口 */
