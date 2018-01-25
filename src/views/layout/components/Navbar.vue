<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <tab-nav></tab-nav>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <span class="user-avatar">
          伟
        </span>
        <span>欢迎您 <b>王伟</b></span>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <el-dropdown-item>
          <span @click="resetPsd" style="display:block;">修改密码</span>
        </el-dropdown-item>
        <el-dropdown-item >
          <span @click="logout" style="display:block;">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import tabNav from './tabNav'

export default {
  components: {
    Hamburger,
    tabNav
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    resetPsd() {
      console.log('xxx')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.navbar {
  height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 45px;
    width: 50px;
    height: 50px;
    float: left;
    padding-top: 8px;
    padding-left: 13px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    cursor:pointer;
    .avatar-wrapper {
      display:flex;
      justify-content: center; 
      align-items: center;
      margin-top: 5px;
      .user-avatar {
        display:inline-block;
        background-color:#64d9d6;
        color:white;
        text-align:center;
        line-height: 40px;
        font-size:22px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}
</style>

