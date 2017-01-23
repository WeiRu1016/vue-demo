<template>
  <div>
    <img src="../assets/images/index.png" alt="" id="index">
  </div>
</template>
<script>
  export default {
    name: 'index',
    mounted () {
      setTimeout(() => {
        this.$router.push({name: 'list'})
      }, 2000)
    }
  }
</script>
<style scoped>
  #index{
    width: 100%;
    margin-top: 40%;
    background-color: #fff;
  }
</style>