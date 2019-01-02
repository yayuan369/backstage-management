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
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
  margin-top: 60px;
  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: lightgreen;
    position: absolute;
    animation: load 1.04s ease infinite;
  }
}

@keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
@-webkit-keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
.loading1 span:nth-child(1) {
  left: 0;
  top: 50%;
  margin-top: -8px;
  animation-delay: 0.13s;
  -webkit-animation-delay: 0.13s;
}
.loading1 span:nth-child(2) {
  left: 14px;
  top: 14px;
  animation-delay: 0.26s;
  -webkit-animation-delay: 0.26s;
}
.loading1 span:nth-child(3) {
  left: 50%;
  top: 0;
  margin-left: -8px;
  animation-delay: 0.39s;
  -webkit-animation-delay: 0.39s;
}
.loading1 span:nth-child(4) {
  top: 14px;
  right: 14px;
  animation-delay: 0.52s;
  -webkit-animation-delay: 0.52s;
}
.loading1 span:nth-child(5) {
  right: 0;
  top: 50%;
  margin-top: -8px;
  animation-delay: 0.65s;
  -webkit-animation-delay: 0.65s;
}
.loading1 span:nth-child(6) {
  right: 14px;
  bottom: 14px;
  animation-delay: 0.78s;
  -webkit-animation-delay: 0.78s;
}
.loading1 span:nth-child(7) {
  bottom: 0;
  left: 50%;
  margin-left: -8px;
  animation-delay: 0.91s;
  -webkit-animation-delay: 0.91s;
}
.loading1 span:nth-child(8) {
  bottom: 14px;
  left: 14px;
  animation-delay: 1.04s;
  -webkit-animation-delay: 1.04s;
}
</style>