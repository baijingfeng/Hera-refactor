import { storageUtils } from './storageUtils'

export const memoryUtils = {
	userInfo: storageUtils.getUserInfo(),
	systemInfo: storageUtils.getSystemInfo(),
}
