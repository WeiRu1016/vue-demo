<template>
  <header class="myHead">
    <span class="iconfont back">&#xe833;</span>
    <span class="title" v-text="title"></span>
  </header>
</template>
<script>
  export default {
    name: 'myHead',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>
<style scoped lang="scss">
  .myHead {
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
    .back{
      position: absolute;
      left: 5%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>