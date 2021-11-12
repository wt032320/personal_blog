<template>
<div class="timeline">
  <n-scrollbar
    :style="{
      maxHeight: height - 100 + 'px'
    }"
  >
    <n-timeline size="large">
      <n-timeline-item content="啊" />
      <n-timeline-item
        type="success"
        title="成功"
        content="哪里成功"
        time="2018-04-03 20:46"
      />
      <n-timeline-item type="error" content="哪里错误" time="2018-04-03 20:46" />
      <n-timeline-item
        type="warning"
        title="警告"
        content="哪里警告"
        time="2018-04-03 20:46"
      />
      <n-timeline-item
        type="info"
        title="信息"
        content="是的"
        time="2018-04-03 20:46"
      />
    </n-timeline>
  </n-scrollbar>
</div>

</template>

<script>
  import { ref, onMounted } from "vue";
  import { NTimeline, NTimelineItem, NScrollbar } from "naive-ui";
  export default {
    name: 'RecordItem',
    components: {
      NTimelineItem,
      NTimeline,
      NScrollbar
    },
    setup () {
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
  .timeline {
    margin-left: 10%;
  }
</style>