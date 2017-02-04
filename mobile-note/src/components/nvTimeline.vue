<template>
  <div>
    <div v-for="(item, key) in groupList">
      <div class="line"></div>
      <div class="point"><span class="date">{{key}}</span><span class="money">{{item.incoming - item.outcoming}}</span></div>
      <div class="item" v-for="index in item.data">
        <div class="line"></div>
        <span class="iconfont icon" :class="index.category"></span>
        <span class="text left">{{index.typeName}}</span>
        <span class="text right">{{index.money}}</span>
      </div>
    </div>
    <div class="noItem" v-if="!groupList.length">
      <router-link :to="{name: 'add'}">
        <div class="iconfont add">&#xe775;</div>
      </router-link>
       还没有记录~马上添加
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'nvTimeline',
    computed: {
      ...mapGetters([
        'groupList'
      ]),
      // groupList () {
      //   return []
      // },
      show () {
        return this.groupList.length > 0
      }
    }
  }
</script>
<style scoped lang="scss">
  .line{
    height: 30px;
    width: 2px;
    margin: 0 auto;
    background-color: #ddd;
  }
  .point{
    position: relative;
    &::before{
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #ddd;
      margin: 0 auto;
      content:'';
      display: block;
    }
    .date{
      position: absolute;
      left: 50%;
      top: -50%;
      transform: translateX(-100%);
      padding-right: 10px;
    }
    .money{
      position: absolute;
      right: 50%;
      top: -50%;
      transform: translateX(100%);
      padding-left: 10px;
    }
  }
  .noItem{
    padding: 20px 20px;
    text-align: center;
    .add{
      font-size: 30px;
      color: #000;
    }
  }
  .item{
    position: relative;
    .text{
      position: absolute;
      top: 60%;
    }
    .left{
      left:30%;
      margin-left: -10px;
    }
    .right{
      right: 30%;
    }
  }
</style>