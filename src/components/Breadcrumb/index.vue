<template>
    <div>

    </div>
</template>

<script>
import pathToRegexp from "path-to-regexp"; //将路径字符串（如/ user /：name）转换为正则表达式。
export default {
  data() {
    return {
      levelList: null
    };
  },

  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },

  components: {},

  mounted() {},

  methods: {
    getBreadcrumb() {}
  },

  computed: {}
};
</script>
<style lang='less' scoped>

</style>