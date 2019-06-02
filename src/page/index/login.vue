<template>
    <div style="height:100vh">
        <canvas id="space"></canvas>
        
        <div class="drag_div" id="drag_div">
           
            <div class="one" v-if="broaddisplay==0">
                <router-link class="one" style="height: 150px;width: 200px;" to="/index/mainview"  >
                </router-link>
                <div class="text_center">应急广播信息展示 </div>
            </div>
            
            <div class="two" v-if="villagedisplay==0">
                <router-link class="welcome" to="/index/village"> 
                    <span>欢迎进入</span>
                 </router-link>
                <div class="text_center">村务信息展示</div>
            </div>
           
           <div class="twodisplay" v-if="villagedisplay==1">
                <div class="welcomedisplay" > 
                    <span>欢迎进入</span>
                 </div>
            </div>

            <div class="three" v-if="iotdisplay==0">
                <router-link class="three" to="/index/Iotview" style="height: 150px;width: 200px;" >
                </router-link>
                <div class="text_center">物联网信息展示</div>
            </div>

            
            
        </div> 
        <!-- 
        <div style="height: 100vh;">
            
           <div class="all" >
           
                <div class="left">
                <router-link class="left" to="/index/mainview"  >
                </router-link>
                <div class="text">应急广播信息展示</div>
                </div>
                
                <div class="center">
                <router-link class="explainer" to="/index/village"> 
                    <span>欢迎进入</span>
                 </router-link>
                <div class="text">村务信息展示</div>
               
                </div>
                
                <div class="right">
                 <router-link class="right" to="/index/Iotview"  >
                </router-link>
                <div class="text">物联网信息展示</div>
                </div>
            
            </div>
          
        </div>  -->
    </div>
</template>

<script>
import weather from '../../components/main/weather'
import {tuozhuai} from '../../static/js/tuozhuai.js'
export default {
    name: 'login',
    components: {weather},
    data(){
        return{
            broaddisplay:0,
            villagedisplay:0,
            iotdisplay:0
        }
    },
    methods:{
        logindisplay:function(){
            this.$http.get('http://localhost/api/forePage_col/pagestatus').then(function(res){
                          this.broaddisplay=res.data.data[0].status;
                          this.villagedisplay=res.data.data[1].status;
                          this.iotdisplay=res.data.data[2].status;

                        },function(){
                    console.log('请求失败处理');
                });
        }
    },
    
    watch:{
        
    },
    mounted(){
        window.requestAnimFrame = (function(){   return  window.requestAnimationFrame})();
        var canvas = document.getElementById("space");
        var c = canvas.getContext("2d");

        var numStars = 1900;
        var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
        var focalLength = canvas.width *2;
        
        var centerX, centerY;

        var stars = [], star;
        var i;

        var animate = true;

        initializeStars();

        function executeFrame(){
        
        if(animate)
            requestAnimFrame(executeFrame);
            moveStars();
            drawStars();
        }

        function initializeStars(){
        centerX = canvas.width / 2;
        centerY = canvas.height / 2;
        
        stars = [];
        for(i = 0; i < numStars; i++){
            star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: '0.'+Math.floor(Math.random() * 99) + 1
            };
            stars.push(star);
        }
        }

        function moveStars(){
        for(i = 0; i < numStars; i++){
            star = stars[i];
            star.z--;
            
            if(star.z <= 0){
            star.z = canvas.width;
            }
        }
        }

        function drawStars(){
        var pixelX, pixelY, pixelRadius;
        
        // Resize to the screen
        if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initializeStars();
        }
        
        
        c.fillStyle = "rgba(0,10,20,1)";
        c.globalCompositeOperation = 'source-over'
        c.globalAlpha = 0.6 // 尾巴
        c.fillRect(0,0, canvas.width, canvas.height);
        c.fillStyle = "rgba(209, 255, 255, "+radius+")";
        for(i = 0; i < numStars; i++){
            star = stars[i];
            
            pixelX = (star.x - centerX) * (focalLength / star.z);
            pixelX += centerX;
            pixelY = (star.y - centerY) * (focalLength / star.z);
            pixelY += centerY;
            pixelRadius = 1 * (focalLength / star.z);
            c.globalCompositeOperation = 'source-over'
            c.globalAlpha = 0.6 // 尾巴
            c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
            c.fillStyle = "rgba(209, 255, 255, "+star.o+")";
            //c.fill();
        }
        }

        

        executeFrame();

        this.logindisplay();
    }
}

</script>

<style lang="scss">
@import '../../styles/login.scss';
  
</style>

