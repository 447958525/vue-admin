<template>
<div>
  <div class="crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }"><span><i class="iconfont icon-wxbzhuye"></i></span> 首页</el-breadcrumb-item>
      <el-breadcrumb-item>学生学籍</el-breadcrumb-item>
      <el-breadcrumb-item>处分记录</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="container">

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="punishmentDate" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="punishment" label="处分" width="180">
      </el-table-column>
      <el-table-column prop="about" label="原因">
      </el-table-column>
      <el-table-column label="操作" width="60                                                                                                                                                   ">
        <el-popover placement="top" v-model="visible">
          <el-button slot="reference" @click="deleteForm" type="danger" icon="el-icon-delete" circle=""></el-button>
        </el-popover>
      </el-table-column>
    </el-table>
    <div>
      <el-form class="btn">
        <el-form-item>
          <el-button type="primary" @click="handleTabAdd">新增</el-button>
        </el-form-item>
      </el-form>


      <el-dialog title="新增处分" :visible.sync="addFormVisible">
        <el-form :model="form" ref="form">
          <el-form-item label="日期:" label-width="50px">
            <el-date-picker v-model="form.date" placeholder="请选择日期" type="date"></el-date-picker>
          </el-form-item>
          <el-form-item label="姓名:" label-width="50px">
            <el-input v-model="form.name" style="width: 26%"></el-input>
          </el-form-item>
          <el-form-item label="处分:" label-width="50px">
            <el-radio-group v-model="form.punishment">
              <el-radio class="radio" :label="0">警告</el-radio>
              <el-radio class="radio" :label="1">检讨1000字</el-radio>
              <el-radio class="radio" :label="2">留校观察</el-radio>
              <el-radio class="radio" :label="3">劝退开除</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="原因:" label-width="50px">
            <el-input type="textarea" v-model="form.about" style="width: 85%;"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addFormVisible = false">取消</el-button>
          <el-button type="primary"  @click="addSubmit" :loading="addLoading">确定</el-button>
        </div>
      </el-dialog>

    </div>

  </div>

</div>
</template>

<script>
  export default{
    data(){
      return {
        tableData: [],
        listLoading: true,
        //添加框
        addFormVisible:false,
        addLoading: false,
        form:{
          date:'',
          name:'',
          punishment: -1,
          about:''
        },
        visible: false,
        idx: -1
      }
      },
    created(){
      this.loadData(this.setData)
    },
    methods:{
      loadData(callBack){
        this.$ajax({
          method:'get',
          url:'/static/data/punishment_student.json'
        }).then(res => {
          console.log(res);
          callBack(res.data);
        }).catch(res => {
          console.log(res);
        })
      },
      setData(data){
        console.log(data);
        for(var i in data.students){
          this.tableData.push(data.students[i]);
        }
        this.listLoading = false;
      },
      deleteForm(){     //删除框
        this.$confirm('删除后无法恢复，是否继续？', '提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type:'warning',
          center: true
        }).then(() => {
          this.tableData.splice(-1, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },

      handleTabAdd(){
        this.addFormVisible = true
      },

      addSubmit: function () {
        this.addLoading = false;
        this.$message({
          message: '提交成功',
          type: 'success'
        });
        this.addFormVisible = false;
      },
    }
  }
</script>

<style>
  .btn{
    margin-top: 10px;
    text-align: center;
  }
</style>
