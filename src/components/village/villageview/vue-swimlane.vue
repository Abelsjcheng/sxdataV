<template>
  <div
    :style="listParentStyle"
    class="vue-swimlane"
    @mouseenter="toggleAnimation"
    @mouseleave="toggleAnimation"
  >
    <ul :style="listStyle">
      <li v-for="(word, index) in list" :key="index" :style="itemStyle">
        <el-popover
          placement="top-start"
          title="led内容"
          width="200"
          trigger="hover"
          :content="word"
        >
          <a slot="reference" class="list-title">{{ word }} </a>
        </el-popover>

        <em class="list-data">2019-07-10 21:20:29 </em>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VueSwimlane",

  props: {
    words: {
      type: Array,
      default: () => {
        return [];
      },
      required: true,
    },
    rows: {
      type: Number,
      default: 1,
    },
    scale: {
      type: Number,
      default: 1,
    },
    transitionDuration: {
      type: Number,
      default: 1000,
    },
    transitionDelay: {
      type: Number,
      default: 500,
    },
    transition: {
      type: String,
      default: "ease-out",
    },
    circular: {
      type: Boolean,
      default: false,
    },
    continous: {
      type: Boolean,
      default: false,
    },
    pauseOnHover: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      list: [],
      listTop: 0,
      isPaused: false,
      isMovingBackwards: false,
    };
  },

  computed: {
    listCount() {
      return this.list.length;
    },

    fontSize() {
      // scale from 16px font size
      return 16 * this.scale;
    },

    itemHeight() {
      return this.fontSize * 1.5;
    },

    listHeight() {
      return this.itemHeight * this.listCount;
    },

    listParentHeight() {
      return this.itemHeight * this.rows;
    },

    itemStyle() {
      return `font-size: ${this.fontSize}px;
              height: auto;padding-left: 15px;line-height: 32px;overflow: hidden;`;
    },

    listStyle() {
      return `height: ${this.listHeight}px;
              transition-delay: ${this.transitionDelay}ms;
              transition-duration: ${this.transitionDuration}ms;
              transition-timing-function: ${this.transition};
              will-change: transform;
              transform: translateY(${this.listTop}px);`;
    },

    listParentStyle() {
      return `height: ${this.listParentHeight}px;`;
    },
  },

  // update word list
  watch: {
    words(val) {
      this.list = val;
    },
  },

  // copy word list
  created() {
    this.list = this.words;
  },

  // initiate animation
  mounted() {
    setTimeout(this.updateState, this.transitionDelay);
  },

  methods: {
    updateState() {
      // check if enough keywords or is not paused
      if (this.listCount <= this.rows) return;
      if (this.isPaused) return;

      // update list state
      if (this.isMovingBackwards) {
        this.listTop += this.itemHeight;
      } else {
        this.listTop -= this.itemHeight;
      }

      if (this.circular) {
        // cricular animation
        if (this.listTop < this.rows * this.itemHeight - this.listHeight) {
          this.listTop += this.itemHeight * (this.rows - 1);
          this.isMovingBackwards = !this.isMovingBackwards;
        }

        if (this.listTop > -this.itemHeight) {
          this.listTop = 0;
          this.isMovingBackwards = !this.isMovingBackwards;
        }
      } else if (this.continous) {
        // continous animation
        // BUG: current implmentation does not allow animation :(

        if (this.listTop < this.rows * this.itemHeight - this.listHeight) {
          this.listTop += this.itemHeight;
          this.list.push(this.list.shift());
        }
      }
      // one way animation
      else if (this.listTop < this.rows * this.itemHeight - this.listHeight) {
        this.listTop = 0;
      }

      // set time out for next update
      this.timeOutId = window.setTimeout(() => {
        this.updateState();
      }, this.transitionDuration + this.transitionDelay);
    },

    // pause/resume animaiton on hover
    toggleAnimation() {
      if (this.pauseOnHover) {
        this.isPaused = !this.isPaused;

        if (this.isPaused) {
          clearTimeout(this.timeOutId);
        } else {
          this.updateState();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-swimlane {
  overflow: hidden !important;
}

.vue-swimlane ul {
  list-style: none !important;
  overflow: hidden !important;
  transition-property: transform !important;
}

.vue-swimlane ul li {
  padding: 0 !important;
  margin: 0 !important;
}
.list-data {
  width: 50%;
  font-size: 12px;
  color: #999;
  line-height: 32px;
  height: 32px;
  float: right;
  text-align: right;
  padding-right: 3px;
}
.list-title {
  margin-left: 5px;
  width: 46%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
