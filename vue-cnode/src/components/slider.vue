<template>
  <div id="slider" :class="{show:showMenu}" class="nav-list">
    <user-info></user-info>
    <section class="slider-ul">
      <router-link :to="{name:'list',query:{tab:'all'}}" class="icon-quanbu iconfont item">全部</router-link>
      <router-link :to="{name:'list',query:{tab:'good'}}" class="icon-hao iconfont item">精华</router-link>
      <router-link :to="{name:'list',query:{tab:'share'}}" class="icon-fenxiang iconfont item">分享</router-link>
      <router-link :to="{name:'list',query:{tab:'ask'}}" class="icon-wenda iconfont item">问答</router-link>
      <router-link :to="{name:'list',query:{tab:'job'}}" class="icon-zhaopin iconfont item">招聘</router-link>
    </section>
  </div>
</template>
<script>
  import userInfo from './userInfo'
  export default{
    name: 'slider',
    props: {
      showMenu: {
        type: Boolean,
        default: false
      }
    },
    components: {
      userInfo
    }
  }
</script>
<style lang="scss" scoped>
  $height: 50px;
  .nav-list{
    position: fixed;
    left: -200px;
    top: 0px;
    bottom: 0px;
    width: 200px;
    background-color: #fff;
    height: 100%;
    transition: all .3s ease;
    z-index:7;
    &.show{
      transform: translateX(200px);
    }
    .slider-ul{
      width: 100%;
      margin:10px 15px;
      .item{
        display: block;
        height: $height;
        line-height: $height;
        color: rgba(0,0,0,0.75);
      }
    }
  }
</style>