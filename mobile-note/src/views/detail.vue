<template>
  <div>
    <nv-head title="明细" :query="query"></nv-head>
    <div class="page">
      <ul class="list">
        <li is="list-item" v-for="item in items" :item="item" ref="item" @showButton="showButton"></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import nvHead from '../components/nvHead.vue'
  import listItem from '../components/listItem.vue'
  import $ from 'webpack-zepto'
  export default {
    name: 'detail',
    data: function () {
      return {
        items: []
      }
    },
    computed: {
      query () {
        return this.$route.query
      }
    },
    components: {
      nvHead,
      listItem
    },
    methods: {
      getItems (date) {
        $.ajax({
          url: '/api/list/findByDate',
          type: 'get',
          data: {
            date: date
          },
          success: (data) => {
            if (data.code === 200) {
              console.log(data.items)
              this.items = data.items
            }
          },
          error: (err) => {
            console.error(err)
          }
        })
      },
      showButton () {
        debugger
        this.$refs.item.forEach(function (ele) {
          ele.show = false
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