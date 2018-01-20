<template>
  <scroll-bar>
    <h5 class="subject-title">
      <span v-if="sidebar.opened">智干ERP管理系统</span>
      <span v-else>SD</span>
    </h5>
    <el-menu mode="vertical" unique-opened :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.subject-title {
  text-align: center;
  color: white;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
