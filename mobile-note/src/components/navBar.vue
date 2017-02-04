<template>
  <ul class="navBar">
    <li class="icon-list iconfont item">账目列表</li>
    <li class="icon-sum iconfont item">账目统计</li>
    <li class="icon-chart iconfont item">账目图表</li>
  </ul>
</template>
<script>
  export default {
    name: 'navBar'
  }
</script>
<style scoped lang="scss">
  $height: 50px;
  .navBar{
    position: fixed;
    left: -200px;
    z-index: 12;
    background-color: #fff;
    width: 200px;
    top: 0;
    bottom: 0;
    padding: 50px 20px 10px 20px;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    transition: all .3s ease;
    .item{
      display: block;
      height: $height;
      line-height: $height;
      color: rgba(0,0,0,0.75);
    }
  }
</style>