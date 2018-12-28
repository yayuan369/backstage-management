<template>
    <div>
        <div class="section">
            <p>第一种loading</p>
            <div class="loading1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="section">
            <p>第二种loading</p>
            <div class="loading2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="section">
            <p>第三种loading</p>
            <div class="loading3">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  mounted() {},

  methods: {},

  computed: {}
};
</script>
<style lang='less' scoped>
.section {
  width: 100%;
  height: 220px;
  border: 1px solid #ccc;
  overflow: hidden;
  p {
    text-align: center;
    font-size: 18px;
  }
}

// 第一种
.loading1 {
  width: 80px;
  height: 40px;
  margin: 0 auto;
  margin-top: 70px;
  span {
    display: inline-block;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background: lightgreen;
    animation: load1 1s ease infinite;
    -webkit-animation: load1 1s ease infinite;
    // infinite : 指定动画应该播放无限次（永远）
    // ease : 动画以低速开始，然后加快，在结束前变慢
  }
}
@keyframes load1 {
  0%,
  100% {
    height: 40px;
    background: lightgreen;
  }
  50% {
    height: 70px;
    margin: -15px 0;
    background: lightblue;
  }
}
@-webkit-keyframes load1 {
  0%,
  100% {
    height: 40px;
    background: lightgreen;
  }
  50% {
    height: 70px;
    margin: -15px 0;
    background: lightblue;
  }
}

.loading1 span:nth-child(2) {
  // 动画开始之前的延迟
  animation-delay: 0.2s;
  -webkit-animation-delay: 0.2s;
}
.loading1 span:nth-child(3) {
  animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
}
.loading1 span:nth-child(4) {
  animation-delay: 0.6s;
  -webkit-animation-delay: 0.6s;
}
.loading1 span:nth-child(5) {
  animation-delay: 0.8s;
  -webkit-animation-delay: 0.8s;
}

// 第二种
.loading2 {
  width: 150px;
  height: 15px;
  margin: 0 auto;
  position: relative;
  margin-top: 70px;
  span {
    position: absolute;
    width: 15px;
    height: 100%;
    border-radius: 50%;
    background: lightgreen;
    animation: load2 1.04s ease-in infinite alternate;
    -webkit-animation: load2 1.04s ease-in infinite alternate;
    // ease-in : 动画以低速开始
    // alternate : 动画应该轮流反向播放
  }
}
@keyframes load2 {
  0% {
    opacity: 1;
    transform: translate(0px);
    -webkit-transform: translate(0px);
  }
  100% {
    opacity: 0.2;
    transform: translate(150px);
    -webkit-transform: translate(150px);
  }
}
.loading2 span:nth-child(1) {
  animation-delay: 0.13s;
  -webkit-animation-delay: 0.13s;
}
.loading2 span:nth-child(2) {
  animation-delay: 0.26s;
  -webkit-animation-delay: 0.26s;
}
.loading2 span:nth-child(3) {
  animation-delay: 0.39s;
  -webkit-animation-delay: 0.39s;
}
.loading2 span:nth-child(4) {
  animation-delay: 0.52s;
  -webkit-animation-delay: 0.52s;
}
.loading2 span:nth-child(5) {
  animation-delay: 0.65s;
  -webkit-animation-delay: 0.65s;
}

// 第三种
// 只作为 loading3 元素子元素的 span 元素样式,可以用以下写法
// .lading3 > span{}

.loading3 {
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
  margin: 0 auto;
  margin-top: 70px;
  span {
    height: 100%;
    width: 6px;
    display: inline-block;
    background-color: #aee08c;
    animation: load3 1.2s infinite ease-in-out;
    -webkit-animation: load3 1.2s infinite ease-in-out;
  }
}
@keyframes load3 {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
@-webkit-keyframes load3 {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
  20% { -webkit-transform: scaleY(1.0) }
}

.loading3 span:nth-child(2) {
  animation-delay: -1.1s;
  -webkit-animation-delay: -1.1s;
}
.loading3 span:nth-child(3) {
  animation-delay: -1.0s;
  -webkit-animation-delay: -1.0s;
}
.loading3 span:nth-child(4) {
  animation-delay: -0.9s;
  -webkit-animation-delay: -0.9s;
}
.loading3 span:nth-child(5) {
  animation-delay: -0.8s;
  -webkit-animation-delay: -0.8s;
}
</style>