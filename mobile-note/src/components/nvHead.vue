<template>
  <div>
    <div v-if="show" class="page_over" @click="hideMenu"></div>
    <header class="nvHead" :class="{show:show}">
      <span class="iconfont menu" @click="showMenu">&#xe795;</span>
      <router-link :to="{name: 'add'}">
        <span class="iconfont add">&#xe775;</span>
      </router-link>
      <span class="title" v-text="title"></span>
    </header>
    <nav-bar :class="{show:show}"></nav-bar>
  </div>
</template>
<script>
  import navBar from './navBar.vue'
  export default {
    name: 'nvHead',
    props: {
      title: String,
      required: true
    },
    data: function () {
      return {
        show: false
      }
    },
    methods: {
      showMenu () {
        this.show = !this.show
      },
      hideMenu () {
        this.show = !this.show
      }
    },
    components: {
      navBar
    }
  }
</script>
<style lang="scss" scoped>
    .page_over{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 11;
      background-color: rgba(0, 0, 0, 0.75);
    }
    .show{
      transform: translateX(200px);
    }
    .nvHead {
        position: fixed;
        z-index: 10;
        height: 45px;
        background-color: #fff;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
        top: 0;
        left: 0;
        width: 100%;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        transition: all .3s ease;
        .title {
            display: block;
            line-height: 45px;
            text-align: center;
        }
        .menu{
          position: absolute;
          left: 5%;
          top: 50%;
          transform: translateY(-50%);
        }
        .add{
          position: absolute;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          color: #000;
        }
    }
</style>