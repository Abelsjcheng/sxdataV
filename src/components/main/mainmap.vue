<template>  
    <div class="m_center2">     
        <div class="m_center">
         <v-distpicker @selected="onSelected" :province="temp.address__province" :city="temp.address__city" :area="temp.address__dist"></v-distpicker>
            <button class="clearall-btn" v-on:click="clear"> 清空</button>
        </div> 
        <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true" :mapStyle="mapStyle" >
          <bml-marker-clusterer :averageCenter="true">
              <bm-marker v-for="(marker,index) of markers" :key="index" :position="{lng: marker.lng, lat: marker.lat}"></bm-marker>
          </bml-marker-clusterer>

        </baidu-map>
    </div> 
</template>

<script>
import VDistpicker from './Distpicker' //地区选择器组件
import mapStyle from '../../static/json/mapStyle.json';//地区json
import {BmlMarkerClusterer} from 'vue-baidu-map'
export default {

components: { VDistpicker,BmlMarkerClusterer },//注册组件
name: "mainmap",
  data () {//局内数据
    return {
      temp: {
        address__province: '',
        address__city: '',
        address__dist: '',
      },
      center: {lng: 0, lat: 0},
      zoom: 12,
      mapStyle: {
        styleJson: mapStyle        
      },
      markers:[],
    }
  },
   methods: {//方法函数
      handler ({BMap, map}) { //地图初始化函数
      console.log(BMap, map)
      this.center.lng = 113.000
      this.center.lat = 28.216
      this.zoom = 12
    },
    onSelected(data) { //地区选择器函数
      this.temp.address__province = data.province.value,
      this.temp.address__city = data.city.value,
      this.temp.address__dist = data.area.value,
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
            this.$http.get('http://www.teavamc.com/api/gps').then(function(res){
                          for (let i = 0; i < res.data.length; i++) {
                            const position = {lng: res.data[i].longitude, lat: res.data[i].latitude}
                            this.markers.push(position)
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
