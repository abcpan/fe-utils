/**
 * 判断是否是颜色十六进制
 * @param value 
 * @returns 
 */
const isColor = function (value: string): boolean {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
}

export default isColor;