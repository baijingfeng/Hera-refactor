/**
 * name|size 的形式作为键值对
 * @param name
 * @param size
 * @returns {*}
 */
export function makeKeyFromNameSize(name, size) {
  return `${ name }|${ typeof size === 'undefined' ? '' : size }`
}