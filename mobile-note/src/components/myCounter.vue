<template>
  <div id="counter">
    <div class="header">
      <span class="iconfont icon" :class="type" ></span>
      <span class="text">{{typeName}}</span>
      <span class="money">&yen{{money}}</span>
    </div>
    <table>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td class="iconfont backSpace">&#xe624;</td>
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>+</td>
      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>-</td>
      </tr>
      <tr>
        <td>C</td>
        <td>0</td>
        <td>.</td>
        <td>=</td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'myCounter',
    props: {
      type: {
        type: String,
        required: true
      },
      typeName: {
        type: String,
        required: true
      },
      money: {
        type: Number,
        default: 0
      }
    }
  }
</script>
<style scoped lang="scss">
  #counter{
    background-color: rgb(245, 245, 245);
    padding: 10px;
    .icon{
      margin: 10px 0;
      display: inline-block;
    }
    .backSpace{
      font-size: 24px;
    }
    .header{
      height: 70px;
      margin-bottom: 10px;
      span{
        display:inline-block;
        vertical-align: middle;
      }
      .text,.money{
        height: 100%;
        line-height:70px;
        font-size:16px;
      }
      .text{
        margin-left: 10px;
      }
      .money{
        float: right;
        margin-right: 20px;
      }
    }
    table{
      width: 100%;
      border: 1px solid #6b6969;
      font-size: 24px;
      tr{
        width:100%;
        height:50px;
        td{
          width: 25%;
          text-align: center;
          border: 1px solid #6b6969;
        }
      }
    }
  }
</style>