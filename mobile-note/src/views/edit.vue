<template>
  <div>
    <my-head title="编辑"></my-head>
    <div class="page">
      <type-list @setType="setType"></type-list>
      <my-counter @submit="editSubmit" :count="money" :date="date" :category="category" :type="type" :typeName="typeName"></my-counter>
    </div>
  </div>
</template>
<script>
  import myHead from '../components/myHead.vue'
  import typeList from '../components/typeList.vue'
  import myCounter from '../components/myCounter.vue'

  export default{
    name: 'edit',
    data: function () {
      return {
        date: '',
        category: '',
        type: '',
        typeName: '',
        money: 0,
        item: {}
      }
    },
    methods: {
      setType (type, category, typeName) {
        this.category = category
        this.type = type
        this.typeName = typeName
      },
      getItem (id) {
        this.$http.get('/api/list/findById', {params: {id: id}}).then(response => {
          debugger
          let data = response.body
          if (data.code === 200) {
            console.log(data)
            console.log(data.item)
            let item = data.item
            this.item = item
            this.date = item.date
            this.category = item.category
            this.type = item.type
            this.typeName = item.typeName
            this.money = parseFloat(item.money)
          }
        }).catch(err => {
          console.error(err)
        })
      },
      editSubmit (obj) {
        console.log('添加的item:', obj)
        debugger
        this.$http.post(`/api/list/update?id=${this.$route.query.id}`, {body: obj}).then(response => {
          let data = response.body
          if (data.code === 200) {
            console.log('修改成功')
            debugger
            this.$store.dispatch('updateItem', obj)
            this.$router.push({
              name: 'list'
            })
          }
        }).catch(err => {
          console.error(err)
        })
      }
    },
    mounted () {
      this.getItem(this.$route.query.id)
    },
    components: {
      myHead,
      typeList,
      myCounter
    }
  }
</script>