export const getTabName = (tab) => {
  let str = ''
  switch (tab) {
    case 'share':
      str = '分享'
      break
    case 'good':
      str = '精华'
      break
    case 'ask':
      str = '问答'
      break
    case 'job':
      str = '招聘'
      break
    default:
      str = '全部'
  }
  return str
}
export const getStyle = (tab, top, good) => {
  let type = ''
  let typeName = ''
  if (top) {
    type = 'top'
    typeName = '置顶'
  } else if (good) {
    type = 'good'
    typeName = '精华'
  } else {
    switch (tab) {
      case 'share':
        type = 'share'
        typeName = '分享'
        break
      case 'ask':
        type = 'ask'
        typeName = '问答'
        break
      case 'job':
        type = 'job'
        typeName = '招聘'
        break
      default:
        type = 'default'
        typeName = '暂无'
    }
  }
  return {
    type,
    typeName
  }
}
export const limiting = (fn, delay, time) => {
  let start = new Date()
  return function () {
    let current = new Date()
    let time = null
    clearTimeout(time)
    if (current - start > time) {
      fn()
      start = current
    } else {
      time = setTimeout(fn, delay)
    }
  }
}
