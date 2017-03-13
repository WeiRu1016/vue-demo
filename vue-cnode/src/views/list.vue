<template>
  <div>
    <nv-head :fixed="true" :tabType="tabTypeName" :needAdd="true" ref="head"></nv-head>
    <div class="page" >
      <ul v-if="topics.length" class="list-topic" v-loadMore="getScrollData">
        <li v-for="topic in topics" is="list-item" :topic="topic">
        </li>
      </ul>
      <loading v-if="!scroll"></loading>
      <div v-if="error" @click="getTopics">网络加载错误，点击重试</div>
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
  import {mapGetters} from 'vuex'

  export default{
    name: 'list',
    data: function () {
      return {
        searchKey: {
          page: 1,
          limit: 20,
          tab: 'all'
        },
        scroll: false,
        error: false
      }
    },
    mounted () {
      this.getTopics()
    },
    methods: {
      getScrollData () {
        if (this.scroll) {
          this.scroll = false
          this.searchKey.page += 1
          this.getTopics()
        }
      },
      getTopics () {
        this.$store.dispatch('setTopics', this.searchKey).then(data => {
          this.scroll = true
        }).catch(err => {
          console.log(err)
          this.scroll = false
          this.error = true
        })
      }
    },
    computed: {
      tabTypeName () {
        return untils.getTabName(this.searchKey.tab)
      },
      ...mapGetters({
        topics: 'getTopics'
      })
    },
    watch: {
      $route (to, from) {
        if (to.name === 'list' && to.query.tab) {
          this.searchKey.tab = to.query.tab
          this.searchKey.page = 1
          $(window).scrollTop(0)
        }
        this.scroll = false
        this.$refs.head.show = false
        this.getTopics()
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