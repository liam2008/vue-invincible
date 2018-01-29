<template>
  <div class="app-container l">
    <el-row>
      <el-col :span="4" class="l">部门管理</el-col>
      <el-col :span="6" :offset="14">
        <el-button  @click.native="addAction">新增下级</el-button>
        <el-button type="success" @click.native="editAction">编辑</el-button>
        <el-button type="danger" @click.native="deleteAction">删除</el-button>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div> 

  
</template> 

<script>
export default {
  data() {
    return {}
  },
  methods: {
    addAction() {
      this.$router.push({ path: "/xxx" })
    }
  }
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>

