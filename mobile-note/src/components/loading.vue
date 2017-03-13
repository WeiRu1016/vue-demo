<template>
  <div>
    <div class="loading-image iconfont icon-loading"><span class="loading">&#xe602;</span></div>
    <div class="page_over"></div>
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'loading'
  }
</script>
<style scoped lang="scss">
  .loading-image {
    position: fixed;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    margin: auto;
    width: 100%;
    height: 90px;
  }
  .loading{
    animation: loading 1s linear;
    animation-iteration-count: infinite;
    display: inline-block;
    position: relative;
    z-index: 999;
  }
  @keyframes loading{
    0%{
      transform: rotate(0deg)
    }
    20%{
      transform: rotate(72deg)
    }
    40%{
      transform: rotate(144deg)
    }
    60%{
      transform: rotate(216deg)
    }
    80%{
      transform: rotate(288deg)
    }
    100%{
      transform: rotate(360deg)
    }
  }
</style>