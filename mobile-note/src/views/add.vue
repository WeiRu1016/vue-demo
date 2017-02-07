<template>
  <div>
    <my-head title="添加"></my-head>
    <div class="page">
      <type-list @setType="setType"></type-list>
      <my-counter @submit="addSubmit" :date="date" :category="category" :type="type" :typeName="typeName"></my-counter>
    </div>
  </div>
</template>
<script>
  import myHead from '../components/myHead.vue'
  import typeList from '../components/typeList.vue'
  import myCounter from '../components/myCounter.vue'
  import $ from 'webpack-zepto'
  
  export default{
    name: 'add',
    data: function () {
      return {
        type: 'out',
        category: 'cloth',
        typeName: '衣服'
      }
    },
    computed: {
      date () {
        return this.$route.query.date || new Date().toLocaleDateString()
      }
    },
    methods: {
      setType (type, category, typeName) {
        debugger
        this.category = category
        this.type = type
        this.typeName = typeName
      },
      addSubmit (item) {
        console.log('添加的item:', item)
        $.ajax({
          type: 'post',
          data: item,
          url: '/api/list/add',
          success: (data) => {
            if (data.code === 200) {
              console.log('添加成功')
              debugger
              this.$store.dispatch('addItem', data.item)
              this.$router.push({
                name: 'list'
              })
            }
          },
          error: (error) => {
            console.error(error)
          }
        })
      }
    },
    components: {
      myHead,
      typeList,
      myCounter
    }
  }
</script>