<template>  
    <div class="iot_map">     
        <div class="m_center">
          <!-- 地区选择器-->
          <v-distpicker @selected="onSelected" :province="temp.address__province" :city="temp.address__city" :area="temp.address__dist" ></v-distpicker>
          <button class="clearall-btn" v-on:click="clear"> 清空</button>
        </div> 
        <baidu-map class="iot_mapview" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true"  :mapStyle="bmapStyle" >
           <!-- 加载标注-->
          <bml-marker-clusterer :averageCenter="true">
                <bm-marker v-for="(marker,index) of markers" :key="index"  :position="{lng: marker.lng, lat: marker.lat}" v-on:click="Opencontent(marker)">
                </bm-marker>
          </bml-marker-clusterer>     
           <!--地图类型控件-->
          <bm-map-type :map-types="['BMAP_NORMAL_MAP','BMAP_SATELLITE_MAP', 'BMAP_HYBRID_MAP']"  anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
          <!-- 信息窗体-->
          <bm-info-window :position="{lng: infowindow.lng, lat: infowindow.lat}" :show="infowindow.show" @close="infoWindowClose" @open="infoWindowOpen">
            <ul style="margin:0 0 5px 0;padding:0.2em 0"> 
                <li><span>终端IMEI: </span>{{infowindow.tid}} </li>
                <li><span>分组名称: </span>{{infowindow.aname}} </li>
                <li><span>所属用户: </span>{{infowindow.uname}} </li>
                <li><span>终端电话: </span>{{infowindow.phone}} </li>
                <li><span>安装地址: </span>{{infowindow.address}} </li>
                <li><span>最后访问时间: </span>{{infowindow.receivetime}} </li>
                <li><span>状态: </span>{{infowindow.isuse}} </li>
            </ul>
            
          </bm-info-window>>
          <bm-boundary name="长沙县" :strokeWeight="2" strokeColor="blue" fillColor=""  ></bm-boundary>
        </baidu-map>
        <div id="up-map-div"><tabledata /></div>
    </div> 
</template>

<script>
import VDistpicker from '@/components/main/Distpicker' //地区选择器组件
import { mapGetters } from 'vuex';
import mapStyle from '@/static/json/mapstyle.json';//地区json
import {BmlMarkerClusterer} from 'vue-baidu-map'
import mapvillage from '@/static/json/mapvillage';
import tabledata from '@/components/Iot/charts/tabledata' //table数据组 终端数据
export default {

components: { VDistpicker,BmlMarkerClusterer,tabledata },//注册组件
name: "mainmap",
  data () {//局内数据
    return {
      temp: {
        address__province: '',//县
        address__city: '',//镇/街道
        address__dist: '',//村/社区
      },
      center: {lng: 0, lat: 0},  //地区中心点
      zoom: 11,//缩放等级
      infowindow:{lng:'',lat:'',address:'',content:'',uname:'',grouptype:'',worktime:'', show:false},//标注弹窗数据 值班信息
      bmapStyle: {
        styleJson:mapStyle        //地图个性样式
      },
      markers:[],//标注json数组
    }
  },
   methods: {//方法函数
      handler ({BMap, map}) { //地图初始化函数
      this.center.lng = 113.1
      this.center.lat = 28.240956
      this.zoom = 11
    },
    onSelected(data) { //地区选择器函数
      this.temp.address__province = data.province.value,
      this.temp.address__city = data.city.value,
      this.temp.address__dist = data.area.value,
      this.$store.commit('SET_SELECTPLACE',this.temp.address__city);
      this.center.lng = this.temp.address__dist[1],
      this.center.lat = this.temp.address__dist[2],
      this.zoom = 17
    },
    
    clear:function(event){ //地区清除按钮
      this.temp.address__province=''
      this.temp.address__city = ''
      this.temp.address__dist = ''
      
    },
    get:function(){ //3000个终端点
            //发送get请求
            this.$http.get('api/gps/iotAll').then(function(res){
              
                          for (let i = 0; i < res.data.data.length; i++) {
                            const position = {
                                  lng: res.data.data[i].longitude, 
                                  lat: res.data.data[i].latitude,
                                  tid: res.data.data[i].tid,
                                  receivetime: res.data.data[i].receivetime,
                                  address: res.data.data[i].address,
                                  isuse: res.data.data[i].isuse,
                                  uname: res.data.data[i].uname,
                                  phone: res.data.data[i].phone,
                                  aname: res.data.data[i].aname
                                }
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
      this.infowindow={
                        lng: message.lng, 
                        lat: message.lat,
                        tid: message.tid,
                        receivetime: message.receivetime,
                        address: message.address,
                        isuse: message.isuse==true?"正常":"停止",
                        uname: message.uname,
                        phone: message.phone,
                        aname: message.aname,
                        show:true
            }
    },
    
    
    
   },
  computed: { //计算属性 取存在状态库中的值
     ...mapGetters(["themeName"]),
     ...mapGetters(["warnlocate"]),
     listenstage(){ //返回状态库中的值
       return this.themeName;
     },
     listenwarnlocate(){ 
       return this.warnlocate;
     }
     
  },
  watch:{
      listenstage:function(vag){//实时监听状态库中值的改变 
        this.bmapStyle={styleJson:vag}
      },
      listenwarnlocate:function(vag){//监听状态库 灾害预警地理定位
            this.zoom = 17;
            this.center.lng = vag.wlng;
            this.center.lat = vag.wlat;
        },
  },
   mounted:function(){//页面初始化函数
        this.get();
    }

}
</script>
<style lang="scss" >
.iot_mapview {
  width: 100%;
  height: 59.5vh;

}
.iot_map{
  position: relative;
  overflow: hidden;
  z-index:0;
  li{
    line-height: 26px;
    font-size: 15px;
    span{
      width: 120px;display: inline-block;
    }
  }
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

#up-map-div{
  width:260px;
  height:44%;
  // top:30%;
  left:3px;
  bottom:0%;
  position:absolute;
  z-index:9999;
  border:1px solid #016ae0;
  // background-color:#235;
  background:rgba(235,235,235,0);
  }
</style>
