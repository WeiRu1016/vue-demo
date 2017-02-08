<template>
  <div>
    <nv-head title="首页" :query="{}"></nv-head>
    <div class="page">
      <nv-timeline :dataList="groupList"></nv-timeline>
    </div>
    <loading v-if="loading"></loading>
  </div>
</template>
<script>
  import nvHead from '../components/nvHead.vue'
  import nvTimeline from '../components/nvTimeline.vue'
  import loading from '../components/loading.vue'
  import { mapState } from 'vuex'

  export default{
    name: 'list',
    data () {
      return {
        loading: true,
        searchKey: {
          page: 0,
          limit: 20
        }
      }
    },
    computed: {
      ...mapState({
        groupList: 'list'
      })
    },
    components: {
      nvHead,
      nvTimeline,
      loading
    },
    methods: {
      getIndex () {
        debugger
        this.$store.dispatch('getIndex', this.searchKey).then(data => {
          debugger
          this.loading = false
          console.log('lalla', data)
        })
      }
    },
    mounted () {
      this.getIndex()
    }
  }
</script>