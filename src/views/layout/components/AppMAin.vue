<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <keep-alive :include="cacheViews">
                <router-view :key="key" />
            </keep-alive>
        </transition>
    </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    cacheViews() {
      return this.$store.state.tagsView.cacheViews;
    },
    key() {
      return this.$store.fullPath;
    }
  }
};
</script>
<style lang='less' scoped>
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 84px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>