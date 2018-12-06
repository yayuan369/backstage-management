<template>
    <div v-if="!item.hidden && item.children" class="menu-wrapper">
        <!-- 仅有一个孩纸 -->
        <!-- alwaysShow: true，会忽略之前定义的规则，一直显示根路由 -->
        <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
            <app-link :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
                    <!-- 侧边栏icon的来源 -->
                    <item v-if="onlyOneChild.meta" :icon="onlyOneChild.meta.icon || item.meta.icon" :title="generateTitle(onlyOneChild.meta.title)"></item>
                </el-menu-item>
            </app-link>
        </template>

        <el-submenu v-else ref="submenu" :index="resolvePath(item.path)">
            <template slot="title">
                <item v-if="item.meta" :icon="item.meta.icon" :title="generateTitle(item.meta.title)" />
            </template>

            <template v-for="child in item.children" v-if="!child.hidden">
                <sidebar-item v-if="child.children && child.children.length>0" 
                :is-nest="true" 
                :item="child"
                :key="child.path"
                :base-path="resolvePath(child.path)" class="nest-menu">
                </sidebar-item>
                <app-link v-else :to="resolvePath(child.path)" :key="child.name">
                    <el-menu-item :index="resolvePath(child.path)">
                        <item v-if="child.meta" :icon="child.meta.icon" :title="generateTitle(child.meta.title)"></item>
                    </el-menu-item>
                </app-link>
            </template>
        </el-submenu>

        <!-- <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect" unique-opened router v-if="!collapsed">
            <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
                <el-submenu :index="index+''" v-if="!item.leaf">
                    <template slot="title">
                        <i :class="item.iconCls"></i>
                        {{ item.name }}
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.path" v-if="!child.hidden" :key="child.path">
                        {{ child.name }}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-if="item.leaf && item.children.length" :index="item.children[0].path">
                    <i :class="item.iconCls"></i>
                    {{ item.children[0].name }}
                </el-menu-item>
            </template>
        </el-menu> -->
    </div>
</template>

<script>
import { generateTitle } from '@/utils/i18n'
import path from "path";
import AppLink from "./Link";
import Item from "./Item";
import { isExternal } from "@/utils";
export default {
  name: "SidebarItem",
  props: {
      // 路由对象
    item: {
      type: Object,
      require: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      onlyOneChild: null //只有一个子路由
    };
  },
  components: { AppLink, Item },

  mounted() {},

  methods: {
    hasOneShowingChild(children, parent) {
      //   过滤器
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          //   onlyOneChild
          this.onlyOneChild = item;
          return true;
        }
      });
      //   当只有一个子路由器时，默认显示子路由器
      if (showingChildren.length === 1) {
        return true;
      }
      //   如果没有要显示的子路由器，则显示父级
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    },

    resolvePath(routePath) {
      if (this.isExternalLink(routePath)) {
        return routePath;
      }
      return path.resolve(this.basePath, routePath);
    },
    isExternalLink(routePath) {
      return isExternal(routePath);
    },
    generateTitle
  },

  computed: {}
};
</script>
<style lang='less' scoped>
</style>