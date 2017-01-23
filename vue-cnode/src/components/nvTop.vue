<template>
  <div class="goTop iconfont" v-if="show" @click="goTop">&#xe611;</div>
</template>
<script>
  import $ from 'webpack-zepto'
  export default {
    name: 'nvTop',
    data: function () {
      return {
        show: false
      }
    },
    mounted () {
      $(window).on('scroll', () => {
        if (document.body.scrollTop > 0) {
          this.show = true
        } else {
          this.show = false
        }
      })
    },
    methods: {
      goTop () {
        $(window).scrollTop(0)
        this.show = false
      }
    },
    beforeDestory () {
      $(window).off('scroll')
    }
  }
</script>
<style scoped>
  .goTop{
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 40px;
    width:50px;
    height: 50px;
  }
</style>