<template>
      <div class="box_left_1">
        <table class="tablebox1">
          <tbody>
            <tr>
              <td>
                <div class="box1-y">
                  终端总数
                  <br>
                  <span class="ng-binding">{{devicecount}} </span>
                  <div class="animation"></div>
                </div>
              </td>
              <td>
                <div class="box1-y">
                  运行数
                  <br>
                  <span class="ng-binding">0 </span>
                  <div class="animation"></div>
                </div>
              </td>
              <td>
                <div class="box1-y">
                  停止数
                  <br>
                  <span class="ng-binding">0 </span>
                  <div class="animation"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="box1-y">
                  采集次数
                  <br>
                  <span class="ng-binding">{{countall}}</span>
                  <div class="animation"></div>
                </div>
              </td>
              <td>
                <div class="box1-y">
                  ****
                  <br>
                  <span class="ng-binding">0</span>
                  <div class="animation"></div>
                </div>
              </td>
              <td>
                <div class="box1-y">
                  ***
                  <br>
                  <span class="ng-binding">0</span>
                  <div class="animation"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>     
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "tabledata",
  data () {
    return {
      devicecount:0,
      countall:0
    }
  },
  methods: {
    get:function(){ 
            //发送get请求 获取终端总数
            this.$http.get('http://www.teavamc.com/api/iot/devicecount').then(function(res){   
                                     
                                     this.devicecount=res.data.data;            
                        },function(){
                    console.log('请求失败处理');
                });
            this.$http.get('http://www.teavamc.com/api/iot/countall').then(function(res){   
                                     
                                     this.countall=res.data.data;            
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
