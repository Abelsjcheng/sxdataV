<template>
    <div class="zdinfo">
      <h2 style="color:#ffffff;text-align:center;">公告</h2>
      <!--公告列表框 -->
      <virtual-list :size="60" :remain="8">
           <b-list-group >
            <b-list-group-item v-for="(item, index) in annoucements" :key="index" @click="showcontent(item)" style="background-color: rgba(255,255,255,0);border-bottom: 1px solid #eee;">
              <b-badge :variant="item.variant" style="float: left;" pill class="px-3 py-2">{{item.badge}}</b-badge> 
              <span style="color:#ffffff;" class="pl-4">{{item.content}}</span> 
            </b-list-group-item>
          </b-list-group>
      </virtual-list>
       <!--信息弹窗 -->
      <b-modal ref="mycontent"  hide-footer :title="'终端号:'+infocontent.tid" >
        <h2 style="text-align:center;">终端故障 </h2>
        <div class="d-block ">
          <h4 v-html="infocontent.content"></h4> <!--v-html 输出文本对带html标签进行解析 -->
        </div>
        <h6 style="text-align:right;">{{infocontent.ctime}} </h6>
        <b-btn class="mt-3" variant="outline-danger" block @click="hidecontent">关闭</b-btn>
      </b-modal>
    </div>  
</template>

<script>

import virtualList from 'vue-virtual-scroll-list'//列表滚动组件
export default {
components: {'virtual-list': virtualList },
name: "zdinfo",
  data () {
    return {
     annoucements:[],      //badge：置顶/紧急/普通;variant:warning/danger/info;title json数组
     info:{badge:'',variant:'',tid:'',content:'',ctime:'',lo:'',la:'',type:''}, //进行双向绑定 tid:终端id content：终端故障原因
     infocontent:{tid:'',content:'',ctime:'',lo:'',la:''} //信息弹窗内容
    }
  },
  methods: {
    showcontent (message) {
      //赋值
      this.infocontent={lo:message.lo,la:message.la,type:message.type,tid:message.tid,content:message.content,ctime:message.ctime}
      this.$store.commit('SET_ZDINFOCONTENT',this.infocontent); //提交至状态库存储用于标注弹窗
      //this.$refs.mycontent.show()//显示弹窗
    },
    hidecontent () {
      this.$refs.mycontent.hide()//隐藏弹窗
    },
    get:function(){ 
            //发送get请求
            this.$http.get('http://110.53.162.165:5050/api/device/mlal').then(function(res){
                        
                          for (let i = 0; i < res.data.data.length; i++) {
                            this.info={badge:'普通',variant:'info',tid:res.data.data[i].tid,content:res.data.data[i].content,ctime:res.data.data[i].ctime,lo:res.data.data[i].lo,la:res.data.data[i].la,type:'停止'}
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
