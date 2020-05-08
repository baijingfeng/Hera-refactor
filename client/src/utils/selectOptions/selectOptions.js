import { VENDOR_TYPE_SET } from '../../configs'

/**
 * 筛选供应商列表
 * @param projects
 * @returns {*}
 */
export const getVendors = (projects = []) =>
	projects.toArray().filter(project => VENDOR_TYPE_SET.has(project.type))

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
