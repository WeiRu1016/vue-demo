import $ from 'webpack-zepto'
import * as untils from '../lib/untils'

const scroll = {
  bind (el, bingding, oldNode) {
    $(window).on('scroll', untils.limiting(() => {
      if ((document.body.scrollTop + window.innerHeight) > el.clientHeight) {
        bingding.value()
      }
    }, 3000, 10000))
  },
  unbind (el, bingding, oldNode) {
    $(window).off('scroll')
  }
}
export default scroll
