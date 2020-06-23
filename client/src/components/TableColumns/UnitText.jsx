import React, { useEffect } from 'react'

import { useArticles } from '../../tools'

// 下面进行数字计算的函数的原则是，如果能算出数字，返回数字，否则返回 false
// 除不尽的情况下不处理
const getUnit = (nameArticleMap, { name }) => {
	const article = nameArticleMap[name]
	return article ? article.unit : false
}

/** 表单列表项-单位 */
export const UnitText = ({ handleFieldChange, rowValue }) => {
	const { nameArticleMap } = useArticles()
	const unit = getUnit(nameArticleMap, rowValue)

	// useEffect(() => {
	// 	// console.log('UnitText')
	// 	handleFieldChange(rowValue.key, 'unit', unit)
	// }, [handleFieldChange, rowValue.key, unit])

	return <span>{unit}</span>
}
