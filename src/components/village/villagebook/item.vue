<template>
    <div>
    <li class="list-li"> 
        <a class="list-title" @click="centerDialogVisible =true ">{{item.title|ellipsis}} </a>
        <em class="list-data">{{item.date}} </em>
    </li>
    <!--自定义组件 弹出窗口用于显示具体信息 v-bind： 动态赋值-->
    <infocontent v-bind:item="item" v-bind:centerDialogVisible="centerDialogVisible" v-on:dialogClose="centerDialogVisible =$event" />
                                                                                    <!-- v-on: 用于监听子组件的传值并做处理（监听器） $event为传递的参数-->
    </div>
</template>
<script>
    import infocontent from './infocontent.vue';
    export default {
        components: { infocontent },
        data () {
            return {
                centerDialogVisible: false, //传入子组件的dialog是否显示参数
            }
        },
        props:['item'],
        filters: {

            ellipsis (value) {

                if (!value) return ''

                if (value.length > 13) {

                    return value.slice(0,13) + '...'

                }

                return value

             }

        },
        
    }
</script>
<style lang="scss">
.list-li{
    
    height: auto;
    padding-left: 15px;
    font-size: 16px;
    line-height: 32px;
    overflow: hidden;
}

.list-data{
    font-size: 12px;
    color: #999;
    line-height: 32px;
    height: 32px;
    float: right;
    padding-right: 16px;
}
</style>
