import { useSelector } from 'react-redux'

import { transformArticle } from '../index'

export const useArticles = () => {
	const articles = useSelector(state => state.system.articles)

	const { typeNameMap, nameArticleMap } = transformArticle(articles.toArray())

	return {
		typeNameMap,
		nameArticleMap,
	}
}
