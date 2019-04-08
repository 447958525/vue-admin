<template>
  <div>
    <div class="crumbs" >
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }"><span><i class="iconfont icon-wxbzhuye"></i></span> 首页</el-breadcrumb-item>
      <el-breadcrumb-item>优秀老师</el-breadcrumb-item>
      <el-breadcrumb-item>期末排行</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
       <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="date"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="教学">
    </el-table-column>
  </el-table>
    </div>

  </div>

</template>

<script>
  export default{
    name:'add_student',
    data() {
      return {
        tableData: [{
          date: '2014-19-02',
          name: '张大帅',
          address: '向日葵学院5年级1班数学老师'
        }, {
          date: '2018-12-04',
          name: '黄斯坦',
          address: '向日葵学院7年级物理老师'
        }, {
          date: '2017-02-01',
          name: '爱得生',
          address: '向日葵学院8年级语文老师'
        }, {
          date: '2019-03-03',
          name: '杨得乐',
          address: '向日葵学院5年级英语老师'
        }],
        currentRow: null
      }
    },
  }
</script>
