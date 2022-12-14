<template>
  <div class="drag-container">
    <ul class="drag-list">
      <li
        v-for="stage in stages"
        class="drag-column"
        :class="{ ['drag-column-' + stage]: true }"
        :key="stage"
      >
        <ul class="drag-inner-list" ref="list" :data-status="stage">
          <li
            class="drag-itemlist"
            v-for="block in getBlocks(stage)"
            :data-block-id="block.id"
            :key="block.id"
          >
            <slot :name="block.id">
              <strong>{{ block.status }}</strong>
              <div>{{ block.id }}</div>
            </slot>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import dragula from "dragula";

export default {
  name: "KanbanBoard",

  props: {
    stages: {},
    blocks: {},
  },
  data() {
    return {};
  },

  computed: {
    localBlocks() {
      return this.blocks;
    },
  },

  methods: {
    getBlocks(status) {
      return this.localBlocks.filter((block) => block.status === status);
    },
  },

  mounted() {
    dragula(this.$refs.list)
      .on("drag", (el) => {
        el.classList.add("is-moving");
      })
      .on("drop", (block, list) => {
        let index = 0;
        for (index = 0; index < list.children.length; index += 1) {
          if (list.children[index].classList.contains("is-moving")) break;
        }
        this.$emit(
          "update-block",
          block.dataset.blockId,
          list.dataset.status,
          index
        );
      })
      .on("dragend", (el) => {
        el.classList.remove("is-moving");

        window.setTimeout(() => {
          el.classList.add("is-moved");
          window.setTimeout(() => {
            el.classList.remove("is-moved");
          }, 600);
        }, 100);
      });
  },
};
</script>


<style lang="scss">
.drag-itemlist {
  //background: rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}
.drag-column {
  margin: 0 0;
  z-index: 2;
  -webkit-box-flex: 1;
  flex: 1;
  position: relative;

  overflow: hidden;
  h2 {
    font-size: 2rem;
  }
}
.drag-container {
  margin: auto auto;
}
</style>
