<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&& sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar/>
      <tags-view/>
      <app-main/>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain ,TagsView} from './components'
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  data() {
    return {};
  },

  components: { Navbar, AppMain, Sidebar,TagsView },
  mixins: [ResizeMixin],
  mounted() {},

  methods: {
    handleClickOutside() {
      this.$store.dispatch("closeSideBar", { withoutAnimation: false });
    }
  },

  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  }
};
</script>
<style lang='less' scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
   &::after {
    content: "";
    display: table;
    clear: both;
  }
  
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>