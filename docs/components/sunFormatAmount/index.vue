<template>
  <div class="thousandths">
    <div class="thousandths-amount" v-for="(item, index) in thousandthsData" :key="index">
      <div class="amount-key">78458245.4582 格式化并保留 {{ item.count }} 位小数</div>
      <!-- <div class="amount-value">{{ item.amount }}</div> -->

      <div class="amount-value">{{ useFormatAmount(item.amount, item.mark, item.count) }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import pkg from "@gw0420/hooks"

const { useFormatAmount } = pkg.utils

const thousandthsData = [
  {
    amount: 78458245.4582,
    mark: "$",
    count: 1
  },
  {
    amount: 78458245.458243,
    mark: "$",
    count: 2
  },
  {
    amount: 78458245.4582432,
    mark: "$",
    count: 3
  },
  {
    amount: 78458245.4582,
    mark: "￥",
    count: 4
  },
  {
    amount: 78458245.45824,
    mark: "￥",
    count: 2
  }
]
</script>

<style scoped lang="scss">
.thousandths {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.thousandths-amount {
  display: flex;
  gap: 16px;
  font-size: 15px;
  font-weight: 500;
  .amount-key {
    color: rgba(32, 128, 240, 0.8);
  }
  .amount-value {
    color: #f87171;
  }
}
</style>
