<template>
  <div class="item basicInfo" style="width:100%;height:100%">
    <div class="itemTit">
      <span class="border-green">广播终端数</span>
    </div>
    <div class="itemCon itembg">
      <div class="infoPie">
        <ul class="clearfix">
          <li class="color-yellow">
            <span class="border-yellow" id="indicator1" total="2591">2591</span>
            <p>总终端总量</p>
          </li>
          <li class="color-green">
            <span class="border-green" id="indicator2" run="2500"> 2500</span>
            <p>终端设备运行数</p>
          </li>
          <li class="color-blue">
            <span class="border-blue" id="indicator3" stop="61"> 61</span>
            <p>终端设备停止数</p>
          </li>
          <li class="color-purple">
            <span class="border-purple" id="indicator4" maintain="30"> 30</span>
            <p>终端设备维护数</p>
          </li>
        </ul>
        <div id="indicatorContainer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "tabledata",
  data () {
    return {
      mdata:[],
      sumdata:{dev:'',run:'',stop:''},
      terdata:{aname:'null',run:'null',stop:'null'},

function(num) {
   document.getElementById("indicatorl").innerHTML =data[0]
   document.getElementById("indicator2").innerHTML =data[1]
   document.getElementById("indicator3").innerHTML =data[2]
   document.getElementById("indicator4").innerHTML =data[3]
},
       

    methods: {
    get:function(){ 
            //发送get请求 获取终端总数
            this.$http.get('http://110.53.162.165:5050/api/bcount/bindex').then(function(res){ 
                            this.data[0].value=res.data.data.dev
                            this.data[1].value=res.data.data.run
                            this.data[2].value=res.data.data.stop
                            this.data[3].value=res.data.data
                        },function(){
                    console.log('请求失败处理');
                });
            //发送get请求 获取某村终端数信息
            this.$http.get('http://110.53.162.165:5050/api/device/tersga').then(function(res){
                        for (let i = 0; i < res.data.data.length; i++) {
                          this.polar.serise[1].data[0].value=res.data.data[i].run
                           this.polar.serise[1].data[1].value=res.data.data[i].stop

                            // const tersdata={aname:res.data.data[i].aname,run:res.data.data[i].run,down:res.data.data[i].down}
                            // this.mdata.push(tersdata)
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
     /* listenselectplace:function(vag){//实时监听状态库中值的改变 
        for (let i = 0; i < this.mdata.length; i++) {
            if(vag==this.mdata[i].aname)
            {
              this.terdata={aname:this.mdata[i].aname,run:this.mdata[i].run,down:this.mdata[i].down}
            }
          }
      }*/
  },
   mounted:function(){//页面初始化函数
        this.get();
        
    }
    }
  
}
  
}
</script>


<style lang="scss" scoped>

  .item{
    margin-bottom:24px;
    background-color:rgba(0,0,0,0.3);
    border-radius:8px;
    font-size:14px;
    line-height:1.5;
    height:100%;
    font-family:Arial,'Microsoft Yahei';
  }
  .itemTit{
    padding:12px 30px;
    border-bottom:1px solid #1e5b6b;
  }
  .itemTit span{
    display:block;
    height:30px;
    line-height:20px;
    border-left:5px solid transparent;
    font-size:15px;
    color:#fff;
    padding-left:8px;
    text-align:left;
  }

  .itembg{
    background-image:url(https://jsdaima.hu-cheng.net/2019/06/1289/images/gz.png);
    background-repeat:repeat;
    height:75%;
  }
  .itemCon{
    padding:0px 10px;
  }
  ul{
    border:medium none;
    margin:0;
    padding:0;
    font-size:100%;
    display:block;
    -webkit-margin-before:0em;
    -webkit-margin-after:0em;
    -webkit-margin-start:0px;
    -webkit-margin-end:0px;
    -webkit-padding-start:0px;
    width:100%;
  }
  // Pseudo::before element
  // .clearfix:before{
  //   display:table;
  //   line-height:0;
  //   content:"";
  // }
  // Pseudo:after element
  // .clear.fix:after{
  //   clear:both;
  // }
  // .clearfix:after{
  //   display:table;
  //   line-height:0;
  //   content:"";
  // }
  .infoPie ul li{
    float:left;
    width:25%;
  }
  .color-yellow{
      color:#ffd220 !important;
  }
  .color-green {
      color: #32ffc7 !important;
  }
  .color-blue {
      color: #1eb6fe !important;
  }
  .color-purple {
      color: #7B68EE !important;
  }
  .li{
    border:medium none;
    margin:0;
    padding:0;
    font-size:100%;
    display:list-item;
    text-align: -webkit-match-parent;
  }
  .infoPie ul li span {
    display: block;
    list-style:none;
    width: 90px;
    height: 90px;
    margin: auto;
    margin-top:50%;
    border: 1px solid transparent;
    text-align: center;
    line-height: 90px;
    font-size: 29px;
    border-radius: 100%;
  }
  
  .border-green{
    border-color:#32ffc7 !important;
  }
  .border-yellow {
      border-color: #ffd220 !important;
  }
  .border-blue {
      border-color: #1eb6fe !important;
  }
  .border-purple {
      border-color: #7B68EE !important;
  }

  .infoPie ul li p {
    text-align: center;
    font-size: 13px;
    padding-bottom: 8px;
  }
   p {
      border: medium none;
      margin: 0;
      padding: 0;
      display: block;
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
  }
</style>