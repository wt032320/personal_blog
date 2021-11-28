<template>
  <div class="down-wrap">
    <span
      v-for="(item, index) in data"
      :key="index"
      :style="getRandomStyle()"
    >
      {{ item.category }}
    </span>
  </div>
</template>

<script>
import { getRandomStyle } from "@/utils/tools";

export default {
  name: 'CategoryDown',
  components: {},
  props: {
    data: Array
  },
  setup () {
    
    return {
      getRandomStyle
    }
  }
}
</script>

<style lang="scss" scoped>
  .down-wrap {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 300px;
    border-radius: 10px;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, .09);
  }
</style>