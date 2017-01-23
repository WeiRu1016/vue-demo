<template>
  <li class="commit-item">
    <div class="info">
      <span class="img">
        <img class="avator" :src="commit.author.avatar_url" alt="">
      </span>
      <span class="loginname">{{commit.author.loginname}}发布于:{{ commit.create_at | timeAgoFormat }}</span>
      <span class="iconGroup">
        <span class="iconfont">&#xe608;</span>
        <span class="ups">{{ups}}</span>
        <span class="iconfont">&#xe609;</span>
      </span>
    </div>
    <p v-html="commit.content"></p>
  </li>
</template>
<script>
  export default{
    name: 'commitItem',
    props: {
      commit: Object
    },
    computed: {
      ups () {
        return this.commit.ups.length
      }
    }
  }
</script>
<style lang="scss" scoped>
  .commit-item{
    padding: 10px 5px;
  }
  .info{
    position: relative;
    height: 60px;
    color: #626262;
    .img{
      width: 20%;
      display:inline-block;
      vertical-align: middle;
    }
    .loginname{
      width: 50%;
      font-size:14px;
      display:inline-block;
      vertical-align: middle;
    }
    .iconGroup{
      width: 25%;
      display: inline-block;
      vertical-align: middle;
      text-align: right;
      .ups{
        font-size:12px;
      }
      .iconfont{
        font-size:26px;
      }
    }
  }
</style>