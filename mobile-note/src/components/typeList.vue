<template>
  <div class="typeList">
    <div v-if="inTypes" class="row">
      <div class="cell" v-for="item in inTypes.category" @click="setType(inTypes.type, item)">
        <span class="iconfont icon" :class="item.category" ></span>
        <p class="text">{{item.typeName}}</p>
      </div>
    </div>
    <div class="row" v-if="outTypes">
      <div class="cell" v-for="item in outTypes.category" @click="setType(outTypes.type, item)">
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