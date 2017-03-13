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
