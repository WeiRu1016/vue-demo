<template>
  <div id="counter">
    <div class="header">
      <span class="iconfont icon" :class="type" ></span>
      <span class="text">{{typeName}}</span>
      <span class="money">&yen{{money}}</span>
    </div>
    <table>
      <tr>
        <td @click="setNumber(1)">1</td>
        <td @click="setNumber(2)">2</td>
        <td @click="setNumber(3)">3</td>
        <td @click="backSpace" class="iconfont backSpace">&#xe624;</td>
      </tr>
      <tr>
        <td @click="setNumber(4)">4</td>
        <td @click="setNumber(5)">5</td>
        <td @click="setNumber(6)">6</td>
        <td @click="setOpreation('+')">+</td>
      </tr>
      <tr>
        <td @click="setNumber(7)">7</td>
        <td @click="setNumber(8)">8</td>
        <td @click="setNumber(9)">9</td>
        <td @click="setOpreation('-')">-</td>
      </tr>
      <tr>
        <td @click="clear">C</td>
        <td @click="setNumber(0)">0</td>
        <td @click="setDot">.</td>
        <td v-if="show" @click="submit">OK</td>
        <td v-else="" @click="getSum">=</td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'myCounter',
    data: function () {
      return {
        show: true,
        numbers: ['', ''],
        currentIndex: 0,
        op: '',
        money: 0
      }
    },
    computed: {
      // money () {
      //   return this.numbers[this.currentIndex] || '0'
      // }
    },
    props: {
      type: {
        type: String,
        required: true
      },
      typeName: {
        type: String,
        required: true
      }
    },
    methods: {
      setDot () {
        debugger
        if (this.currentIndex === 0 && this.op) {
          this.currentIndex = 1
          this.show = false
        }
        let num = this.numbers[this.currentIndex]
        if (!num) {
          this.numbers[this.currentIndex] = '0.'
        } else {
          this.numbers[this.currentIndex] = num.indexOf('.') === -1 ? num + '.' : num
        }
        this.money = this.numbers[this.currentIndex] || '0'
      },
      setNumber (number) {
        debugger
        if (this.currentIndex === 0 && this.op) {
          this.currentIndex = 1
          this.show = false
        }
        let num = this.numbers[this.currentIndex]
        if (num.length < 8) {
          if (num || number) {
            this.numbers[this.currentIndex] += number.toString()
          }
        }
        this.money = this.numbers[this.currentIndex] || '0'
      },
      setOpreation (op) {
        if (this.currentIndex === 0) {
          if (!this.numbers[0]) {
            this.numbers[0] = '0'
          }
          this.op = op
        } else {
          this.getSum()
          this.op = op
        }
        this.money = this.numbers[this.currentIndex] || '0'
      },
      clear () {
        this.money = 0
        this.numbers = ['', '']
        this.currentIndex = 0
        this.op = ''
        this.money = this.numbers[this.currentIndex] || '0'
      },
      getSum () {
        switch (this.op) {
          case '+':
            this.numbers[0] = parseFloat(this.numbers[0]) + parseFloat(this.numbers[1])
            this.numbers[0] = this.numbers[0] === 0 ? '' : this.numbers[0].toString()
            break
          case '-':
            this.numbers[0] = parseFloat(this.numbers[0]) - parseFloat(this.numbers[1])
            this.numbers[0] = this.numbers[0] === 0 ? '' : this.numbers[0].toString()
            break
        }
        this.currentIndex = 0
        this.numbers[1] = ''
        this.op = ''
        this.show = true
        this.money = this.numbers[this.currentIndex] || '0'
      },
      backSpace () {
        let num = this.numbers[this.currentIndex]
        if (this.currentIndex === 0 && this.op) {
          this.op = ''
        } else {
          this.numbers[this.currentIndex] = num.slice(0, -1)
        }
        this.money = this.numbers[this.currentIndex] || '0'
      },
      submit () {
        this.money = this.numbers[this.currentIndex] || '0'
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