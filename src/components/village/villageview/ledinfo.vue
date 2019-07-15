<template>
    <div class="ledinfo_main">
        <div class="pwtitle">Led屏公告</div>
        <vueswimlane class="swimview" :words="wordsArray"  :rows="rows"  :pauseOnHover="true">

        </vueswimlane>
    </div>
</template>
<script>
import vueswimlane from './vue-swimlane';
export default {
    components: {vueswimlane
    },
    name: 'ledinfo',
    data () {
        return {
            wordsArray:[
                "led屏公告信息显示1",
                "led屏公告信息显示2",
                "led屏公告信息显示3",
                "led屏公告信息显示4",
                "led屏公告信息显示5",
                "led屏公告信息显示6",
                "led屏公告信息显示7",
                "led屏公告信息显示8",
                "led屏公告信息显示9",
                "led屏公告信息显示10",
                "led屏公告信息显示11",
                "led屏公告信息显示12",
                "led屏公告信息显示13",
                "led屏公告信息显示14"

            ],

            rows:9,

        }
    },
}
</script>
<style lang="scss" scoped>
.ledinfo_main{
    height:280px;
    width: 95%;
    background: rgba(0,0,0,.2);
}
.swimview{
    color:#fff;
    height:200px;

}
.swimview /deep/ li{
    padding-top: 5px;
    border-bottom-style:dotted;
    border-bottom: 1px dashed #404040;
  }
</style>


