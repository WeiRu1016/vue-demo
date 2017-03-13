<template>
  <div>
    <nv-head title="首页" :query="{}"></nv-head>
    <div class="page" v-if="!loading">
      <button @click="test">click</button>
      <nv-timeline :dataList="groupList" :test="testBoo"></nv-timeline>
      <div v-show="!scroll" class="loading-image iconfont icon-loading"><span class="loading">&#xe602;</span></div>
    </div>
    <loading v-if="loading"></loading>
  </div>
</template>
<script>
  import nvHead from '../components/nvHead.vue'
  import nvTimeline from '../components/nvTimeline.vue'
  import loading from '../components/loading.vue'
  import { throttle } from '../assets/js/until'
  import { mapState } from 'vuex'

  export default {
    name: 'list',
    data () {
      return {
        loading: true,
        scroll: true,
        searchKey: {
          page: 0,
          limit: 1
        }
      }
    },
    computed: {
      ...mapState({
        groupList: 'list',
        testBoo: 'testBoo'
      })
    },
    components: {
      nvHead,
      nvTimeline,
      loading
    },
    methods: {
      test () {
        this.getScrollData()
        // this.$store.dispatch('setTest')
      },
      getIndex () {
        debugger
        this.$store.dispatch('getIndex', this.searchKey).then(data => {
          this.loading = false
          this.scroll = true
          console.log('groupList', this.groupList)
        })
      },
      getScrollData () {
        let totalHeight = document.body.scrollHeight
        let scrollTop = document.body.scrollTop
        let height = document.body.clientHeight
        if (height + scrollTop + 50 >= totalHeight) {
          if (this.scroll) {
            this.scroll = false
            this.searchKey.page += 1
            this.getIndex()
          }
        }
      }
    },
    mounted () {
      this.getIndex()
      document.addEventListener('scroll', throttle(this.getScrollData, 300, 1000))
    }
  }
</script>
<style lang="scss" scoped>
  .loading{
    animation: loading 1s linear;
    animation-iteration-count: infinite;
    display: inline-block;
    position: relative;
    z-index: 999;
  }
  @keyframes loading{
    0%{
      transform: rotate(0deg)
    }
    20%{
      transform: rotate(72deg)
    }
    40%{
      transform: rotate(144deg)
    }
    60%{
      transform: rotate(216deg)
    }
    80%{
      transform: rotate(288deg)
    }
    100%{
      transform: rotate(360deg)
    }
  }
</style>