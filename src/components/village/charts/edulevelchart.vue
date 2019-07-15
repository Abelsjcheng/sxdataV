<template>
    <div class="vill_leftchart">
      <!-- 加载柱状图 并设置图表大小 -->
      <v-chart  :options="polar"  style="width:100%;height:100%;" />    
    </div>
</template>
<script>
export default {
    name: "edulevelchart",
  data () {
    return {
      polar: {
                    title: {
                    text: '党员学历分布',
                    textStyle:{
                        color: '#ffffff'    //标题颜色
                    }
                },
                tooltip:{
                    formatter: function (info) {
                        const res=info.name+":"+info.value+"人";
                        return res;
                    }
                },
                series: [{
                    type: 'treemap',

                    width:'70%',
                    height:'60%',
                    data: [ {
                        name: '硕士研究生',            // Second tree
                        value: 3
                    },{
                        name: '其它',            // First tree
                        value: 2
                    },{
                        name: 'nodeA',            // First tree
                        value: 99,
                        children: [{
                            name: '小学',       // First leaf of first tree
                            value: 31
                        }, {
                            name: '初中',       // Second leaf of first tree
                            value: 38
                        }, {
                            name: '职业高中',       // Second leaf of first tree
                            value: 1
                        }, {
                            name: '普通高中',       // Second leaf of first tree
                            value: 29
                        }]
                    },{
                        name: 'nodeA',            // First tree
                        value: 92,
                        children: [{
                            name: '本科',       // First leaf of first tree
                            value: 1
                        }, {
                            name: '中等专科',       // Second leaf of first tree
                            value:15
                        }, {
                            name: '大学',       // Second leaf of first tree
                            value: 37
                        }, {
                            name: '大专',       // Second leaf of first tree
                            value: 39
                        }]
                    }]
                }]
       }
    }
  },
  methods:{
      getcoldata:function(){ //
              //发送get请求

                  this.$http.get('http://110.53.162.165:5050/api/count/g_asset').then(function (res) {

                      for (let i = 0; i<res.data.data.length; i++) {
                      }
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
             
      }
  },
  computed: { //计算属性 取存在状态库中的值
     
  },
  watch:{
      
  },
  mounted:function(){//页面初始化函数
        this.getcoldata();

    }
}
</script>
<style lang="scss">
.vill_leftchart{
   
    background: rgba(0,0,0,.2);
    width: 95%;
    height: 330px;


}
</style>


