<template>
  <el-table
    :data="tableData"
    height="30vh"
    style="width: 100%">
    <el-table-column
      prop="date"
      width="150">
    </el-table-column>
    <el-table-column prop="title" label="党建信息" >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top" width="300">
          <p>文章标题: {{ scope.row.title }}</p>
          <p>类型: {{ scope.row.hdtype }}</p>
          <p>添加日期: {{ scope.row.shishitime }}</p>
          <p>文章内容: {{ scope.row.shishinum }}</p>
          <p>发送人姓名: {{ scope.row.shishibname }}</p>
          <p v-html="'信息简介:'+scope.row.shishisum"> </p>
          <div slot="reference" class="name-wrapper">
            <span size="medium">{{ scope.row.title }}</span>
          </div>
        </el-popover>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],

      }
    },
    methods: {
        
        getPhddata:function(){ 

                this.$http.get('http://www.teavamc.com/api/party/shishi').then(function(res){  
                                for (let i = 0; i < res.data.data.length; i++) {
                                    const info={date:res.data.data[i].shishitime,title:res.data.data[i].shishititle,shishitype:res.data.data[i].shishitype,shishinum:res.data.data[i].shishinum,shishitime:res.data.data[i].shishitime,shishisum:res.data.data[i].shishisum,shishipic:res.data.data[i].shishipic}
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
        this.getPhddata();
    }
}
</script>