<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }"><span><i class="iconfont icon-wxbzhuye"></i></span> 首页</el-breadcrumb-item>
        <el-breadcrumb-item>学生学籍</el-breadcrumb-item>
        <el-breadcrumb-item>学籍转入</el-breadcrumb-item>
        <el-breadcrumb-item>省外转入</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="form" :rules="rules" style="width: 100%">
          <el-form-item prop="name" label="学生姓名" label-width="80px">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item prop="age" label="年龄" label-width="60px">
            <el-input-number v-model="form.age" :min="0" :max="100" class="form-AllDate"></el-input-number>
          </el-form-item>
          <el-form-item prop="sex" label="性别" label-width="60px">
            <el-radio-group v-model="form.sex">
              <el-radio class="radio" :label="1">男</el-radio>
              <el-radio class="radio" :label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="region" label="户籍所属省份" label-width="110px">
            <el-select v-model="form.region" placeholder="请选择" >
              <el-option key="gdsn" label="广东省内" value="gdsn"></el-option>
              <el-option key="gdsw" label="广东省外" value="gdsw"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-transfer
              filterable
              :filter-method="filterMethod"
              filter-placeholder="请输入城市拼音" :titles="['选择省份','转入的省份']"
              v-model="value"
              :data="data">
            </el-transfer>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="FormSubmit('form')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    data(){
      const generateData = _ =>{
        const data = [];
        const cities = ['广东省','广西省', '海南省','山东省','河南省','河北省','四川省','新疆自治区','甘肃','青海','上海','北京','天津']
        const pinyin = ['guangdong','jiangxi','hainan','shandong','henan','hebei','sichuan','xingjian','gansu','qinhai','shanghai','beijing','tianjin']
        cities.forEach((city, index) =>{
          data.push({
            label:city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        form:{
          name:'',
          age: '',
          sex: '',
          region: ''
        },
        rules:{
          name:[{
            required: true, message: '请输入学生姓名', trigger:'blur'
          }],
          age:[{
            required: true, message: '请选择年龄', trigger: 'blur'
          }],
          sex: [{
            required: true, message: '请选择性别', trigger:'blur'
          }],
          region:[{
            required: true, message: '请选择省份', trigger:'blur'
          }]
        },
        data: generateData(),
        value: [0],
        filterMethod(query, item){
          return item.pinyin.indexOf(query) > -1;
        }
      };
    },
    methods:{
      FormSubmit(formName){
        this.$refs[formName].validate((valid) => {
          if(valid){
            this.$message({
              message:'提交成功！',
              type: 'success'
            })
          }else{
            this.$message({
              message: '提交失败，有信息未填写！',
              type: 'error'
            });
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  };
</script>
label=""
<style>
  .radio{
    margin-left: 20px;
  }
</style>
