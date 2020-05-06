export const APP_NAME = 'AFX'

/**
 * 采购支持客户类型
 */
export const PURCHASING_CLIENT_TYPES = [
	'项目仓库',
	'租赁客户',
	'同行客户',
	'基地仓库',
	'供应商',
]

/**
 * 支持的供应商类型
 */
export const VENDOR_TYPE_SET = new Set([
	'基地仓库',
	'同行客户',
	'项目仓库',
	'租赁客户',
	'供应商',
])

/**
 * 系统信息-基础配置表单初始值
 */
export const initialValuesOfSettingsForm = {
	systemName: '创兴管理系统',
	externalNames: [
		'上海创兴建筑设备租赁有限公司',
		'上海标济建材有限公司',
		'上海领隆建筑设备租赁中心',
	],
	printSideComment: '①白单存根联②红单客户联③黄单客户联',
}
