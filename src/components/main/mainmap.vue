<template>  
    <div class="m_center2">     
        <div class="m_center">
         <v-distpicker @selected="onSelected" :province="temp.address__province" :city="temp.address__city" :area="temp.address__dist"></v-distpicker>
            <button class="clearall-btn" v-on:click="clear"> 清空</button>
        </div> 
        <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true" :mapStyle="mapStyle"@moving="syncCenterAndZoom"@moveend="syncCenterAndZoom" >
        </baidu-map>
    </div> 
</template>

<script>
import VDistpicker from './Distpicker'
import mapStyle from '../../static/json/mapStyle.json';

export default {

components: { VDistpicker },
name: "mainmap",
  data () {
    return {
      temp: {
        address__province: '',
        address__city: '',
        address__dist: '',
      },
      center: {lng: 0, lat: 0},
      zoom: 15,
      mapStyle: {
        styleJson: mapStyle        
      },
    }
  },
   methods: {
      handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 113.000
      this.center.lat = 28.216
      this.zoom = 15
    },
    onSelected(data) {
      this.temp.address__province = data.province.value,
      this.temp.address__city = data.city.value,
      this.temp.address__dist = data.area.value,
      this.center.lng = this.temp.address__dist[1],
      this.center.lat = this.temp.address__dist[2]
      
    },
    syncCenterAndZoom (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
      this.zoom = 16
    },
    clear:function(event){
      this.temp.address__province=''
      this.temp.address__city = ''
      this.temp.address__dist = ''
    }
   }
     
  
  
}
</script>
<style>
.bm-view {
  width: 100%;
  height: 824px;

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
