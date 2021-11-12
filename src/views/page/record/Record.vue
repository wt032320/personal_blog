<template>
  <div
    class="record-wrap"
    :style="{
      minHeight: height + 'px',
    }"
  >
    <div
      class="wrapper"
      :style="{
        minHeight: height - 100 + 'px'
      }"
    >
      <record-item></record-item>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

import RecordItem from "@/components/Record/RecordItem.vue";

export default {
  name: 'RecordPage',
  components: {
    RecordItem
  },
  setup (props) {
    let height = ref(0)

    onMounted(() => {
      height.value = document.documentElement.clientHeight
    })

    return {
      height
    }
  }
}
</script>

<style lang="scss" scoped>
  .record-wrap {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, .03);
    .wrapper {
      margin-top: 70px;
      width: 77%;
      background-color: rgba(255, 255, 255, .85);
    }
  }

</style>