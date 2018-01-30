<template>
  <div class="app-container">
    <el-row align="middle" type="flex">
      <el-col :span="4">
        部门管理
      </el-col>
      <el-col :span="6" :offset="14">
        <el-button @click.native="addAction">新增下级</el-button>
        <el-button type="success" @click.native="editAction">编辑</el-button>
        <el-button type="danger" @click.native="deleteAction">删除</el-button>
      </el-col>
    </el-row>

    <div class="form-container">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="部门编号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="部门名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="上级部门" prop="region">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      form: {
        name: 'xxx',
        region: 'shanghai'
      }
    }
  },
  methods: {
    addAction() {
      this.$router.push({ path: '/personManage/department/add' })
    },
    editAction() {
      this.$router.push({ path: '/personManage/department/edit' })
    },
    deleteAction() {
      this.$router.push({ path: '/personManage/department/delete' })
    },
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>
.form-container {
  width: 45%;
  margin-top: 30px;
}
</style>

