<template>  
    <div class="m_center2">     
        <div class="m_center">
          <!-- 地区选择器-->
          <v-distpicker @selected="onSelected" :province="temp.address__province" :city="temp.address__city" :area="temp.address__dist" ></v-distpicker>
          <button class="clearall-btn" v-on:click="clear"> 清空</button>
          <button class="clearall-btn" type="primary"  v-on:click="addallspot"> 加载所有终端</button>
        </div> 
        <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true" :mapStyle="bmapStyle" >
           <!-- 加载标注-->
          <bml-marker-clusterer :averageCenter="true">
                <bm-marker v-for="(marker,index) of markers" :key="index"  :icon="markerIcon(marker.type)" :position="{lng: marker.lng, lat: marker.lat}" v-on:click="Opencontent(marker)">
                </bm-marker>
          </bml-marker-clusterer>     
           <!--地图类型控件-->
          <bm-map-type :map-types="['BMAP_NORMAL_MAP','BMAP_SATELLITE_MAP', 'BMAP_HYBRID_MAP']" :offset="{width:450,height:8}" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
          <!-- 信息窗体-->
          <bm-info-window :position="{lng: infowindow.lng, lat: infowindow.lat}" :show="infowindow.show" @close="infoWindowClose" @open="infoWindowOpen">终端号:{{infowindow.tid}} <br>终端状态:{{infowindow.type}}<br>故障原因:{{infowindow.content}}<br>维修时间{{infowindow.ctime}}  </bm-info-window>>
          <bm-boundary name="长沙县" :strokeWeight="2" strokeColor="blue" fillColor=""  ></bm-boundary>
        </baidu-map>
    </div> 
</template>

<script>
import VDistpicker from '../../components/main/Distpicker' //地区选择器组件
import { mapGetters } from 'vuex';
import mapStyle from '../../static/json/mapstyle.json';//地区json
import {BmlMarkerClusterer} from 'vue-baidu-map'
export default {

components: { VDistpicker,BmlMarkerClusterer },//注册组件
name: "mainmap",
  data () {//局内数据
    return {
      temp: {
        address__province: '',//县
        address__city: '',//镇/街道
        address__dist: '',//村/社区
      },
      center: {lng: 0, lat: 0},  //地区中心点
      zoom: 12,//缩放等级
      infowindow:{lng:'',lat:'',tid:'',content:'',ctime:'',show:false},//标注弹窗数据
      bmapStyle: {
        styleJson:mapStyle        //地图个性样式
      },
      markers:[],//标注json数组
    }
  },
   methods: {//方法函数
      handler ({BMap, map}) { //地图初始化函数
      this.center.lng = 113.195699
      this.center.lat = 28.240956
      this.zoom = 13
    },
    onSelected(data) { //地区选择器函数
      this.temp.address__province = data.province.value,
      this.temp.address__city = data.city.value,
      this.temp.address__dist = data.area.value,

      this.$store.commit('SET_SELECTPLACE',this.temp.address__dist[0]);
      this.center.lng = this.temp.address__dist[1],
      this.center.lat = this.temp.address__dist[2],
      this.zoom = 16
    },
    
    clear:function(event){ //地区清除按钮
      this.temp.address__province=''
      this.temp.address__city = ''
      this.temp.address__dist = ''
      
    },
    addallspot:function(){
      const loading=this.$loading({
        lock:true,
        text:'努力加载所有终端...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      if(this.get()==true){
          setTimeout(() => {
          loading.close();
        }, 5000);
      }
     
    },
    get:function(){ //3000个终端点
            //发送get请求
            this.$http.get('http://www.teavamc.com/api/gps/all').then(function(res){
                          
                          for (let i = 0; i < res.data.data.length; i++) {
                            const position = {lng: res.data.data[i].longitude, lat: res.data.data[i].latitude}
                            this.markers.push(position)
                          }
                        },function(){
                    console.log('请求失败处理');
                });
            return true;
    },
    getrspot:function(){ //随机100个终端点
            //发送get请求
            this.$http.get('http://www.teavamc.com/api/gps/random').then(function(res){
                          
                          for (let i = 0; i < res.data.data.length; i++) {
                            const position = {lng: res.data.data[i].longitude, lat: res.data.data[i].latitude}
                            this.markers.push(position)
                          }
                        },function(){
                    console.log('请求失败处理');
                });
    },
    infoWindowClose:function () { //关闭点信息窗口
      this.infowindow.show = false
    },
    infoWindowOpen:function () { //打开点信息窗口
      this.infowindow.show = true
    },
    Opencontent:function (message) {//打开点信息窗口传值
      this.infowindow={lng:message.lng,lat:message.lat,tid:message.tid,type:message.type,content:message.content,ctime:message.ctime,show:true}
    },
    // isActive:function(judge){ //v-bind绑定属性用函数进行判断 标注是否执行跳动动画 :animation="isActive(marker.type)"
    //     if(judge=="bad") //judage==warning/danger
    //     return 'BMAP_ANIMATION_BOUNCE';
    // },
    markerIcon:function(type){ //v-bind绑定属性用函数进行判断 标注是否更换颜色
        if(type=="停止") //judage==warning/danger
        {
          const icon={url:"http://api.map.baidu.com/img/markers.png", size: {width: 23, height: 25},opts:{imageOffset:{width:0,height:-250}}};
          return icon;
        }
    },
    listenzdinfo(){
        for (let i = 0; i < this.zdinfo.length; i++) {  //加载故障终端标注
          const position = {lng: this.zdinfo[i].lo, lat: this.zdinfo[i].la,type:this.zdinfo[i].type,tid:this.zdinfo[i].tid,content:this.zdinfo[i].content,ctime:this.zdinfo[i].ctime}
          this.markers.push(position)
        }
     }
    
   },
  computed: { //计算属性 取存在状态库中的值
     ...mapGetters(["themeName"]),
     ...mapGetters(["zdinfo"]),
     ...mapGetters(["zdinfocontent"]),
     listenstage(){ //返回状态库中的值
       return this.themeName;
     },
     listenzdinfocontent(){
       return this.zdinfocontent;
     }
     
  },
  watch:{
      listenstage:function(vag){//实时监听状态库中值的改变 
        this.bmapStyle={styleJson:vag}
      },
      listenzdinfocontent:function(message){
        this.infowindow={lng:message.lo,lat:message.la,tid:message.tid,type:message.type,content:message.content,ctime:message.ctime,show:true}
        this.center.lng = message.lo
        this.center.lat = message.la
        this.zoom = 15
      }
  },
   mounted:function(){//页面初始化函数
        this.getrspot();
        this.listenzdinfo();
    }

}
</script>
<style lang="scss">
.bm-view {
  width: 100%;
  height: 92vh;

}
.m_center2{
  position: relative;
  overflow: hidden;
  z-index:0;
}

.clearall-btn{
    font-size: 12px;
    height: 24px;
    border: #1968ab solid 1px;
    border-radius: 15px;
    padding: 1px 15px;
    color: #ffffff;
    background: #1968ab;
    margin: 0;
    text-align: center;
    
}
.anchorBL{
display:none;
}

</style>
