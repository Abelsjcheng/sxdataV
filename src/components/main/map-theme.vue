<template>
  <div>
    <el-dialog title="选择"
               :visible.sync="box"
               width="50%">
      <el-radio-group v-model="text"
                      class="list">
        <el-row :span="24">

          <el-col v-for="(item,index) in list"
                  :key="index"
                  :md="4"
                  :xs="12"
                  :sm="4">
            <el-radio :label="item.value">{{item.name}}</el-radio>
          </el-col>
        </el-row>
      </el-radio-group>
    </el-dialog>

    <span>
      <i class="el-icon-view"
         @click="open"></i>
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import mapStyle from '../../static/json/mapstyle.json';//地图json
import mapblack from '../../static/json/mapblack.json';//地图json
import mapFreshblue from '../../static/json/mapFreshblue.json';//地图json
export default {
  data () {
    return {
      box: false,
      text: 'GreenField',
      list: [
        {
          name: '原味',
          value: ''
        }, {
          name: '午夜蓝',
          value: 'GreenField',
        }, {
          name: '黑夜风格',
          value: 'black'
        }, {
          name: '清新蓝风格',
          value: 'Freshblue'
        }
      ]
    }
  },
  watch: { //监听
    text: function (val) {
      this.$store.commit('SET_THEME',val);
      if(val=='GreenField')
      this.$store.commit('SET_THEME_NAME',mapStyle);//改变个性样式
      else if(val=='black')
      this.$store.commit('SET_THEME_NAME',mapblack);
      else if(val=='Freshblue')
      this.$store.commit('SET_THEME_NAME',mapFreshblue);
      else if(val=='')
      this.$store.commit('SET_THEME_NAME',val);
    }
  },
  computed: { //计算属性 取存在状态库中的值
    ...mapGetters(["theme"])    
  },
  mounted () {
    if (!this.text) {
      this.text = '';
    }
  },
  methods: {
    open () {
      this.box = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
}
</style>

