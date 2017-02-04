<template>
  <div>
    <nv-head title="首页"></nv-head>
    <div class="page">
      <nv-timeline></nv-timeline>
    </div>
  </div>
</template>
<script>
  import nvHead from '../components/nvHead.vue'
  import nvTimeline from '../components/nvTimeline.vue'

  export default{
    name: 'list',
    components: {
      nvHead,
      nvTimeline
    }
  }
</script>