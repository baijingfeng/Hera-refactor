import { VENDOR_TYPE_SET } from '../../configs'

/**
 * 筛选供应商列表
 * @param projects
 * @returns {*}
 */
export const getVendors = (projects = []) =>
	projects.filter(project => VENDOR_TYPE_SET.has(project.type))
