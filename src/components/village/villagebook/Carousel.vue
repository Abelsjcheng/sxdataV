<template>
  
  <div class="block">
    
    <el-carousel trigger="click" height="250px">
      <el-carousel-item v-for="item in imaglist" :key="item">
        <img :src="item.src"  height="250px" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data () {
    return {
        imaglist:[
            {id:1,src:require("../../../static/img/affair1.jpg")},
            {id:2,src:require("../../../static/img/affair2.jpg")},
            {id:3,src:require("../../../static/img/affair3.jpg")},
        ]
    };
  },
}
</script>

<style>
.block{
    margin-top: 100px;
    margin-left: 20px;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>