<template>
  <div class="typeList">
    <div v-if="typeList && typeList.in" class="row">
      <div class="cell" v-for="item in typeList.in.category" @click="setType(typeList.in.type, item)">
        <span class="iconfont icon" :class="item.category" ></span>
        <p class="text">{{item.typeName}}</p>
      </div>
    </div>
    <div class="row" v-if="typeList && typeList.out">
      <div class="cell" v-for="item in typeList.out.category" @click="setType(typeList.out.type, item)">
        <span class="iconfont icon" :class="item.category"></span>
        <p class="text">{{item.typeName}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'typeList',
    computed: {
      ...mapState([
        'typeList'
      ])
    },
    methods: {
      setType (type, item) {
        debugger
        this.$emit('setType', type, item.category, item.typeName)
      }
    },
    mounted () {
      this.$store.dispatch('getTypes')
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