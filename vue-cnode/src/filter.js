import Timeago from 'timeago.js'

export const timeAgoFormat = (time) => {
  return new Timeago().format(time, 'zh_CN')
}
