<template>
      <div class="box_left_1">
        <table class="tablebox1">
          <tbody>
            <tr>
              <td>
                <div class="box1-y">
                  总人数
                  <br>
                  <span class="ng-binding">{{cmdata.msum}} </span>
                  <div class="animation"></div>
                </div>
              </td>
              <td>
                <div class="box1-y">
                  男人数
                  <br>
                  <span class="ng-binding">{{cmdata.man}} </span>
                  <div class="animation"></div>
                </div>
              </td>
              <td>
                <div class="box1-y">
                  女人数
                  <br>
                  <span class="ng-binding">{{cmdata.woman}} </span>
                  <div class="animation"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="box1-y">
                  党员数
                  <br>
                  <span class="ng-binding">{{pmdata.psum}}</span>
                  <div class="animation"></div>
                </div>
              </td>
              <td>
                <div class="box1-y">
                  男人数
                  <br>
                  <span class="ng-binding">{{pmdata.man}}</span>
                  <div class="animation"></div>
                </div>
              </td>
              <td>
                <div class="box1-y">
                  女人数
                  <br>
                  <span class="ng-binding">{{pmdata.woman}}</span>
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
      cmdatas:[],
      pmdatas:[],
      cmdata:{marea:'',msum:0,man:0,woman:0},
      pmdata:{parea:'',psum:0,man:0,woman:0}
    }
  },
  methods: {
    get:function(){ 
            //发送get请求 获取终端总数
            this.$http.get('http://www.teavamc.com/api/count/m').then(function(res){   
                            for (let i = 0; i < res.data.data.length; i++) {
                              console.log(res.data.data[i].marea)
                            const cdata={marea:res.data.data[i].marea,msum:res.data.data[i].msum,man:res.data.data[i].man,woman:res.data.data[i].woman}
                            this.cmdatas.push(cdata)
                          }                        
                        },function(){
                    console.log('请求失败处理');
                });
            //发送get请求 获取某村终端数信息
            this.$http.get('http://www.teavamc.com/api/count/pm').then(function(res){
                        for (let i = 0; i < res.data.data.length; i++) {
                          
                            const pdata={parea:res.data.data[i].parea,psum:res.data.data[i].psum,man:res.data.data[i].man,woman:res.data.data[i].woman}
                            this.pmdatas.push(pdata)
                          }
                        },function(){
                    console.log('请求失败处理');
                });
        }
  },
  computed: { //计算属性 取存在状态库中的值
     ...mapGetters(["selectplace"]),
     listenselectplace(){ //返回状态库中的值
       return this.selectplace;
     },
     
  },
  watch:{
      listenselectplace:function(vag){//实时监听状态库中值的改变 
        if(vag=="暮云村")
        {
            for (let i = 0; i < this.cmdatas.length; i++) {
              this.cmdata.msum +=this.cmdatas[i].msum
              this.cmdata.man +=this.cmdatas[i].man
              this.cmdata.woman +=this.cmdatas[i].woman
            }
        for (let i = 0; i < this.pmdatas.length; i++) {
          
              this.pmdata.psum +=this.pmdatas[i].psum
              this.pmdata.man +=this.pmdatas[i].man
              this.pmdata.woman +=this.pmdatas[i].woman
                          
          } 
        }
        
      }
  },
   mounted:function(){//页面初始化函数
        this.get();
        
    }
  
  
}
</script>
