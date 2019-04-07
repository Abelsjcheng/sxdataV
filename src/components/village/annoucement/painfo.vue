<template>
    <div>
      <h2 style="color:#ffffff;text-align:center;">公告</h2>
      <!--公告与政策列表框 -->
      <virtual-list :size="60" :remain="8">
           <b-list-group >
            <b-list-group-item v-for="(item, index) in annoucements" :key="index" @click="showcontent(item)" style="background-color: rgba(255,255,255,0);border-bottom: 1px solid #eee;">
              <b-badge :variant="item.variant" style="float: left;" pill class="px-3 py-2">{{item.badge}}</b-badge> 
              <span style="color:#ffffff;" class="pl-4">{{item.title}}</span> 
            </b-list-group-item>
          </b-list-group>
      </virtual-list>
       <!--信息弹窗 -->
      <b-modal ref="mycontent"  hide-footer :title="infocontent.type" >
        <h2 style="text-align:center;">{{infocontent.title}} </h2>
        <div class="d-block text-center">
          <h4 v-html="infocontent.content"></h4> <!--v-html 输出文本对带html标签进行解析 -->
        </div>
        <h6 style="text-align:right;">{{infocontent.reldate}} {{infocontent.adduname}}</h6>
        <b-btn class="mt-3" variant="outline-danger" block @click="hidecontent">关闭</b-btn>
      </b-modal>
    </div>  
</template>

<script>

import virtualList from 'vue-virtual-scroll-list'//列表滚动组件
export default {
components: {'virtual-list': virtualList },
name: "painfo",
  data () {
    return {
     annoucements:[],      //badge：置顶/紧急/普通;variant:warning/danger/info;title json数组
     info:{badge:'',variant:'',title:'',type:'',reldate:'',title:'',content:'',adduname:'',pic:''}, //进行双向绑定
     infocontent:{type:'',reldate:'',title:'',content:'',adduname:'',pic:''} //信息弹窗内容
    }
  },
  methods: {
    showcontent (message) {
      //赋值
      this.infocontent={type:message.type,reldate:message.reldate,title:message.title,content:message.content,adduname:message.adduname,pic:''}
      this.$refs.mycontent.show()//显示弹窗
    },
    hidecontent () {
      this.$refs.mycontent.hide()//隐藏弹窗
    },
    get:function(){ 
            //发送get请求
            this.$http.get('http://www.teavamc.com/api/policy/ten').then(function(res){
                          for (let i = 0; i < res.data.data.length; i++) {
                            this.info={badge:'普通',variant:'info',title:res.data.data[i].title,type:res.data.data[i].type,reldate:res.data.data[i].reldate,content:res.data.data[i].content,adduname:res.data.data[i].adduname,pic:res.data.data[i].pic}
                            this.annoucements.push(this.info) //存入json数组
                          }
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

<style>
.app-warpper /deep/ .modal-dialog {
    top: 271.5px;
  }
.app-warpper /deep/ .list-group-item {
    background-color: rgba(255,255,255,0);
    border-bottom: 1px solid #eee;
  }

</style>
