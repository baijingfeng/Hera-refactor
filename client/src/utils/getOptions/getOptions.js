import { VENDOR_TYPE_SET } from '../../configs'
import { convertMapToArray } from '../transformValues/convert'

/**
 * 筛选供应商列表
 * @param projects
 * @returns {*}
 */
export const getVendors = (projects = []) =>
	projects.filter(project => VENDOR_TYPE_SET.has(project.type))

/**
 * 产品类型从数组转换成 map 形式，方便查找
 * @param articles
 * @returns
 */
export function transformArticle(articles) {
	const typeNameMap = {}
	const nameArticleMap = {}
	const names = {}
	articles.forEach(([index, article]) => {
		if (!typeNameMap[article.type]) {
			typeNameMap[article.type] = []
		}
		if (names[article.name]) {
			names[article.name].sizes.push(article.size)
		} else {
			names[article.name] = article
			typeNameMap[article.type].push(article.name)
			nameArticleMap[article.name] = article
			article.sizes = [article.size]
		}
	})

	return {
		typeNameMap,
		nameArticleMap,
	}
}

/**
 * 获取"项目部"选择项数据
 */
export const getStockOptions = (projects, filter = () => true) =>
	convertMapToArray(projects)
		.filter(filter)
		.map(project => ({
			value: project._id,
			label: project.company + project.name,
			pinyin: project.pinyin,
		}))

/**
 *  获取"合同方案"的选择项数据
 */
export const getPlanOptions = (plans = []) =>
	plans.map(plan => ({
		value: plan._id,
		label: plan.name,
		pinyin: '',
	}))

/**
 * 根据types获取相应的选择项数据
 */
export const getTypeOptions = types => types.map(v => ({ value: v, label: v }))
