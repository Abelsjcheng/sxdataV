<template>
<div>
    <flat-surface-shader class="shader" type="webgl" :light="{ambient: '#22bc9e', diffuse: '#2b7c6b'}">
    </flat-surface-shader>
    
    <div class="mask">
      <div class="centermain">
      
        <div class="top1" >
          <span style="font-size:25px;position:absolute;left:21%;top:30%">{{ndata.year}}</span>
          <span style="font-size:25px;position:absolute;left:32%;top:55%">{{ndata.week}}</span>
        </div>
        <div class="top2" v-bind:class="{ weatherbackgroundsun: sunActive, weatherbackgroundcloud: cloudActive }" >
          <a class="op_weather_day" style="width:115px">
             <p class="op_weather_date1">{{weather.f1.day}} 周{{weather.f1.weekday}}</p>
            <div class="op_weather_pic1" :style="weather_pic1"></div>
            <div class="op_weather_shishi_info">
                <span class="op_weather_shishi_title">{{weather.now.temperature}}</span>
                <span class="op_weather_shishi_data">
                    <i class="op_weather_shishi_sup">℃</i>
                    <i class="op_weather_shishi_sub">{{weather.now.weather}}(实时)</i>
                </span>
            </div>
            <p class="op_weather_temp" style="margin-top: 1px;">{{weather.f1.night_air_temperature}} ~ {{weather.f1.day_air_temperature}}℃</p>
            <p class="op_weather_weath">{{weather.f1.day_weather}} </p>
            <p class="op_weather_wind">{{weather.f1.night_wind_direction}} </p>
            <span class="op_weather_text"> </span>
          </a>
          <a class="op_weather_day" style="left:115px" @mouseenter="enter(weather.f2.day_weather)" @mouseleave="leave()">
            <div class="op_weather_split"></div>
            <p class="op_weather_date">周{{weather.f2.weekday}}</p>
            <p class="op_weather_date_day"> {{weather.f2.day}}</p>
            <div class="op_weather_pic" :style="weather_pic2"></div>
            <p class="op_weather_temp">{{weather.f2.night_air_temperature}} ~ {{weather.f2.day_air_temperature}}℃</p>
            <p class="op_weather_weath">{{weather.f2.day_weather}} </p>
            <p class="op_weather_wind">{{weather.f2.night_wind_direction}} </p>
            <span class="op_weather_text"> </span>
          </a>
          <a class="op_weather_day" style="left:204px" @mouseenter="enter(weather.f3.day_weather)" @mouseleave="leave()">
            <div class="op_weather_split"></div>
             <p class="op_weather_date">周{{weather.f3.weekday}}</p>
            <p class="op_weather_date_day"> {{weather.f3.day}}</p>
            <div class="op_weather_pic" :style="weather_pic3"></div>
            <p class="op_weather_temp">{{weather.f3.night_air_temperature}} ~ {{weather.f3.day_air_temperature}}℃</p>
            <p class="op_weather_weath">{{weather.f3.day_weather}} </p>
            <p class="op_weather_wind">{{weather.f3.night_wind_direction}} </p>
            <span class="op_weather_text"> </span>
          </a>
          <a class="op_weather_day" style="left:293px" @mouseenter="enter(weather.f4.day_weather)" @mouseleave="leave()" >
            <div class="op_weather_split"></div>
             <p class="op_weather_date">周{{weather.f4.weekday}}</p>
            <p class="op_weather_date_day"> {{weather.f4.day}}</p>
            <div class="op_weather_pic" :style="weather_pic4"></div>
            <p class="op_weather_temp">{{weather.f4.night_air_temperature}} ~ {{weather.f4.day_air_temperature}}℃</p>
            <p class="op_weather_weath">{{weather.f4.day_weather}} </p>
            <p class="op_weather_wind">{{weather.f4.night_wind_direction}} </p>
            <span class="op_weather_text"> </span>
          </a>
          <a class="op_weather_day" style="left:382px" @mouseenter="enter(weather.f5.day_weather)" @mouseleave="leave()">
            <div class="op_weather_split"></div>
             <p class="op_weather_date">周{{weather.f5.weekday}}</p>
            <p class="op_weather_date_day"> {{weather.f5.day}}</p>
            <div class="op_weather_pic" :style="weather_pic5"></div>
            <p class="op_weather_temp">{{weather.f5.night_air_temperature}} ~ {{weather.f5.day_air_temperature}}℃</p>
            <p class="op_weather_weath">{{weather.f5.day_weather}} </p>
            <p class="op_weather_wind">{{weather.f5.night_wind_direction}} </p>
            <span class="op_weather_text"> </span>
          </a>
        </div>
        <router-link class="top3"    to="/index/mainview" > 
        
          <img class="loginimg" src="../../static/img/广播.png"/>
          <span class="loginspan">应急广播信息展示</span>
        
        </router-link>
        <router-link class="top4"  to="/index/village"> 
       
          <img class="loginimg" src="../../static/img/村务公开.png"/>
            <span class="loginspan">村务信息展示</span>
        </router-link>
        <a href="http://www.teavamc.com/"  >
         
        <div class="top5" >
          <img class="loginimg" src="../../static/img/后台管理.png"/>
          <span class="loginspan" >融媒体后台管理平台</span>
        </div>
        </a>
        
       
      </div>
     
    </div>

  </div>
</template>

<script>


let moment = require("moment");//直接引入组件

export default {
  name: 'loginview',
  data () {
    return {
     ndata:{year:'',day:'',week:''},
      weather:{},
      weather_pic1:{background:'','background-size':'60px 60px'},
      weather_pic2:{background:'','background-size':'60px 60px'},
      weather_pic3:{background:'','background-size':'60px 60px'},
      weather_pic4:{background:'','background-size':'60px 60px'},
      weather_pic5:{background:'','background-size':'60px 60px'},
      sunActive:false,
      cloudActive:false
    };
  },
  methods:{
      get:function(){ //3000个终端点
              //发送get请求
             
                 
                  this.$http.get('https://saweather.market.alicloudapi.com/area-to-weather?area=%E9%95%BF%E6%B2%99&areaid=101250101&need3HourForcast=0&needAlarm=0&needHourData=0&needIndex=0&needMoreDay=1',{headers: {"Authorization":"APPCODE a153a70c9d6c45248b42b87f8c37ab74"}})
                    .then(function (res) {
                      console.log(res.data.showapi_res_body.now.weather);
                      this.weather=res.data.showapi_res_body;
                      this.weather_pic1.background='url('+this.weather.f1.day_weather_pic+') no-repeat';
                      this.weather_pic2.background='url('+this.weather.f2.day_weather_pic+') no-repeat';
                      this.weather_pic3.background='url('+this.weather.f3.day_weather_pic+') no-repeat';
                      this.weather_pic4.background='url('+this.weather.f4.day_weather_pic+') no-repeat';
                      this.weather_pic5.background='url('+this.weather.f5.day_weather_pic+') no-repeat';
                      
                      if(/小雨|阴|阵雨|雷阵雨|雷阵雨伴有冰雹|雨夹雪|中雨|大雨|暴雨|大暴雨|特大暴雨/.test(this.weather.f1.day_weather))
                      {
                        //this.weatherbackground={'background-image':'-webkit-linear-gradient(top, rgb(72, 86, 99), rgb(161, 184, 202))','background-image': '-moz-linear-gradient(top,#485663,#a1b8ca)','background-image':' -o-linear-gradient(top,#485663,#a1b8ca)','background-image':'--ms-linear-gradient(top, rgb(72, 86, 99), rgb(161, 184, 202))',filter:' progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr=#485663,EndColorStr=#a1b8ca)'}//兼容各浏览器
                        this.cloudActive=true;
                      }else if(/晴|多云/.test(this.weather.f1.day_weather)){
                        //this.weatherbackground={'background-image':'-webkit-linear-gradient(top, rgb(13, 104, 188), rgb(114, 173, 224))','background-image':' -moz-linear-gradient(top,#0d68bc,#72ade0)','background-image': '-o-linear-gradient(top,#0d68bc,#72ade0)','background-image':'--ms-linear-gradient(top, rgb(13, 104, 188), rgb(114, 173, 224))',filter: 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr=#0d68bc,EndColorStr=#72ade0)'}
                        this.sunActive=true;
                      }
                      console.log(this.weather_pic1);
                      
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
             
      },
      getTime(){
        let week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']//把一周七天用数组的形式方便获取时间索引
        this.ndata.year = moment().format(" YYYY-MM-DD")    //这里是库中已经声明好了的时间格式，具体的可以去官方文档查看
        this.ndata.day = moment().format("HH:mm:ss")
        this.ndata.week = week[moment().format("d")]        //因为需求要展示的是中文的星期几，所以这里对week进行了处理，加了个索引
      },
      LopTime(){
        setInterval(this.getTime,1000)   //对获取的时间，用定时器让它动起来，定时器中调用getTime方法，注意不能加（），调用函数
      },
      enter:function(weather){ //鼠标移入<a标签触发事件
          if(/小雨|阴|阵雨|雷阵雨|雷阵雨伴有冰雹|雨夹雪|中雨|大雨|暴雨|大暴雨|特大暴雨/.test(weather))  //正则判断
          {
              //this.weatherbackground={'background-image':'-webkit-linear-gradient(top, rgb(72, 86, 99), rgb(161, 184, 202))','background-image': '-moz-linear-gradient(top,#485663,#a1b8ca)','background-image':' -o-linear-gradient(top,#485663,#a1b8ca)','background-image':'--ms-linear-gradient(top, rgb(72, 86, 99), rgb(161, 184, 202))',filter:' progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr=#485663,EndColorStr=#a1b8ca)'}
              this.cloudActive=true;
              this.sunActive=false;
              }else if(/晴|多云/.test(weather)){
                //this.weatherbackground={'background-image':'-webkit-linear-gradient(top, rgb(13, 104, 188), rgb(114, 173, 224))','background-image':' -moz-linear-gradient(top,#0d68bc,#72ade0)','background-image': '-o-linear-gradient(top,#0d68bc,#72ade0)','background-image':'--ms-linear-gradient(top, rgb(13, 104, 188), rgb(114, 173, 224))',filter: 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr=#0d68bc,EndColorStr=#72ade0)'}
                this.sunActive=true;
                this.cloudActive=false;
          }
      },
      leave:function(){ //鼠标移出<a标签触发事件
        if(/小雨|阴|阵雨|雷阵雨|雷阵雨伴有冰雹|雨夹雪|中雨|大雨|暴雨|大暴雨|特大暴雨/.test(this.weather.f1.day_weather))
        {
            //this.weatherbackground={'background-image':'-webkit-linear-gradient(top, rgb(72, 86, 99), rgb(161, 184, 202))','background-image': '-moz-linear-gradient(top,#485663,#a1b8ca)','background-image':' -o-linear-gradient(top,#485663,#a1b8ca)','background-image':'--ms-linear-gradient(top, rgb(72, 86, 99), rgb(161, 184, 202))',filter:' progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr=#485663,EndColorStr=#a1b8ca)'}
            this.cloudActive=true;
            this.sunActive=false;
            }else if(/晴|多云/.test(this.weather.f1.day_weather)){
                //this.weatherbackground={'background-image':'-webkit-linear-gradient(top, rgb(13, 104, 188), rgb(114, 173, 224))','background-image':' -moz-linear-gradient(top,#0d68bc,#72ade0)','background-image': '-o-linear-gradient(top,#0d68bc,#72ade0)','background-image':'--ms-linear-gradient(top, rgb(13, 104, 188), rgb(114, 173, 224))',filter: 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr=#0d68bc,EndColorStr=#72ade0)'}
                this.sunActive=true;
                this.cloudActive=false;
            }
      }
  },
  mounted:function(){//页面初始化函数
        this.get();
        this.LopTime();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.shader {
      width: 100vw;
      height: 100vh;
  }
.centermain{
    
    margin: auto ;
    overflow: hidden;
    position: relative;
    height: 490px;
    width: 740px;
    transform: translateY(50%);
}
.mask {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        justify-content: center;//元素水平居中
        flex-direction: column;
        
      }
.top1{
      position: absolute;
      top: 5px;
      left: 0px;
      width: 225px;
      height: 225px;
      margin: 0 7.5px 15px 7.5px;//上，右，下，左边距
      background-color: rgba(62, 126, 191, 1);
      color: rgba(255, 255, 255,0.9);
      
      z-index:2;
}

.top2{
      position: absolute;
      top: 5px;
      left: 240px;
      width: 465px;
      height: 225px;
      z-index:2;
      margin: 0 7.5px 15px 7.5px;
	    box-shadow: 0 2px 2px rgba(0,0,0,.1);
      color: rgba(255, 255, 255,0.9)
      
}

.top3{
      position: absolute;
      top: 240px;
      left: 0px;
      width: 225px;
      height: 225px;
      z-index:2;
      margin: 0 7.5px 15px 7.5px;
      background-color: rgba(62, 126, 191, 1);
      color: rgba(255, 255, 255,0.9)
      
}
.top3:hover{ width:227px;height:227px;border:2px solid rgba(255, 255, 255,0.9);
}
.top4{
      position: absolute;
      top: 240px;
      left: 240px;
      width: 225px;
      height: 225px;
      z-index:2;
      margin: 0 7.5px 15px 7.5px;
      background-color: rgba(62, 126, 191, 1);
      color: rgba(255, 255, 255,0.9)
}
.top4:hover{ width:227px;height:227px;border:2px solid rgba(255, 255, 255,0.9);
}
.top5{
      position: absolute;
      top: 240px;
      left: 480px;
      width: 225px;
      height: 225px;
      z-index:2;
      margin: 0 7.5px 15px 7.5px;
     // background: url(../../static/img/wall8.jpg) no-repeat;
     // background-size: 225px 225px;
      background-color: rgba(62, 126, 191, 1);
      color: rgba(255, 255, 255,0.9)
}
.top5:hover{ width:227px;height:227px;border:2px solid rgba(255, 255, 255,0.9);
}
.op_weather_split{
    position: absolute;
    left: 0px;
    top: 15px;
    width: 1px;
    height: 200px;
    background-color: rgba(255, 255, 255,0.15);
    filter: alpha(opacity=15);
    
}
.op_weather_day{
    position: absolute;
    width: 89px;
    height: 225px;
    text-decoration: none;
    color: #fff;
    border: none;

}

.op_weather_day:hover{background-color: rgba(255, 255, 255,0.1);
}
.op_weather_date{
    text-align: center;
    margin-top: 35px;
    font-size: 12px;
    text-shadow: 1px 1px 1px #555;
    line-height: 1em;
    margin-bottom: 0;
}
.op_weather_date1{
    text-align: left;
    margin: 8px 0 0 8px;
    width: 300px;
    font-size: 12px;
    text-shadow: 1px 1px 1px #555;
    line-height: 1em;
    margin-bottom: 0;
}
.op_weather_date_day{
    text-align: center;
    margin-top: 8px;
    opacity: 0.5;
    font-size: 12px;
    margin-bottom: 0;
    
}
.op_weather_pic{
  width: 60px;
  height: 55px;
  margin: 10px 0 0 15px;
 
}
.op_weather_pic1{
  width: 60px;
  height: 55px;
  margin: 10px 0 0 25px;
}
.op_weather_temp{
      margin-top: 12px;
      text-align: center;
      font-size: 12px;
      text-shadow: 1px 1px 1px #555;
      line-height: 1em;
      margin-bottom: 0;
}
.op_weather_weath{
      font-size: 13px;
      text-align: center;
      line-height: 1em;
      text-shadow: 1px 1px 1px #555;
      margin-top: 12px;
      margin-bottom: 0;
}
.op_weather_wind{
  text-align: center;
    font-size: 12px;
    text-shadow: 1px 1px 1px #555;
    line-height: 1em;
    margin-top: 11px;
    margin-bottom: 0;
}
.op_weather_text{
  text-align: center;
  margin-top: 12px;
  font-size: 12px;
}
.op_weather_shishi_info{
      position: relative;
      text-align: center;
}
.op_weather_shishi_title {
    font-size: 40px;
    line-height: 64px;
    display: inline-block;
    font-family: Arial;
    text-shadow: 1px 1px 1px #555;
}
.op_weather_shishi_data{
  position: relative;
    display: inline-block;
    font-size: 12px;
}
.op_weather_shishi_sup{
  display: block;
    text-align: left;
    font-style: normal;
    text-shadow: 1px 1px 1px #555;
}
.op_weather_shishi_sub{
  display: block;
    text-align: left;
    font-style: normal;
    text-shadow: 1px 1px 1px #555;
}
.weatherbackgroundsun{
       //css渐变各浏览器兼容方法
  background-image:-moz-linear-gradient(top,#0d68bc,#72ade0);
  background-image:-o-linear-gradient(top,#0d68bc,#72ade0);
  background-image:-ms-linear-gradient(top, rgb(13, 104, 188), rgb(114, 173, 224));
  filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr=#0d68bc,EndColorStr=#72ade0);
  background-image:-webkit-linear-gradient(top, rgb(13, 104, 188), rgb(114, 173, 224));
}
.weatherbackgroundcloud{
  
  background-image:-moz-linear-gradient(top,#485663,#a1b8ca);
  background-image:-o-linear-gradient(top,#485663,#a1b8ca);
  background-image:-ms-linear-gradient(top, rgb(72, 86, 99), rgb(161, 184, 202));
  filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr=#485663,EndColorStr=#a1b8ca);
  background-image:-webkit-linear-gradient(top, rgb(72, 86, 99), rgb(161, 184, 202));
}
.loginimg{
  width: 25%;height: 25%;margin:38% 38%;
}
.loginspan {
  color:white;position:absolute;left:5px;bottom:10px;
}
.mask /deep/ .drag-item {
    
    background: rgba(0, 0, 0, 0);
  }

</style>
