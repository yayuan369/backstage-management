<template>
    <div v-if="!item.hidden && item.children" class="menu-wrapper">
        <!-- 仅有一个孩纸 -->
        <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild || onlyOneChild.noShowingChildren) && !item.alwaysShow">
            <app-link :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
                    <item v-if="onlyOneChild.meta" :icon="onlyOneChild.meta.icon || item.meta.icon" :title="onlyOneChild.meta.title"></item>
                </el-menu-item>
            </app-link>
        </template>

        <el-submenu v-else :index="resolvePath(item.path)">
            <template slot="title">
                <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title"></item>
            </template>

            <template v-for="child in item.children" v-if="!child.hidden">
                <sidebar-item 
                v-if="child.children && child.children.length>0"
                :is-nest="true"
                :item="child"
                :key="child.path"
                :base-path="resolvePath(child.path)" class="nest-menu">
                    <app-link v-else :to="resolvePath(child.path)" :key="child.name">
                        <el-memu-item :index="resolvePath(child.path)">
                            <item v-if="child.meta" :icon="child.meta.icon" :title="child.meta.title"></item>
                        </el-memu-item>
                    </app-link>
                </sidebar-item>
            </template>
        </el-submenu>
    </div>
</template>

<script>
import AppLink from "./Link";
import Item from "./Item";
import { isExternal } from "@/utils";
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: String,
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
      hasOneShowingChild(children,parent){
        //   过滤器
          const showingChldren = children.filter(item=>{
              if(item.hidden){
                  return false;
              }else{
                  this.onlyOneChild = item;
                  return true;
              }
          })
        //   当只有一个子路由器时，默认显示子路由器
          if(showingChldren.length===1){
              return true;
          }
        //   如果没有要显示的子路由器，则显示父级
        if(showingChldren.length === 0){
            this.onlyOneChild = {...parent,path:'',noShowingChildren:true};
            return true;
        }
        return false;
      },

      resolvePath(routePath){
          if(this.isExternalLink(routePath)){
              return routePath;
          }
          return path.resolve(this.basePath,routePath);
      },
      isExternalLink(routePath){
          return isExternal(routePath);
      }
  },

  computed: {}
};
</script>
<style lang='less' scoped>
</style>