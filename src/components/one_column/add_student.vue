<template>
  <div class="form">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }"><span><i class="iconfont icon-wxbzhuye"></i></span> 首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/student/add_student' }"> 添加学籍</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="学生姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="所在户籍">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option key="szhk" label="深圳户口" value="szhk"></el-option>
              <el-option key="wlhk" label="外来户口" value="wlhk"></el-option>
              <el-option key="gahk" label="港澳户口" value="gahk"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="入学时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.data1"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2"></el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.data2"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="转前城市">
            <el-cascader :options="options" v-model="form.options"></el-cascader>
          </el-form-item>
          <el-form-item label="是否住校">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="兴趣爱好">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="体育运动" name="type"></el-checkbox>
              <el-checkbox label="歌舞音乐" name="type"></el-checkbox>
              <el-checkbox label="美体艺术" name="type"></el-checkbox>
              <el-checkbox label="武术格斗" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="热爱特长">
            <el-radio-group v-model="form.resource">
              <el-radio label="电子竞技" ></el-radio>
              <el-radio label="航空模型" ></el-radio>
              <el-radio label="穿着打扮" ></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="另外描述">
              <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
          </el-form-item>
          <el-foem-item>
            <el-button type="primary" @click="onSubmit">提交学籍</el-button>
            <el-button>取消</el-button>
          </el-foem-item>
        </el-form>
      </div>
    </div>

  </div>

</template>


<script>
  export default{
    name:'add_student',
    data: function(){
      return {
        options:[
          {
            value:'guandong',
            label:'广东省',
            children:[
              {
                value:'shenzhen',
                label:'深圳市',
                children: [
                  {
                    value:'futian',
                    label:'福田区'
                  },
                  {
                    value:'luohu',
                    label:'罗湖区'
                  },
                  {
                    value:'nanshan',
                    label:'南山区'
                  },
                  {
                    value:'longgang',
                    label:'龙岗区'
                  },
                  {
                    value:'baoan',
                    label:'宝安区'
                  }
                ]
              },
              {
                value:'guanzou',
                label:'广州市',
                children:[
                  {
                    value:'tianhe',
                    label:'天河区'
                  },
                  {
                    value:'haizhu',
                    label:'海珠区'
                  }
                ]
              }
            ]
          },
          {
            value:'beijin',
            label:'北京',
            children:[
              {
                value:'dongcheng',
                label:'东城区'
              },
              {
                value:'xicheng',
                label:'西城区'
              },
              {
                value:'fengtai',
                label:'丰台区'
              },
              {
                value:'zhaoyang',
                label:'朝阳区'
              },
              {
                value:'haidian',
                label:'海淀区'
              }
            ]
          }
        ],
        form:{
          name:'',
          region:'',
          data1:'',
          data2:'',
          delivery:true,
          type:['体育运动'],
          resource:'航空模型',
          desc:'',
          options:[]
        }
      }
    },
    methods:{
      onSubmit(){
        this.$message.success('提交成功!');
      }
    }
  }
</script>



