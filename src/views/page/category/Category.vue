<template>
  <div 
    class="wrap"
    :style="{
      minHeight: height - 60 + 'px'
    }"
  >
    <div class="category-wrapper">
      <div class="both-wrap">
        <category-up
          :data="categoryData"
        >
      </category-up>
      </div>
      <div class="both-wrap">
        <category-down
          :data="categoryData"
        >
      </category-down>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import CategoryUp from '@/components/Category/Up.vue';
import CategoryDown from '@/components/Category/Down.vue';

import categoryData from '@/data/category.js';

export default {
  name: 'Category',
  components: {
    CategoryUp,
    CategoryDown
  },
  setup () {
    let height = ref(0)

    onMounted(() => {
      height.value = document.documentElement.clientHeight
    })

    return {
      height,
      categoryData
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
      .both-wrap {
        margin-top: 20px;
      }
    }
  }
</style>