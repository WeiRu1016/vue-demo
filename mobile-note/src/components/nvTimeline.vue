<template>
  <div>
    <div v-for="(item, key) in dataList">
      <div class="line"></div>
      <router-link :to="{name: 'detail', query:{date:key}}">
        <div class="point"><span class="date">{{key}}</span><span class="money">{{item.incoming - item.outcoming}}</span></div>
      </router-link>
      <div class="item" v-for="index in item.items">
        <div class="line"></div>
        <span class="iconfont icon" :class="index.category"></span>
        <span class="text left">{{index.typeName}}</span>
        <span class="text right">{{index.money}}</span>
      </div>
    </div>
    <div class="noItem" v-if="show">
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
    props: {
      // dataList: {
      //   type: Object,
      //   required: true
      // }
    },
    computed: {
      ...mapGetters({
        dataList: 'getList'
      }),
      show () {
        console.log('shushu:', !this.dataList)
        return !this.dataList || !(JSON.stringify({}).length === 2)
      }
    },
    mounted () {
      console.log('timeline', this.dataList)
    },
    watch: {
      dataList (newData) {
        console.log('newData', newData)
      }
    }
  }
</script>
<style scoped lang="scss">
  a{
    color: #000;
  }
  a:lived,a:visited,a:hover,a:active{
    outline: none;
    background: none;
  }
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