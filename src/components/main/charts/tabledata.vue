<template>
      <div class="box_left_1">
        <table class="tablebox1">
          <tbody>
            <tr>
              <td>
                <div class="box1-y">
                  终端总数
                  <br>
                  <span class="ng-binding">{{sumdata.sum}} </span>
                  <div class="animation"></div>
                </div>
              </td>
              <td>
                <div class="box1-y">
                  运行数
                  <br>
                  <span class="ng-binding">{{sumdata.run}} </span>
                  <div class="animation"></div>
                </div>
              </td>
              <td>
                <div class="box1-y">
                  停止数
                  <br>
                  <span class="ng-binding">{{sumdata.down}} </span>
                  <div class="animation"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="box1-y">
                  村/社区
                  <br>
                  <span class="ng-binding">{{terdata.aname}}</span>
                  <div class="animation"></div>
                </div>
              </td>
              <td>
                <div class="box1-y">
                  运行数
                  <br>
                  <span class="ng-binding">{{terdata.run}}</span>
                  <div class="animation"></div>
                </div>
              </td>
              <td>
                <div class="box1-y">
                  停止数
                  <br>
                  <span class="ng-binding">{{terdata.down}}</span>
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
      mdata:[],
      sumdata:{sum:'',run:'',down:''},
      terdata:{aname:'null',run:'null',down:'null'}
    }
  },
  methods: {
    get:function(){ 
            //发送get请求 获取终端总数
            this.$http.get('http://www.teavamc.com/api/device/sumters').then(function(res){   
                            this.sumdata={sum:res.data.data.sum,run:res.data.data.run,down:res.data.data.down}
                        },function(){
                    console.log('请求失败处理');
                });
            //发送get请求 获取某村终端数信息
            this.$http.get('http://www.teavamc.com/api/device/tersga').then(function(res){
                        for (let i = 0; i < res.data.data.length; i++) {
                            const tersdata={aname:res.data.data[i].aname,run:res.data.data[i].run,down:res.data.data[i].down}
                            this.mdata.push(tersdata)
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
        for (let i = 0; i < this.mdata.length; i++) {
            console.log(this.mdata[i].aname)
            if(vag==this.mdata[i].aname)
            {
              this.terdata={aname:this.mdata[i].aname,run:this.mdata[i].run,down:this.mdata[i].down}
            }
          }
      }
  },
   mounted:function(){//页面初始化函数
        this.get();
        
    }
  
  
}
</script>
