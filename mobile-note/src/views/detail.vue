<template>
  <div>
    <nv-head title="明细" :query="query"></nv-head>
    <div class="page">
      <ul class="list">
        <li is="list-item" v-for="item in items" :item="item" ref="item" @showButton="showButton"></li>
      </ul>
    </div>
    <loading v-if="loading"></loading>
  </div>
</template>
<script>
  import nvHead from '../components/nvHead.vue'
  import listItem from '../components/listItem.vue'
  import loading from '../components/loading.vue'

  export default {
    name: 'detail',
    data: function () {
      return {
        items: [],
        loading: true
      }
    },
    computed: {
      query () {
        return this.$route.query
      }
    },
    components: {
      nvHead,
      listItem,
      loading
    },
    methods: {
      getItems (date) {
        debugger
        this.$http.get('/api/list/findByDate', {params: {date: date}}).then(response => {
          debugger
          let data = response.body
          if (data.code === 200) {
            console.log(data.list)
            this.items = data.list
            this.loading = false
          }
        }).catch(err => {
          console.error(err)
        })
      },
      showButton (id) {
        debugger
        this.$refs.item.forEach(function (ele) {
          if (ele._id !== id) {
            ele.show = false
          }
        })
      }
    },
    mounted () {
      this.getItems(this.$route.query.date)
    }
  }
</script>
<style scoped lang="scss">
  .page{
    padding: 10px;
    .list{
      width: 100%;
      border-top: 1px dotted #ddd;
      width: 100%;
      overflow-x: hidden;
    }
  }
</style>