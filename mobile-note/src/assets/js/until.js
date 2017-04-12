export let formatTime = (date) => {
  date = new Date(date)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  return [year, month, day].join('/')
}
export let throttle = (callback, delay, time) => {
  let oldDate = new Date()
  let timeHandler
  return (...values) => {
    debugger
    let now = new Date()
    clearTimeout(timeHandler)
    if (oldDate - now >= time) {
      callback.apply(null, values)
      oldDate = now
    } else {
      timeHandler = setTimeout(() => {
        callback.apply(null, values)
      }, delay)
    }
  }
}
/**
* 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行
* @param idle   {number}    空闲时间，单位毫秒
* @param action {function}  请求关联函数，实际应用需要调用的函数
* @return {function}    返回客户调用函数
*/
export let debounce = (fn, time) => {
  // let start = new Date()
  let handle
  return (...values) => {
    // now = new Date()
    // if (now - start >= time) {
    //   start = now
    //   return fn.apply(null, values)
    // }
    clearTimeout(handle)
    handle = setTimeout(() => {
      fn.apply(null, values)
    }, time)
  }
}
/**
* 频率控制 返回函数连续调用时，action 执行频率限定为 次 / delay
* @param delay  {number}    延迟时间，单位毫秒
* @param action {function}  请求关联函数，实际应用需要调用的函数
* @return {function}    返回客户调用函数
*/
export let throttles = (fn, time, context) => {
  let start = new Date()
  let now
  return (...values) => {
    now = new Date()
    if (now - start > time) {
      start = now
      fn.apply(context, values)
    }
  }
}
