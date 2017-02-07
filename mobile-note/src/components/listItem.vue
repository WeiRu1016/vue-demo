<template>
  <li @click="showButton" :class="{showButton:show}">
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
        <span @click="removeItem(item._id)" class="iconfont cancel">&#xe7b2;</span>
    </span>
  </li>
</template>
<script>
  import $ from 'webpack-zepto'
  export default {
    name: 'listItem',
    data: function () {
      return {
        show: false
      }
    },
    props: {
      item: Object
    },
    methods: {
      showButton () {
        debugger
        this.$emit('showButton')
        this.show = !this.show
      },
      removeItem (id) {
        $.ajax({
          type: 'post',
          data: {id: id},
          url: '/api/list/remove',
          success: (data) => {
            if (data.code === 200) {
              console.log('删除成功')
              this.$store.dispatch('removeItem', id)
              window.relod()
            }
          },
          error: function (err) {
            console.error(err)
          }
        })
      }
    }
  }
</script>
<style scoped lang="scss">
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
</style>