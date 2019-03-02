<template>
<div>
    <flat-surface-shader class="shader" type="webgl" :light="{ambient: '#22bc9e', diffuse: '#2b7c6b'}">
    </flat-surface-shader>
    <div class="mask">
      <div class="centermain">
        
          <div class="top1">
          时间
          </div>
        
        
        <div class="top2">
          天气
        </div>
        
        
        <div class="top3">
          <router-link to="/index">  <!-- 路由跳转 -->
          <span style="color:white">广播信息展示</span>
          </router-link>
        </div>
        
        
        <div class="top4">
           <router-link to="/index/village"> 
            <span style="color:white">村务信息展示</span>
          </router-link>
        </div>
        
        <a href="http://www.teavamc.com/" >
        <div class="top5">
          融媒体后台管理平台
        </div>
        </a>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'loginview',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.shader {
      width: 100vw;
      height: 100vh;
  }
.centermain{
    text-align: center;
    margin: auto;
    overflow: hidden;
    position: relative;
    line-height:220px;
    height: 480px;
    width: 720px;
    top:0
}
.mask {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;

      }
.top1{
      position: absolute;
      top: 0px;
      left: 0px;
      width: 225px;
      height: 225px;
      margin: 0 7.5px 15px 7.5px;
      background-color: rgba(86, 97, 202, 0.6);
      color: rgba(255, 255, 255,0.9)
}
.top1:hover{ width:223px;height:223px;border:2px solid rgba(255, 255, 255,0.9);
}
.top2{
      position: absolute;
      top: 0px;
      left: 240px;
      width: 465px;
      height: 225px;
      margin: 0 7.5px 15px 7.5px;
      background-color: rgba(86, 97, 202, 0.6);
      color: rgba(255, 255, 255,0.9)
}
.top2:hover{ width:463px;height:223px;border:2px solid rgba(255, 255, 255,0.9);
}
.top3{
      position: absolute;
      top: 240px;
      left: 0px;
      width: 225px;
      height: 225px;
      margin: 0 7.5px 15px 7.5px;
      background-color: rgba(86, 97, 202, 0.6);
      color: rgba(255, 255, 255,0.9)
      
}
.top3:hover{ width:223px;height:223px;border:2px solid rgba(255, 255, 255,0.9);
}
.top4{
      position: absolute;
      top: 240px;
      left: 240px;
      width: 225px;
      height: 225px;
      margin: 0 7.5px 15px 7.5px;
      background-color: rgba(86, 97, 202, 0.6);
      color: rgba(255, 255, 255,0.9)
}
.top4:hover{ width:223px;height:223px;border:2px solid rgba(255, 255, 255,0.9);
}
.top5{
      position: absolute;
      top: 240px;
      left: 480px;
      width: 225px;
      height: 225px;
      margin: 0 7.5px 15px 7.5px;
      background-color: rgba(86, 97, 202, 0.6);
      color: rgba(255, 255, 255,0.9)
}
.top5:hover{ width:223px;height:223px;border:2px solid rgba(255, 255, 255,0.9);
}

</style>
