<template>
  <div>
    <my-head title="添加"></my-head>
    <div class="page">
      <type-list></type-list>
      <my-counter type="cloth" typeName="衣物"></my-counter>
    </div>
  </div>
</template>
<script>
  import myHead from '../components/myHead.vue'
  import typeList from '../components/typeList.vue'
  import myCounter from '../components/myCounter.vue'
  export default{
    name: 'add',
    components: {
      myHead,
      typeList,
      myCounter
    }
  }
</script>