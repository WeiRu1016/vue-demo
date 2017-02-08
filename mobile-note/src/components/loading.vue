<template>
  <div>
    <div class="iconfont icon-loading"><span class="loading">&#xe602;</span></div>
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
  .loading{
    animation: loading 1s linear;
    animation-iteration-count: infinite;
    display: inline-block;
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