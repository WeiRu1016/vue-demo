<template>
  <div>
    <nv-head :fixed="true" :tabType="tabTypeName" :needAdd="true" ref="head"></nv-head>
    <div class="page" >
      <ul class="list-topic" v-loadMore="getScrollData">
        <li v-for="topic in topics" is="list-item" :topic="topic">
        </li>
      </ul>
      <loading v-if="!scroll"></loading>
    </div>
    <nv-top></nv-top>
  </div>
</template>
<script>
  import nvHead from '../components/nvHead.vue'
  import listItem from '../components/listItem.vue'
  import loading from '../components/loading.vue'
  import nvTop from '../components/nvTop.vue'
  import * as untils from '../lib/untils'
  import $ from 'webpack-zepto'

  export default{
    name: 'list',
    data: function () {
      return {
        searchKey: {
          page: 1,
          limit: 20,
          tab: 'all',
          mdrender: true
        },
        topics: [],
        scroll: true
      }
    },
    mounted () {
      if (this.$route && this.$route.query.tab) {
        debugger
        this.searchKey.tab = this.$route.query.tab
      }
      // if (window.sessionStorage.tab === this.searchKey.tab) {
      //   this.scroll = true
      //   this.topics = JSON.parse(window.sessionStorage.topics)
      //   this.searchKey = JSON.parse(window.sessionStorage.searchKey)
      //   scrollTop = window.sessionStorage.scrollTop
      // } else {
      this.getTopics()
      // }
    },
    methods: {
      getTopics () {
        let params = $.param(this.searchKey)
        $.get('https://cnodejs.org/api/v1/topics?' + params, d => {
          debugger
          this.scroll = true
          this.topics = d.data
        })
      },
      getScrollData () {
        debugger
        if (this.scroll) {
          this.scroll = false
          this.searchKey.limit += 20
          this.getTopics()
        }
      }
    },
    // beforeRouterEnter (to, from, next) {
    //   // 在渲染改组件的对应路由被confirm前调用
    //   // 不！能！获取组件的实例'this'
    //   // 因为当钩子执行前，组件实例还没创建
    //   if (from.name !== 'topic') {
    //     if (window.sessionStorage.tab) {
    //       window.sessionStorage.removeItem('topics')
    //       window.sessionStorage.removeItem('searchKey')
    //       window.sessionStorage.removeItem('tab')
    //     }
    //   }
    //   $(window).off('scroll')
    //   next()
    // },
    // beforeRouterLeave (to, from, next) {
    //   // 导航离开该组件的对应路由时调用
    //   // 可以访问组件实例'this'
    //   if (to.name === 'topic') {
    //     window.sessionStorage.scrollTop = window.scrollTop
    //     window.sessionStorage.topics = JSON.stringify(this.topics)
    //     window.sessionStorage.searchKey = JSON.stringify(this.searchKey)
    //     window.sessionStorage.tab = JSON.stringify(this.searchKey.tab)
    //   }
    //   next()
    // },
    computed: {
      tabTypeName () {
        debugger
        return untils.getTabName(this.searchKey.tab)
      }
    },
    watch: {
      $route (to, from, next) {
        if (this.$route && this.$route.query.tab) {
          this.searchKey.tab = this.$route.query.tab
          this.searchKey.limit = 20
          $(window).scrollTop(0)
        }
        this.getTopics()
        debugger
        this.$refs.head.show = false
      }
    },
    components: {
      nvHead,
      listItem,
      loading,
      nvTop
    }
  }
</script>
<style lang="scss" scoped>
  .list-topic li{
    border-bottom: 1px solid #ddd;
    padding: 10px 10px;
  };
  .list-topic:last-child{
    border-bottom: none;
  }
</style>