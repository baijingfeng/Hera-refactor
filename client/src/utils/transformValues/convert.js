/** 将Immitable中的Map类型数据转换为仅含value的数组 */
export const convertMapToArray = maps => maps.toArray().map(([k, v]) => v)
