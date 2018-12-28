<template>
  <div class="app-container">
    <div class="container">
      <h2>输入验证码：</h2>
      <div class="vcode">
        <input type="tel" maxlength='4' ref='code' class='code' id='code' @focus='focus=true' v-model='code' @blur='focus=false' :disabled='disabled'>
        <div class="labels">
          <label class="label" for="code" :class='{active: focus===true && index===currentIndex,unactive:akCode[index+1]}' v-for='(item,index) in length' v-text='arrCode[index]'>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      length: 4,
      code: "",
      akCode:[],
      focus: false,
      disabled: false
    };
  },

  components: {},

  mounted() {},
  watch: {
    code(newV, oldV) {
      var self = this;
      this.code = newV.replace(/[^\d]/g, ""); // 限制非数字
      console.log(newV, self.currentIndex);
      self.akCode[self.currentIndex] = newV;
      if (newV.length >= 4) {
        this.disabled = true;
        this.$refs.code.blur();
        setTimeout(function() {
          alert("submit:" + self.code + "");
        }, 500);
      }
    }
  },
  methods: {},

  computed: {
    arrCode() {
      return this.code.split("");
    },
    currentIndex() {
      return this.code.length;
    }
  }
};
</script>
<style lang='less' scoped>
.container {
  padding: 5%;
}
.vcode {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.code {
  width: 100%;
  padding: 0;
  height: 50px;
  font-size: 35px;
  overflow: hidden;
  border: none;
  outline: none;
  opacity: 0;
  margin-left: -100%; // ios上透明度为0时依然有光标
  -webkit-tap-highlight-color: transparent;
}
.labels {
  display: flex;
  display: -webkit-flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  margin-top: -40px;
  -webkit-tap-highlight-color: transparent; // 解决ios点击灰色阴影的问题
}
.label {
  height: 40px;
  line-height: 20px;
  width: 12%;
  border-bottom: 2px  #bdb9b9 solid;
  float: left;
  color: #313131;
  font-size: 35px;
  text-align: center;
}
.active{
  border-bottom-color: #2678e4;
}
.active:after {
  // 伪类实现光标效果
  content: " ";
  display: inline-block;
  width: 2px;
  // height: 100%;
  height: 26px;
  background: #313131;
  animation: 0.8s animate infinite;
}
.unactive {
  // border: none;
  border-bottom-color: #bdb9b9;
}
</style>