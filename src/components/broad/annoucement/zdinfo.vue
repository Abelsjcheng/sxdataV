<template>
    <div class="fault_info">
      <div class="itemTit">
        <span class="border-yellow">终端故障公告</span>
      </div>
      <!--公告列表框 -->
      <div class="fault_list">
        <item v-for="item of annoucements" :key="item.id" v-bind:item="item"  />
      </div>
    </div>  
</template>

<script>
import item from './item.vue'
import virtualList from 'vue-virtual-scroll-list'//列表滚动组件
export default {
components: {'virtual-list': virtualList,item },
name: "zdinfo",
  data () {
    return {
     annoucements:[],      //badge：置顶/紧急/普通;variant:warning/danger/info;title json数组
     info:{badge:'danger',tid:'',content:'',ctime:'',lo:'',la:'',type:''}, //进行双向绑定 tid:终端id content：终端故障原因
    }
  },
  methods: {
    
    get:function(){ 
            //发送get请求
            this.$http.get('api/device/mlal').then(function(res){
                        
                          for (let i = 0; i < res.data.data.length; i++) {
                            this.info={id:i,badge:'danger',tid:res.data.data[i].tid,content:res.data.data[i].content,ctime:res.data.data[i].ctime,lo:res.data.data[i].lo,la:res.data.data[i].la,type:'停止'}
                            this.annoucements.push(this.info) //存入json数组
                          }
                          this.$store.commit('SET_ZDINFO',this.annoucements);
                        },function(){
                    console.log('请求失败处理');
                });
        }
  },
   mounted:function(){//页面初始化函数
        this.get();
        //setInterval(this.get,6000)//用定时器循环get
    }
  
}
</script>
<style >

.itemTit{
    padding:12px 30px;
    border-bottom:1px solid #1e5b6b;
  }
  .itemTit span{
    display:block;
    height:30px;
    line-height:30px;
    border-left:5px solid transparent;
    font-size:15px;
    color:#fff;
    padding-left:8px;
    text-align:left;
  }
.border-yellow {
      border-color: #ffd220 !important;
  }
  .fault_list{
    overflow: scroll;
    overflow-x: hidden;
    height: 53.5vh;
  }
</style>
