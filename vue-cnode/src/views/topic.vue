<template>
  <div>
    <nv-head tabType="主题" :fixed="true" :needAdd="true"></nv-head>
    <div class="page topic" v-if="topic.title">
      <h1 class="topic-title">{{ topic.title }}</h1>
      <div class="author-info">
        <img class="avator" :src="topic.author.avatar_url" alt="">
        <div class="info">
          <p>
            <span v-text="topic.author.loginname"></span>
            <span class="bardge" :class="typeObj.type" v-text="typeObj.typeName"></span>
          </p>
          <p>
            <span>{{ topic.create_at | timeAgoFormat }}</span>
            <span>{{topic.visit_count}}次浏览</span>
          </p>
        </div>
      </div>
      <section class="markdown-body topic-content" v-html="topic.content"></section>
    </div>
    <div v-if="topic.title" class="commit">
      <p class="sum"><b>{{replayCount}}</b>回复</p>
      <ul class="list-commit">
        <li is="commit-item" v-for="commit in commits" :commit="commit"></li>
      </ul>
    </div>
    <nv-top></nv-top>
  </div>
</template>
<script>
  import $ from 'webpack-zepto'
  import nvHead from '../components/nvHead.vue'
  import commitItem from '../components/commitItem.vue'
  import nvTop from '../components/nvTop.vue'
  import * as untils from '../lib/untils'

  export default {
    name: 'nvTopic',
    data: function () {
      return {
        id: this.$route.params.id,
        topic: {}
      }
    },
    mounted () {
      this.getTopic()
    },
    computed: {
      typeObj () {
        return untils.getStyle(this.topic.tab, this.topic.top, this.topic.good)
      },
      replayCount () {
        return this.topic.replies.length
      },
      commits () {
        return this.topic.replies
      }
    },
    components: {
      nvHead,
      commitItem,
      nvTop
    },
    methods: {
      getTopic () {
        $.get('https://cnodejs.org/api/v1/topic/' + this.id, d => {
          debugger
          this.topic = d.data
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .topic{
    padding:10px;
    .topic-title{
      background: #f0f0f0;
      line-height:40px;
      text-align:center;
      border-radius:5px;
      margin:10px;
      color:#2c3e50;
    }
    .author-info{
      position: relative;
      padding: 10px;
    }
    .topic-content{
      padding: 5px;
    }
    .bardge{
      color: #fff;
      border-radius:3px;
      width: 50px;
      text-align: center;
      font-weight:normal;
    }
    .info{
      display:block;
      font-size: 12px;
      padding:5px;
      position: relative;
      margin-left:60px;
      p{
        position:relative;
        span:last-child{
          position: absolute;
          right: 5%;
        }
      }
    }
    .top{
      background: #E74C3C;
    }
    .good{
      background:#E67E22;
    }
    .share{
      background: #1ABC9C;
    }
    .ask{
      background: #1ABC9C;
    }
    .job{
      background: #9B59B6;
    }
  };
  $padding: 10px;
  .commit{
    .sum{
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      line-height:40px;
      padding-right: $padding;
      padding-left: $padding;
      b{
        color: #42b983;
      }
    };
    .list-commit{
      li{
        border-bottom:1px solid #ddd;
        padding-left: $padding;
        padding-right: $padding;
      }
    }
  }
</style>