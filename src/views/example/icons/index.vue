<template>
  <div class="app-container">
    <div class="icons-wrapper">
      <div v-for="(item,index) in iconsMap" :key="index" @click="handleClipboard(generateIconCode(item),$event)">
        <el-tooltip placement="top">
          <div slot="content">
            {{generateIconCode(item)}}
          </div>
          <div class="icon-item">
            <svg-icon :icon-class="item" class-name="disabled" ></svg-icon>
            <span>{{ item }}</span>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import clipboard from '@/utils/clipboard';
export default {
  data () {
    return {
      iconsMap:['#icon-daizhenhuanzhe','#icon-huiyuanquanyi']
    };
  },

  components: {},

  mounted() {},

  methods: {
    generateIconCode(symbol) {
      return 'svg-icon ' + symbol;
    },
    handleClipboard(text, event) {
      clipboard(text, event)
    }
  },

  computed: {}
}

</script>
<style lang='less' scoped>
.icons-wrapper {
    overflow: hidden;
  }
  .icon-item {
    margin: 20px;
    height: 110px;
    text-align: center;
    width: 110px;
    float: left;
    font-size: 26px;
    color: #24292e;
    cursor: pointer;
  }
  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }
  .disabled{
    pointer-events: none;
  }
</style>