<template>
  <div 
    class="wrap"
    :style="{
      minHeight: height - 60 + 'px'
    }"
  >
    <div class="category-wrapper">

    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'Category',
  components: {
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
  .wrap {
    margin-top: 60px;
    background-color: rgba(0, 0, 0, .03);
    display: flex;
    justify-content: center;

    .category-wrapper {
      width: 77%;
      height: 600px;
      margin-top: 10px;
      border: 1px solid black;
    }
  }
</style>