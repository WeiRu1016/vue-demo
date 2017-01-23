<template>
  <div>
    <div v-if="show" class="page-over" @click="closeMenu"></div>
    <header id="hd" :class="{fixed:fixed,show:show&&fixed,nofixed:!fixed}">
      <div class="nav-bar">
        <i class="iconfont menu-icon" @click="showMenu">三</i>
        <i v-if="needAdd" class="iconfont add-icon">&#xe60f;</i>
        <span v-text="tabType"></span>
      </div>
    </header>
    <slider :showMenu="show"></slider>
  </div>
</template>
<script>
  import slider from './slider.vue'
  export default{
    name: 'nvHead',
    components: {
      slider
    },
    props: {
      fixed: {
        type: Boolean
      },
      tabType: {
        type: String
      },
      needAdd: {
        type: Boolean
      }
    },
    data: function () {
      return {
        show: false
      }
    },
    methods: {
      showMenu () {
        this.show = !this.show
      },
      closeMenu () {
        this.show = !this.show
      }
    }
  }
</script>
<style lang="scss" scoped>
  .page-over{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 6;
    background-color: rgba(0,0,0,0.7);
  };
  $right: 5%;
  #hd{
    width: 100%;
    line-height: 45px;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.25);
    top: 0;
    left: 0;
    transition: all .3s ease;
    background-color:#fff;
    /*display: none;*/
    &.fixed{
      position: fixed;
      z-index: 5;
    };
    &.show{
      transform: translateX(200px);
    };
    .nav-bar{
      width: 100%;
      span{
        display: block;
        text-align: center;
      };
      .menu-icon{
        position: absolute;
        left: $right;
      };
      .add-icon{
        position:absolute;
        right: $right;
      };
    }
  }
</style>