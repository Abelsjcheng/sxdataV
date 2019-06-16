<template>
    <div>
        <virtualList :size="40" :remain="8">
            <item v-for="item of items" :key="item.id" class="item_title" />
        </virtualList>
    </div>
</template>
<script>
    import item from './item.vue'
    import virtualList from 'vue-virtual-scroll-list'

    export default {
        name: 'demo',
        data () {
            return {
                items: [ {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8} ],
            }
        },
        components: { item, virtualList }
    }
</script>
<style lang="scss">
.item_title{
    color: white;
    height: 20px;
}
</style>
