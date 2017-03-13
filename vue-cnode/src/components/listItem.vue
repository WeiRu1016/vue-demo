<template>
  <li>
    <router-link class="font-color" :to="{name:'topic', params:{id: topic.id}}">
      <h3 class="title" :title="typeObj.typeName" :class="typeObj.type">{{topic.title}}</h3>
      <div class="content">
        <img class="avator" :src="topic.author.avatar_url" alt="">
        <div class="info">
          <p>
            <span class="author" v-text="topic.author.loginname"></span>
            <span class="right"><b>{{topic.reply_count}}</b>/{{topic.visit_count}}</span>
          </p>
          <p>
            <span>{{ topic.create_at | timeAgoFormat }}</span>
            <span class="right">{{ topic.last_reply_at | timeAgoFormat }}</span>
          </p>
        </div>
      </div>
    </router-link>
  </li>
</template>
<script>
  import * as untils from '../lib/untils'
  import Timeago from 'timeago.js'

  export default {
    name: 'listItem',
    props: {
      topic: {
        type: Object
      }
    },
    methods: {
      getTimeago (time) {
        let timeagoInstance = new Timeago()
        let str = timeagoInstance.format(new Date(time), 'zh_CN')
        return str
      }
    },
    computed: {
      typeObj () {
        return untils.getStyle(this.topic.tab, this.topic.top, this.topic.good)
      }
      // ...untils.getStyle(this.topic.tab, this.topic.top, this.topic.good)
    }
  }
</script>
<style lang="scss" scoped>
  .font-color{
    color: #000;
  }
  h3{
    &.title{
      text-overflow:ellipsis;
      white-space: nowrap;
      overflow:hidden;
      /*word-break:break-all;*/
    }
    &:before{
      content: attr(title);
      color: #fff;
      padding:4px;
      border-radius:3px;
      font-size:12px;
      font-weight:normal;
      margin-right:10px;
    };
    &.top{
      &:before{
        background: #E74C3C;
      };
    };
    &.good{
      &:before{
        background:#E67E22;
      };
    };
    &.share{
      &:before{
        background: #1ABC9C;
      };
    };
    &.ask{
      &:before{
        background: #1ABC9C;;
      };
    };
    &.job{
      &:before{
        background: #9B59B6;
      }
    }
  };
  .content{
    font-size: 14px;
    position: relative;
  }
  .info{
    display: block;
    margin-left: 60px;
    p{
      position: relative;
      b{
        color:#42b983;
      }
      .right{
        position: absolute;
        right: 5%;
      }
    }
  }
</style>


