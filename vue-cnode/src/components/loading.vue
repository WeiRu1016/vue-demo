<template>
  <div>
    <img class="loading" src="../assets/images/loading.gif" alt="加载中...">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'loading'
  }
</script>
<style scoped>
  .loading{
    display: block;
    margin: auto;
  }
</style>