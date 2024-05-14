<template>
  <div class="drap">
    <TransitionGroup name="list" tag="div" class="drag-content">
      <div
        class="item"
        v-for="(item, key) in dragData"
        :key="item.id"
        draggable="true"
        @dragstart="useDragSort.start($event, key)"
        @dragenter="useDragSort.enter($event, key, dragData)"
        @dragend="useDragSort.end"
        @dragover="useDragSort.over"
      >
        {{ item.name }}
      </div>
    </TransitionGroup>
    <div class="drag-describle">
      <div class="drag-title">拖拽后的data数据</div>
      <div class="drap-info" v-for="item in dragData" :key="item">{{ item }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import data from "@gw0420/hooks"

const { useDragSort } = data.hooks
const dragData = ref([
  { name: "orange", id: 1 },
  { name: "blue", id: 2 },
  { name: "green", id: 3 },
  { name: "purple", id: 4 },
  { name: "brown", id: 5 }
])
</script>

<style lang="scss" scoped>
.drap {
  display: flex;
  gap: 32px;
  .drag-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .item {
      width: 200px;
      height: 40px;
      line-height: 40px;
      // background-color: #f5f6f8;
      background: linear-gradient(to right, rgb(85, 127, 235), rgba(85, 127, 235, 0.6));
      text-align: center;
      // margin: 10px;
      color: #fff;
      font-size: 18px;
      transition: all 0.3s;
    }

    .container {
      position: relative;
      padding: 0;
    }

    .moveing {
      opacity: 0;
    }
  }
  .drag-describle {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .drag-title {
      font-size: 16px;
      font-weight: 600;
    }
  }
}

.list-move, /* 对移动中的元素应用的过渡 */
    .list-enter-active,
    .list-leave-active {
  transition: all 0.2s ease;
}
</style>
