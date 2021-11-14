/**
 * 判断数据是否为空
  * @param value
 */
function isEmpty(value: any): boolean {
  const type = Object.prototype.toString.call(value).slice(8, -1);
  switch(type) {
    case "String":
      return value.trim().length === 0;
    case "Number":
      return Number.isNaN(value);
    case "Null":
      return true;
    case "Undefined":
      return true;
    case "Array":
      return value.length === 0;
    case "Object":
      return Object.keys(value).length === 0;
    case "Map":
    case "Set":
      return value.size === 0;
    default:
      return false;
  }
}

 export default isEmpty;