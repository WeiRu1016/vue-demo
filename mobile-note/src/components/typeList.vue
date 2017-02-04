<template>
  <div class="typeList">
    <div class="row">
      <div class="cell" v-for="item in inTypes.category">
        <span class="iconfont icon" :class="item.category" ></span>
        <p class="text">{{item.typeName}}</p>
      </div>
    </div>
    <div class="row">
      <div class="cell" v-for="item in outTypes.category">
        <span class="iconfont icon" :class="item.category"></span>
        <p class="text">{{item.typeName}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'typeList',
    computed: {
      ...mapGetters([
        'inTypes',
        'outTypes',
        'groupList'
      ])
    }
  }
</script>
<style scoped lang="scss">
  .typeList{
    padding: 10px;
    .row{
      border-bottom: 1px solid #ddd;
    }
    .cell{
      width: 50px;
      display: inline-block;
      margin-right: 20px;
    }
    .icon{
      margin: 10px 0;
      display: inline-block;
    }
    .text{
      font-size: 16px;
      text-align: center;
    }
  }
</style>