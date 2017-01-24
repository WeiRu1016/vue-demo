<template>
  <div>
    <img class="index" src="../assets/logo.png">
  </div>
</template>
<script>
  export default {
    name: 'index',
    mounted () {
      setTimeout(() => {
        this.$router.push({
          name: 'list'
        })
      }, 2000)
    }
  }
</script>
<style scoped>
  .index{
    display: block;
    margin: auto;
    margin-top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
  }
</style>