<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
  import './assets/scss/iconfont/iconfont.css'
  import './assets/scss/github-markdown.css'
  import './assets/scss/CV.scss'
  export default {
    name: 'app'
  }
</script>
