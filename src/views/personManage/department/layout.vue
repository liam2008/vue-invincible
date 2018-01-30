<template>
  <div class="app-container">
    <h3>部门管理</h3>
    <div class="search-wrap l">
      <div class="search-title">
        <el-form ref="searchForm" :model="searchForm" label-width="100px">
          <el-form-item label="部门名称/编号">
            <el-input v-model="searchForm.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="search-btn">
        <el-button @click.native="seach">查询</el-button>
      </div>
    </div>
    <div class="content-container">
      <div class="aside">
        <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick">
        </el-tree>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      searchForm: {
        name: 'xxxx'
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/variables.scss";
@import "src/styles/mixin.scss";
.search-wrap {
  background-color: $bg-color;
  border-color: $border-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 10px 20px;
  .search-title {
    height: 40px;
  }
}
.content-container {
  position: relative;
  margin-top: 20px;
  overflow: hidden;
  border-radius: $border-radius;
  .aside {
    background-color: $bg-color;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 250px;
    height: 650px;
    text-align: center;
    padding: 20px;
    border-radius: $border-radius;
    //rest
    .el-tree {
      background-color: $bg-color;
    }
  }
  .main-content {
    background-color: $bg-color;
    border-radius: $border-radius;
    margin-left: 260px;
    height: 650px;
    padding: 20px;
  }
  .aside,
  .main-content {
    border-radius: $border-radius;
    border: 1px solid $border-color;
  }
}
</style>



