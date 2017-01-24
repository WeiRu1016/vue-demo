<template>
  <div>
    <div class="page_over"></div>
    <header class="nvHead">
      <span class="iconfont icon_menu"></span>
      <span class="iconfont icon_add"></span>
      <span class="title" v-text="title"></span>
    </header>
  </div>
</template>
<script>
  export default {
    name: 'nvHead',
    props: {
      title: String,
      required: true
    }
  }
</script>
<style lang="scss" scoped>
  .nvHead{
    position: fixed;
    height: 45px;
    background-color: #fff;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    top: 0;
    left: 0;
    width: 100%;
    .title{
      display: block;
      line-height: 45px;
      text-align: center;
    }
    .icon_menu{
      position: absolute;
      left: 5%;
      top: 50%;
      transform: translateY(-50%);
    }
    .icon_add{
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>