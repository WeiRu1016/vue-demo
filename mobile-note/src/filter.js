import Timeago from 'timeago.js'

export default {
  timeAgo (date) {
    debugger
    let timeago = new Timeago()
    return timeago.format(date)
  }
}
