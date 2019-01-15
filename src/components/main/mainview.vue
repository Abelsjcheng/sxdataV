<template>
 <div class="main overview">
    <div class="m_left1">
      echarts1
    </div>
    <div class="m_center2">   
      <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true" :mapStyle="mapStyle" >
      </baidu-map> 
    </div> 
  </div>
</template>

<script>
import mapStyle from '../../static/json/mapStyle.json';
export default {
name: "mianview",
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 15,
      mapStyle: {
        styleJson: mapStyle        
      }
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 113.000
      this.center.lat = 28.216
      this.zoom = 15
    }
  }
}
</script>

<style>
.bm-view {
  width: 100%;
  height: 824px;

}
.m_left1{
  position:absolute;
  width:250px;
  height:200px;
  padding:5px 10px;
  color:#fff;
  text-align:right;
  z-index:2;
  background: rgba(0,0,0,0.5);
  box-shadow: 0 0 5px #000;
}
.m_center2{
  z-index:1;
}
</style>
