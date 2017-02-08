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
        this.$http.post('/api/list/add', {params: item}).then(response => {
          let data = response.body
          if (data.code === 200) {
            console.log('添加成功')
            debugger
            this.$store.dispatch('addItem', data.item)
            this.$router.push({
              name: 'list'
            })
          }
        }).catch(err => {
          console.error(err)
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