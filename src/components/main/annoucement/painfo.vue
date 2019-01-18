<template>
    <div>
      <h2 style="color:#ffffff;text-align:center;">公告与政策</h2>
      <virtual-list :size="60" :remain="8">
           <b-list-group >
            <b-list-group-item v-for="(item, index) in annoucements" :key="index" @click="showcontent">

              <b-badge :variant="item.variant" style="float: left;" pill class="px-3 py-2">{{item.badge}}</b-badge> 
              <span style="color:#ffffff;" class="pl-4">{{item.title}}</span> 

            </b-list-group-item>
          </b-list-group>
      </virtual-list>
      <b-modal ref="mycontent"  hide-footer title="公共信息">
        <div class="d-block text-center">
          <h3>测试信息!</h3>
        </div>
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
     annoucements:[]      //badge：置顶/紧急/普通;variant:warning/danger/info;title
     
    }
  },
  methods: {
    showcontent () {
      this.$refs.mycontent.show()
    },
    hidecontent () {
      this.$refs.mycontent.hide()
    },
    get:function(){ 
            //发送get请求
            this.$http.get('www.teavamc.com/api/policy/limit').then(function(res){
                          for (let i = 0; i < res.data.length; i++) {
                            this.annoucements[i]={badge:'普通',variant:'info',title:res.data[i].title}
                          }
                        },function(){
                    console.log('请求失败处理');
                });
        }
  },
   mounted:function(){//页面初始化函数
        this.get();
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
