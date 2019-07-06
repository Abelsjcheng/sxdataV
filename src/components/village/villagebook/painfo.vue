<template>
<div style="position: relative;">
  <div class="vii_modtitle">政策公告 </div>
  <el-table
    :data="tableData"
    height="420">
    <el-table-column
      prop="date"
      width="150">
    </el-table-column>
    <el-table-column prop="title" label="政策公告" >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top" width="300">
          <p>{{ scope.row.type }}</p>
          <p>{{ scope.row.title }}</p>
          <div class="d-block text-center">
            <h4 v-html="scope.row.content"></h4> 
          </div>
          <h6 style="text-align:right;">{{scope.row.date}} {{scope.row.adduname}}</h6>
          <div slot="reference" class="name-wrapper">
            <span size="medium">{{ scope.row.title }}</span>
          </div>
        </el-popover>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],

      }
    },
    methods: {
        
        getpainfo:function(){ 

                this.$http.get('http://110.53.162.165:5050/api/policy/ten').then(function(res){  
                                for (let i = 0; i < res.data.data.length; i++) {
                                    const info={
                                      title:res.data.data[i].title,
                                      type:res.data.data[i].type,
                                      date:res.data.data[i].reldate,
                                      content:res.data.data[i].content,
                                      uname:res.data.data[i].adduname,
                                      pic:res.data.data[i].pic
                                      }
                                    this.tableData.push(info) //存入json数组
                                }
                            },function(){
                        console.log('请求失败处理');
                    });
                
            }
    }, 
    computed: { //计算属性 取存在状态库中的值
        
        
    },
    watch:{
            
    },
     mounted:function(){//页面初始化函数
        this.getpainfo();
    }
}
</script>

