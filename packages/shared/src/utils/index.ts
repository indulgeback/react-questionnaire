// 深拷贝
const deepClone = (obj: any, cache = new WeakMap()) => {
  if (typeof obj !== "object") return obj // 普通类型，直接返回
  if (obj === null) return obj
  if (cache.get(obj)) return cache.get(obj) // 防止循环引用，程序进入死循环
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  // 找到所属原型上的constructor，所属原型上的constructor指向当前对象的构造函数
  let cloneObj = new obj.constructor()
  cache.set(obj, cloneObj) // 缓存拷贝的对象，用于处理循环引用的情况
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache) // 递归拷贝
    }
  }
  return cloneObj
}

// 随机打乱数组
const shuffle = (arr: Array<number>) => arr.sort(() => Math.random() - 0.5)

// 睡眠等待
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// 判空
const isEmpty = (value: any) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  )
}

// 判断是否是JSON字符串
const isJSON = (str: string) => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

// 首字母大写
const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default {
  deepClone,
  shuffle,
  wait,
  isEmpty,
  isJSON,
  capitalizeFirstLetter,
}
