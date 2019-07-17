<template>
    <div class="zdinfo">
      <h2 style="color:#ffffff;text-align:center;">公告</h2>
      <!--公告列表框 -->
      <virtual-list :size="60" :remain="8">
        <item v-for="item of annoucements" :key="item.id" v-bind:item="item"  />
      </virtual-list>
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
            this.$http.get('http://110.53.162.165:5050/api/device/mlal').then(function(res){
                        
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
.zdinfo /deep/ .modal-dialog {
    top: 271.5px;
  }


</style>
