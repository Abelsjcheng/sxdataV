<template>
    <div class="mainground">
        <div class="drag_div" id="drag_div">
           
            <div class="one" v-if="broaddisplay==0">
                <router-link class="one" style="height: 150px;width: 200px;" :to="{path:'/index/mainview',query:{id:1}}"  >
                </router-link>
                <div class="text_center">应急广播信息展示 </div>
            </div>
            
            <div class="two" v-if="villagedisplay==0">
                <router-link class="welcome" :to="{path:'/index/villageindex',query:{id:'2-1'}}"> 
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
                <router-link class="three" :to="{path:'/index/Iotview',query:{id:3}}" style="height: 150px;width: 200px;" >
                </router-link>
                <div class="text_center">山洪灾害信息展示</div>
            </div>

        </div> 
        <div id="midground" class="wall"></div>
        <div id="foreground" class="wall"></div>
        <div id="top" class="wall"></div>
        <audio controls autoplay loop="loop">
            <source src="@/static/you.mp3">
        </audio>
    </div>
</template>

<script>
import weather from '@/components/main/weather'
import draginit from '@/static/js/tuozhuai'
export default {
    name: 'login2',
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
    mounted(){
        this.logindisplay();
        draginit();
    }
}
</script>

<style lang="scss">
@import '@/styles/login.scss';
.mainground{
    background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #75517d, #1b2947);
    background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
    background-attachment: fixed;
    overflow: hidden;
    height: 100vh;
}
audio{
    z-index: 5;
    position: absolute;
    bottom: 0;
    opacity: 0.1;
    -webkit-transition: all 2s;
    -moz-transition: all 2s;
    -ms-transition: all 2s;
    -o-transition: all 2s;
    transition: all 2s;
}
audio:hover{
    opacity: 1;
}
.wall{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
div#midground{
    background: url("../../static/img/midground.png");
    z-index: 1;
    -webkit-animation: cc 100s linear infinite;
    -moz-animation: cc 100s linear infinite;
    -o-animation: cc 100s linear infinite;
    animation: cc 100s linear infinite;
}
div#foreground{
    background: url("../../static/img/foreground.png");
    z-index: 2;
    -webkit-animation: cc 153s linear infinite;
    -o-animation: cc 153s linear infinite;
    -moz-animation: cc 153s linear infinite;
    animation: cc 153s linear infinite;
}
div#top{
    background: url("../../static/img/midground.png");
    z-index: 4;
    -webkit-animation: dd 100s linear infinite;
    -o-animation: dd 100s linear infinite;
    animation: da 100s linear infinite;
}
@-webkit-keyframes cc {
    from{
        background-position: 0 0;
        transform: translateY(10px);
    }
    to{
        background-position: 600% 0;
    }
}
@-o-keyframes cc {
    from{
        background-position: 0 0;
        transform: translateY(10px);
    }
    to{
        background-position: 600% 0;
    }
}
@-moz-keyframes cc {
    from{
        background-position: 0 0;
        transform: translateY(10px);
    }
    to{
        background-position: 600% 0;
    }
}
@keyframes cc {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 600% 0;
    }
}

@keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
@-webkit-keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
@-moz-keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
@-ms-keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
</style>


