<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }"><span><i class="iconfont icon-wxbzhuye"></i></span> 首页</el-breadcrumb-item>
      <el-breadcrumb-item>学生学籍</el-breadcrumb-item>
      <el-breadcrumb-item>修改学籍</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  <div class="container">
    <div>
      <el-table :data="tableData" style="width: 100%" >
        <el-table-column fixed prop="date"
                         label="日期" width="150" sortable
                         column-key="date"
                         :filters="[{text:'2016-6-5', value:'2016-6-5'},
                          {text:'2014-7-4', value:'2014-7-4'},
                          {text:'2019-2-12', value:'2019-2-12'}]"
                         :filter-method="filterHandler"
        ></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="sex" label="性别" width="120"
                         :filters="[{text:'男', value:'男'}, {text:'女', value:'女'}]"
                         :filter-method="filterHandler"
                         :formatter="formatSex"></el-table-column>
        <el-table-column prop="age" label="年龄" width="120"></el-table-column>
        <el-table-column prop="province" label="省份" width="120"></el-table-column>
        <el-table-column prop="city" label="市区" width="120"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.$index, scope.rows)"
                       type="primary"
                       size="small">
              编辑
            </el-button>
            <el-button @click="handleDelete(scope.$index, scope.rows)"
                       type="danger" size="small">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background @curtent-change="handleCurrentChange" layout="prev,pager,next" :total="100" :page-size="10"></el-pagination>
      </div>
    </div>
  </div>
    <!--编辑提示框-->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
      <el-form ref="form" :model="form">
        <el-form-item label="入学日期" label-width="30px;">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date"
                          value-format="yyyy-MM-dd" style="width: 250px;"
          ></el-date-picker>
          <el-form-item label="姓名" label-width="50px" class="form-label">
            <el-input  v-model="form.name" class="form-AllDate"></el-input>
          </el-form-item>
          <el-form-item label="性别" label-width="50px" class="form-label">
            <el-radio-group v-model="form.sex" class="form-AllDate">
              <el-radio class="radio" :label="1">男</el-radio>
              <el-radio class="radio" :label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="年龄" label-width="50px" class="form-label">
            <el-input-number v-model="form.age" :min="0" :max="100" class="form-AllDate"></el-input-number>
          </el-form-item>
          <el-form-item label="省份" label-width="50px" class="form-label">
            <el-input v-model="form.province" class="form-AllDate"></el-input>
          </el-form-item>
          <el-form-item label="市区" label-width="50px" class="form-label">
            <el-input v-model="form.city" class="form-AllDate"></el-input>
          </el-form-item>
          <el-form-item label="地址" label-width="50px" class="form-label">
            <el-input type="textarea" v-model="form.address" class="form-AllDate"></el-input>
          </el-form-item>

        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取消</el-button>
        <el-button type="primary" @click="saveEdit">确定</el-button>
      </span>

    </el-dialog>

    <!-- 删除提示框 -->
    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
      <div class="del-dialog-cnt">删除不可恢复，确定删除？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取消</el-button>
        <el-button @click="deleteRow" type="primary">确定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>

  export default {
    data(){
      return {
        tableData:[],
        listLoading: true,
        delVisible:false,
        editVisible:false,
        cur_page: 1,
        form:{
          date:'',
          name:'',
          age:'',
          sex: -1,
          province: '',
          city: '',
          address: '',
        },
        idx: -1
     };
    },
    created(){
        this.loadData(this.setData);
    },
    methods: {
      loadData(callBack) {
        const This = this;
        this.$ajax({
          method: 'get',
            url:'/static/data/get_students.json'
        }).then(res => {
            console.log(res);
            callBack(res.data); //callBack异步回调
          })
          .catch(res => {
            console.log(res);
          })
      },
      setData(data) { //对数据做一些处理
        console.log(data);
        for(var i in data.students) {
          //data.students[i].sex = 'nan';
          this.tableData.push(data.students[i]);
        }
        this.listLoading = false;
      },

      formatSex: function(rows, column){
        return rows.sex == 1 ? '男' : rows.sex == 2 ? '女' : '未知';
      },
      handleEdit(index, rows){
        this.idx = index;
        const item = this.tableData[index];
        this.form = {
          date: item.date,
          name: item.name,
          age: item.age,
          sex: item.sex,
          province: item.province,
          city: item.city,
          address: item.address
        };
        this.editVisible = true
      },
      saveEdit(){
        this.$set(this.tableData, this.idx, this.form);
        this.editVisible = false;
      },
      handleDelete(index, rows){
        this.idx = index;
        this.delVisible = true;
      },
      deleteRow(){   //删除数据
        this.tableData.splice(this.idx, 1);
        this.delVisible = false;
      },

      filterHandler(value, row, column){ //筛选数据
        const property = column['property'];
        return row[property] === value;
      },
      handleCurrentChange(val){
        this.cur_page = val;
        this.getTableData();
      },
      getTableData() {
                // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
                if (process.env.NODE_ENV === 'development') {
                    this.url = '/ms/table/list';
                };
                this.$axios.post(this.url, {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data.list;
                })
            },
    }
  }


</script>

<style>
.form-label{
  margin-top: 10px;
}

</style>
