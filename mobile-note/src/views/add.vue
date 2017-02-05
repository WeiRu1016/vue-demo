<template>
  <div>
    <my-head title="添加"></my-head>
    <div class="page">
      <type-list @setType="setType"></type-list>
      <my-counter :type="type" :typeName="typeName"></my-counter>
    </div>
  </div>
</template>
<script>
  import myHead from '../components/myHead.vue'
  import typeList from '../components/typeList.vue'
  import myCounter from '../components/myCounter.vue'
  export default{
    name: 'add',
    data: function () {
      return {
        type: 'cloth',
        typeName: '衣服'
      }
    },
    methods: {
      setType (type, typeName) {
        debugger
        this.type = type
        this.typeName = typeName
      }
    },
    components: {
      myHead,
      typeList,
      myCounter
    }
  }
</script>