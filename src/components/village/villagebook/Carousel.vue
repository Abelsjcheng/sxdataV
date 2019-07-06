<template>
  
  <div class="block">
    <el-carousel   indicator-position="none">
      <el-carousel-item v-for="item in imaglist"  v-bind:key="item.id" >
        <a><el-image :src="item.pic"  style="height: 250px" fit="cover" @click="openDialogVisible(item) "></el-image> </a>
        <p><a class="pa_title" @click="openDialogVisible(item) ">{{ item.title }}</a> </p>
        
      </el-carousel-item>
    </el-carousel>
    <!--自定义组件 弹出窗口用于显示具体信息 v-bind： 动态赋值-->
    <infocontent v-bind:item="paitem" v-bind:centerDialogVisible="centerDialogVisible" v-on:dialogClose="centerDialogVisible =$event" />
                                                                                    <!-- v-on: 用于监听子组件的传值并做处理（监听器） $event为传递的参数-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import infocontent from './infocontent.vue';
export default {
  components: {infocontent },
    data () {
    return {
        imaglist:[],
        centerDialogVisible: false, //传入子组件的dialog是否显示参数
        paitem:{} //传入子组件的对象信息
    };
  },
  methods:{
          openDialogVisible(vag){
            this.centerDialogVisible=true;
            this.paitem=vag;

          }
  },
  computed: { //计算属性 取存在状态库中的值
        ...mapGetters(["newpartyaffairs"]),  //
        listennewpa(){  //监听 chartSet值的变化
          return this.newpartyaffairs;
        }
  },
  watch:{
       listennewpa:{
          handler(vag){  //handler执行具体方法
            for(let i=0;i<3;i++){
              this.imaglist.push(vag[i]);
            }
        },
        deep: true//是否深度监听设置deep: true  则可以监听到vag.timeframe的变化，此时会给vag的所有属性都加上这个监听器，
        //immediate: true 代表如果在 wacth 里声明了 变量 之后，就会立即先去执行里面的handler方法
      }
    }
}
</script>

<style lang="scss">

  .block{
      margin-top: 80px;
      margin-left: 20px;
  }
  .pa_title {
    color: #333;
    font-size: 16px;
    margin-top:5px;
    text-align: center;
  }
  .pa_info{
    margin-top: 20px;
    font-size: 14px;
    height: 30px;
    border-bottom: 1px #d5d5d5 solid;
  }
  .content{
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
</style>