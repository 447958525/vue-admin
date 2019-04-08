<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height: 252px">
          <div class="user-info">
            <img src="../../static/img/my.jpg" class="user-avator" alt="">
            <div class="user-info-cont">
              <div class="user-info-name">username</div>
              <div>教务老师</div>
            </div>
          </div>
          <div class="user-info-list">上次登录时间：<span>2019-2-22</span></div>
          <div class="user-info-list">上次登录地点：<span>深圳</span></div>
        </el-card>
        <el-card shadow="hover" style="height: 252px;">
          <div slot="header" class="clearfix">
            <span>教学详情</span>
          </div>
          数学
          <el-progress :percentage="71.3" color="#42b983"></el-progress>
          语文
          <el-progress :percentage="63.5" color="#f1e05a"></el-progress>
          英语
          <el-progress :percentage="93.1"></el-progress>
          音乐
          <el-progress :percentage="5.2" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-1">
                <i class="iconfont icon-icon_zhanghao  grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">34268</div>
                  <div>在校学生</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-2">
                <i class="iconfont icon-guangbo grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">432</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-3">
                <i class="el-icon-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">503</div>
                  <div></div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12" class="mgt20">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="schart-box" >
              <schart class="schart" canvasId="ring" :data="data1" type="ring" :options="options1"></schart>
            </div>
          </el-card>
          </el-col>

          <el-col :span="12" class="mgt20">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="schart-box" >
                <schart class="schart" canvasId="pie" :data="data2" type="pie" :options="options2"></schart>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>


      <el-col :span="16">
            <el-card shadow="hover" :body-style="{padding: '0px'}" >
              <ul>
                <span class="NewTitle">今日新闻</span>
                <li class="NewPost"><a href="#"><i class="iconfont icon-icon_fabu">&nbsp;</i>学校领导带头准备开展新的工作<span class="NewTime">2月25日14：56</span></a></li>
                <li class="NewPost"><a href="#"><i class="iconfont icon-icon_fabu">&nbsp;</i>建言献策谋发展，其乐融融话重阳——我校举行离、退休老同志座谈会<span class="NewTime">2月25日14：34</span></a></li>
                <li class="NewPost"><a href="#"><i class="iconfont icon-icon_fabu">&nbsp;</i>学校领导带头准备开展新的工作<span class="NewTime">2月25日11：47</span></a></li>
                <li class="NewPost"><a href="#"><i class="iconfont icon-icon_fabu">&nbsp;</i>建言献策谋发展，其乐融融话重阳——我校举行离、退休老同志座谈会<span class="NewTime">2月25日16：10</span></a></li>
                <li class="NewPost"><a href="#"><i class="iconfont icon-icon_fabu">&nbsp;</i>表为标兮圭为度，心相依兮影相随——省实验2010届初中校友为母校捐赠圭表<span class="NewTime">2月25日10：37</span></a></li>
                <li class="NewPost"><a href="#"><i class="iconfont icon-icon_fabu">&nbsp;</i>表为标兮圭为度，心相依兮影相随——省实验2010届初中校友为母校捐赠圭表<span class="NewTime">2月25日12：28</span></a></li>
                <li class="NewPost"><a href="#"><i class="iconfont icon-icon_fabu">&nbsp;</i>学校领导带头准备开展新的工作<span class="NewTime">2月25日14：67</span></a></li>
              </ul>
            </el-card>
      </el-col>

    </el-row>
  </div>
</template>
<script>
  import Schart from 'vue-schart';
  export default {
    name: 'HelloWorld',
        components:{
          Schart
        },

        data: () => ({
          data1:[
            {name:'短袖', value:1200},
            {name: '裤子', value:1200},
            {name: '外套', value:1453},
            {name: '礼服', value:2641}
          ],
          data2:[
            {name:'数学', value:1320},
            {name:'音乐', value:1234},
            {name:'英语', value:2563},
            {name:'语文', value:1432}
          ],
          options1:{
            title: '校园校服定制总数量',
            bgColor:'#ffffff',
            titleColor:'#000',
            legendColor:'#404040',
            radius:120,
            innerRadius:80
          },
          options2:{
            title:'校园教材课本定制总数量',
            bgColor:'#ffffff',
            titleColor:'#000',
            legendColor:'#404040',
            radius: 120

          }
        })
  }
</script>

<style>
  .el-row{
    margin-bottom: 20px;
  }

  .user-info{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
  }

  .user-avator{
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .user-info-cont{
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
  }

  .user-info-name{
    font-size: 30px;
    color: black;
  }

  .user-info-list{
    font-size: 14px;
    color: #999;
  }

  .user-info-list span{
    padding-left: 100px;
  }

  .mgb20{
    margin-bottom: 20px;
  }
  .mgt20{
    margin-top: 20px;
  }

  .grid-content{
    display: flex;
    align-items: center;
    height: 100px;
  }

  .grid-cont-right{
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
  }

  .grid-num{
    color: black;
    font-size:30px;
  }
  .grid-con-icon{
    width: 100px;
    height: 100px;
    font-size: 60px;
    text-align: center;
    line-height: 100px;
    color: #ffffff;
  }

  .grid-con-1 .grid-con-icon{
    background: rgb(45, 140, 240);
  }
  .grid-con-2 .grid-con-icon{
    background: rgb(100, 213, 114);
  }
  .grid-con-3 .grid-con-icon{
    background: rgba(242, 94, 67);
  }

  .schart-box{
    display: inline-block;
    margin: 20px;
  }
  .schart{
        width: 470px;
        height: 356px;
  }


  .NewTitle{
    font-size: 24px;
    color: #222222;
    font-weight: bold;
  }
  .NewPost{
    list-style: none;
  }
  .NewPost a{
    text-decoration: none;
    color: #333333;
  }
  .NewPost a:hover{
    color: #0077aa;
  }
  .NewPost i:hover {
    color: red;
  }
  .NewTime{
    float: right;
    margin-right: 20px;
  }



</style>
