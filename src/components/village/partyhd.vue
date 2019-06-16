<template>
  <el-table
    :data="tableData"
    height="30vh"
    style="width: 100%">
    <el-table-column
      prop="date"
      width="150">
    </el-table-column>
    <el-table-column prop="title" label="党员活动" >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top" width="300">
          <p>活动标题: {{ scope.row.title }}</p>
          <p>活动类别: {{ scope.row.hdtype }}</p>
          <p>活动地点: {{ scope.row.hdloc }}</p>
          <p>活动人数: {{ scope.row.hdnum }}</p>
          <p>活动开始时间: {{ scope.row.hdbtime }}</p>
          <p>活动结束日期: {{ scope.row.hdetime }}</p>
          <p v-html="'活动简介:'+scope.row.hdsum"> </p>
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

                this.$http.get('http://localhost/api/party/all').then(function(res){  
                                for (let i = 0; i < res.data.data.length; i++) {
                                    const info={date:res.data.data[i].hdadddate,title:res.data.data[i].hdtitle,hdtype:res.data.data[i].hdtype,hdloc:res.data.data[i].hdloc,hdnum:res.data.data[i].hdnum,hdbtime:res.data.data[i].hdbtime,hdetime:res.data.data[i].hdetime,hdsum:res.data.data[i].hdsum,hdpic:res.data.data[i].hdpic}
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