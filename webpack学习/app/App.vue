<template>
  <div>Hi {{name}}</div>
</template>
<script>
  import './greeting.css'
  export default{
    name: 'main',
    data () {
      return {
        name: 'baomax'
      }
    }
  }
</script>