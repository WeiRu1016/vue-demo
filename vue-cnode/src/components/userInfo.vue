<template>
  <div>
    <!--未登录-->
    <ul v-if="!userInfo.loginName">
      <li @click="goEnter" class="login">登录</li>
    </ul>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'userInfo',
    computed: {
      ...mapGetters({
        userInfo: 'getUserInfo'
      })
    },
    methods: {
      goEnter () {
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  $height: 80px;
  $paddingLeft: 40px;
  ul{
    list-style: none;
    height: $height;
    li.login{
      background: url('../assets/images/components/login_icon.png') no-repeat 0 center;
      background-size: 30px;
      font-size: 20px;
      height: $height;
      line-height: $height;
      padding-left: $paddingLeft;
      margin: 10px 15px;
      border-bottom: 1px solid #ddd;
    }
  }
</style>