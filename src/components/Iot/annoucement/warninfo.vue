<template>

        <virtualList :size="28" :remain="8" style="height:100%">
            <item v-for="item of items" :key="item.id" v-bind:item="item"  />
        </virtualList>

</template>
<script>
    import item from './item.vue'
    import virtualList from 'vue-virtual-scroll-list'

    export default {
        name: 'demo',
        data () {
            return {
                items: [ 
                    {id: 1,type:'danger',level:'一级',title:'河道流量预警',content:'请做好防范措施',time:'2019-6-22 12:10:10',lng:'113.085857',lat:'28.179247'}, 
                    {id: 2,type:'warning',level:'二级',title:'河道水位预警',content:'请做好防范措施',time:'2019-6-22 12:10:10',lng:'113.103464',lat:'28.183577'}, 
                    {id: 3,type:'warning',level:'二级',title:'河道流量预警',content:'请做好防范措施',time:'2019-6-22 12:10:10',lng:'113.085857',lat:'28.179247'}, 
                    {id: 4,type:'info',level:'三级',title:'河道流量预警',content:'请做好防范措施',time:'2019-6-22 12:10:10',lng:'113.085857',lat:'28.179247'}, 
                    {id: 5,type:'danger',level:'一级',title:'河道流量预警',content:'请做好防范措施',time:'2019-6-22 12:10:10',lng:'113.085857',lat:'28.179247'}, 
                    {id: 6,type:'danger',level:'一级',title:'河道流量预警',content:'请做好防范措施',time:'2019-6-22 12:10:10',lng:'113.085857',lat:'28.179247'}
                ],//分三级 danger(一级 危险)  warning（二级 警告） info（三级 普通）
            }
        },
        components: { item, virtualList },
        methods: {
        
            
        }, 
        computed: { //计算属性 取存在状态库中的值
            
            
        },
        watch:{
                
        },
        mounted:function(){//页面初始化函数
            
        }
    }
</script>
<style lang="scss" scoped>
.item_title{
    color: white;
    height: 20px;
}
</style>
