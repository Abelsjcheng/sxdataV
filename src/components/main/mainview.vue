<template>
 <div class="main overview">
    <div class="m_left">
      <div class="m_left1">
        <tabledata />
      </div>
      <div class="m_left1">
        <tabledata />
      </div>
    </div>
    <div class="m_right">
      <charts1 />   
    </div>
   
    <div class="m_center2">   
      <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true" :mapStyle="mapStyle" >
      </baidu-map> 
    </div> 
  </div>
</template>

<script>
import mapStyle from '../../static/json/mapStyle.json';
import charts1 from './charts/charts1'
import tabledata from './charts/tabledata'
export default {
components: {charts1,tabledata
    },
name: "mianview",
  data () {
    return {
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
    }
  },
  
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
.m_left{
  width: 350px;
  min-height: 824px;
  
  position: absolute;
   
  left: 0;
}
div {
    display: block;
}
</style>
