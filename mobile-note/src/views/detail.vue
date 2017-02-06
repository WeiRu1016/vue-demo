<template>
  <div>
    <nv-head title="明细" :query="query"></nv-head>
    <ul class="page list">
      <li v-for="item in items" :class="{showButton:showButton}" @click="showButtonFun">
        <span class="date">{{item.date}}</span>
        <span class="iconfont icon" :class="item.category"></span>
        <span>{{item.typeName}}</span>
        <span :class="{redText:(item.type === 'out'),greenText:(item.type === 'in')}">
          <span v-if="item.type === 'in'">+</span>
          <span v-else="">-</span>
          {{item.money}}
        </span>
        <span class="buttonGroup">
          <router-link :to="{name:'edit',query:{id:item._id}}">
            <span class="iconfont edit">&#xe60a;</span>
          </router-link>
            <span class="iconfont cancel">&#xe7b2;</span>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
  import nvHead from '../components/nvHead.vue'
  import $ from 'webpack-zepto'
  export default {
    name: 'detail',
    data: function () {
      return {
        items: [],
        showButton: false
      }
    },
    computed: {
      query () {
        return this.$route.query
      }
    },
    components: {
      nvHead
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
      showButtonFun () {
        this.showButton = !this.showButton
      }
    },
    mounted () {
      this.getItems(this.$route.query.date)
    }
  }
</script>
<style scoped lang="scss">
  .list{
    padding: 10px;
    li{
      border-bottom: 1px dotted #ddd;
      position:relative;
      -webkit-transition: all .3s ease;
      -moz-transition: all .3s ease;
      transition: all .3s ease;
      .date{
        position: absolute;
        font-size: 12px;
        right: 0;
        top: 1px;
      }
      a{
        color: #000;
      }
      &>span{
        padding-right: 10px;
        padding-left: 5px;
      }
    }
    .showButton{
      transform: translateX(-120px)
    }
    .icon{
      margin: 10px;
      display: inline-block;
      width: 40px;
      height: 40px;
      font-size: 20px;
      line-height: 30px;
      border: 1px solid #000;
    }
    .redText{
      color: orangered
    }
    .greenText{
      color: lightgreen
    }
    .buttonGroup{
      background-color: #e3e3e3;
      width: 120px;
      display: inline-block;
      position: absolute;
      right: -130px;
      top: 0;
      bottom: 0;
      span.iconfont{
        font-size: 30px;
        line-height:60px;
      }
      .edit{
        margin: 10px;
      }
      .cancel{
        margin: 10px;
      }
    }
  }
</style>