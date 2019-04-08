<template>
<div class="app">
  <el-container>
    <el-aside class="app-side app-side-left"
              :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
      <div class="app-side-logo">
        <a href="#"><img src="../static/img/logo.jpg"
             :width="isCollapse ? '60' : '60'"
             height="60"/></a>
      </div>
      <div>
        <el-menu default-active="1-4-1"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 :collapse="isCollapse"
                  background-color="#e9e9e9"
                 router :default-active="$route.path">
          <el-submenu>
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">学生学籍</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组1</span>
              <el-menu-item index="/student/add_student">增加学籍</el-menu-item>
              <el-menu-item index="/student/change_student">修改学籍</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="/student/punishment">处分记录</el-menu-item>
            </el-menu-item-group>
            <el-submenu >
              <span slot="title">学籍转入</span>
              <el-menu-item index="/student/change_into">省内转入</el-menu-item>
              <el-menu-item index="/student/change_into2">省外转入</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu>
            <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">优秀老师</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/teacher/end_ranking">期末排行</el-menu-item>
              <el-menu-item index="/teacher/ago_ranking">年度排行</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu>
            <template slot="title">
            <i class="el-icon-star-on"></i>
            <span slot="title">三好学生</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">期中排行</el-menu-item>
              <el-menu-item index="3-2">期末排行</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item>
            <i class="el-icon-view"></i>
            <span slot="title">校内新闻</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>

    <el-container>
      <el-header class="app-header">
        <div style="width: 60px; cursor:pointer;"
             @click.prevent="toggleSideBar">
          <i v-show="!isCollapse" class="el-icon-d-arrow-left icon-color" ></i>
          <i v-show="isCollapse" class="el-icon-d-arrow-right icon-color" ></i>
        </div>
        <el-menu default-active="activeIndex2"
                 class="el-menu-demo tab-page"
                 mode="horizontal"
                 @select="handleSelect"
                 background-color="#404040"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 router :default-active="$route.path">
          <el-menu-item index="/">主页</el-menu-item>
          <el-menu-item index="2">管理中心</el-menu-item>
          <el-submenu index="3">
            <template slot="title">教务办公</template>
            <el-menu-item index="3-1">学籍更改</el-menu-item>
            <el-menu-item index="3-2">学籍新增</el-menu-item>
            <el-menu-item index="3-3">学员成绩</el-menu-item>
            <el-submenu index="3-4">
              <template slot="title">教学人员</template>
              <el-menu-item index="3-4-1">新增人员</el-menu-item>
              <el-menu-item index="3-4-2">教学评测</el-menu-item>
              <el-menu-item index="3-4-3">教学普及</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="4">消息中心</el-menu-item>
          <el-menu-item index="5">教材订单</el-menu-item>
        </el-menu>

        <div class="app-header-userinfo">
          <img src="../static/img/my.jpg"
                             :width="40"
                             :height="40"
                             />
          <el-dropdown tirgger="hover"
                       :hide-on-click="false">
            <span class="el-dropdown-link">
              <b class="icon-color">username</b>
              <i class="el-icon-arrow-down el-icon-right icon-color" ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided
                                @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-main class="app-body">
        <template>
          <router-view/>
        </template>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>


<script>
  export default{
    name: 'index',
    data(){
      return {
        username: '',
        isCollapse: false,
      }
    },
    methods:{
      toggleSideBar() {
        this.isCollapse = !this.isCollapse
      },
      logout: function () {
        this.$confirm('确认退出？', '提示', {})
          .then(()=>{
            sessionStorage.removeItem('user');
            this.$router.push('/login');
          })
          .catch(()=>{ });
      },
      handleOpen(key, keyPath){
        console.log(key,keyPath);
      },
      handleClose(key,keyPath){
        console.log(key,keyPath);
      },
      handleSelect(key,keyPath){
        console.log(key,keyPath);
      },
    },
    mounted: function(){
      let user = sessionStorage.getItem('user');
      if(user){
        this.username = user;
      }
    },
  }
</script>
