<template>
    <li class="list-li"> 
        <a class="list-title">{{item.title|ellipsis}} </a>
        <em class="list-data">{{item.date}} </em>
    </li>
</template>
<script>
    
    export default {
        data () {
            return {
                
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
