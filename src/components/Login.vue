<template>
<div class="note" :style="note">
  <div class="loginForm">
    <el-form rel="AccountForm" :rules = "rules" status-icon
             :model="account"
             label-position = "left" label-width = "0px"
             class = "demo-ruleForm login-container">
      <div class="tabsUser">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="users">
          <el-tab-pane label="学生" name="students">学生</el-tab-pane>
          <el-tab-pane label="教师" name="teacher">教师</el-tab-pane>
          <el-tab-pane label="教务老师" name="eduTeacher">教务老师</el-tab-pane>
        </el-tabs>
      </div>

    <div class="formGroup">

      <el-form-item prop="username">
        <label>账号</label>
        <el-input id="username" type="text"  v-model="account.username" auto-complete="off" placeholder="请输入您的账号" class = "form-control"  clearable></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <label>密码</label>
        <el-input id="password" type="password" v-model="account.password" auto-complete="off" placeholder="请输入您的密码" class = "form-control" clearable></el-input>
      </el-form-item>
    </div>


    <div class="remFor">
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <a href="#"  class="forget">忘记密码</a>
    </div>

    <div class="forButton">
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%;" @click="login">登录</el-button>
      </el-form-item>
    </div>
    </el-form>

  </div>
</div>

</template>

<script>
    export default {
      name: "Login",
      data() {
        return {
          logining: false,
          note: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            backgroundImage: "url(" + require("../../static/img/background.jpeg") + ")",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          },
          account:{},
          rules: {
            username: [
              {required: true, message: '请输入账号', trigger: 'blur'}
            ],
            password: [
              {required: true, message: '请输入密码', trigger: 'blur'}
            ]
          },
          checked: false
        };
      },
    methods: {
      login () {
        if(this.account.username === 'admin' && this.account.password === '123'){
          this.$notify({
            type:'success',
            message:'欢迎你！' + this.account.username + '!',
            duration:3000
          });
          this.$router.replace('/')
        }else{
          this.$message({
            type: 'error',
            message: '用户密码错误',
            showClose:true
          })
        }
  }
}
}
</script>

<style>
  .login-container{
    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: rgba(255,255,255,0.7);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  label{
    width: 70px;
    text-align: left;
  }
  .form-control{
    width: 270px;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
  .remember{
    width: 250px;
    text-align: left;
  }
  .forget{
    width: 500px;
    text-align: right;
    font-size: 14px;
  }
  .remFor{
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .tabsUser{
    display: inline-block;
    margin-left: 0px;
    margin-right: 0px;
    text-align: center;
    font-size: 25px;
  }
  .formGroup label{
    margin-right: 10px;
  }

</style>


