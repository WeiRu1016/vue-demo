<template>
  <div>
    <keep-alive>
      <router-view v-if="$router.meta && $router.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!($router.meta && $router.meta.keepAlive)"></router-view>
  </div>
</template>

<script>
import './assets/css/iconfont/iconfont.css'
import './assets/css/CV.scss'

export default {
  name: 'app'
}
</script>
