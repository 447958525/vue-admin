import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import Login from "../components/Login";
import Register from "../components/Register";
import Index from "../../src/index";
import Add_Student from "../components/one_column/add_student";
import Change_into from "../components/tow_column/Change_into";
import Change_into2 from "../components/tow_column/Change_into2";

import Change_Student from "../components/one_column/change_student"
import punishment from "../components/one_column/punishment"
import End_ranking from "../components/one_column/end_ranking"
import Ago_ranking from "../components/one_column/ago_ranking"




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Index,
      component:Index,
      children:[
        {
        path: '/',
        name: '首页',
        component: HelloWorld
        },
        {
          path:'/student/add_student',
          name:'添加学籍',
          component:Add_Student
        },

        {
          path:'/student/change_student',
          name:'修改学籍',
          component:Change_Student
        },
        {
          path:'/student/punishment',
          name:'处分记录',
          component:punishment
        },
        {
          path:'/student/change_into',
          name:'省外转入',
          component:Change_into
        },
        {
          path:'/student/Change_into2',
          name:'省内转入',
          component:Change_into2
        },
        {
          path:'/teacher/end_ranking',
          name:'期末排行',
          component:End_ranking
        },
        {
          path:'/teacher/ago_ranking',
          name:'年度排行',
          component:Ago_ranking
        }
        ]
    },


    {
      path: '/hellowrold',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})
