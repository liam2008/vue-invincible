 <!-- 父级导航栏 -->
<template>
  <div class="tab-nav-container">
  <el-menu
    :default-active="activeSubject"
    class="el-menu-demo"
    mode="horizontal"
    @select="toggleSubject">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">人事管理</el-menu-item>
  </el-menu>
  </div>
</template>

<script>
/* import { Sidebar } from '@/views/layout/components'
console.log('Sidebar2', Sidebar)
 */
export default {
  /*  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }, */
  data() {
    return {
      activeSubject: '1'
    }
  },
  /* components: {
    Sidebar
  }, */
  methods: {
    toggleSubject(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.tab-nav-container {
  float: left;
  margin-left: 20px;
  .el-menu-item,
  .el-submenu .el-submenu__title {
    height: 49px;
    line-height: 49px;
  }
  .el-menu--horizontal{
    border-bottom: none;
  }
}
</style>

