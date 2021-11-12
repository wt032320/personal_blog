<template>
  <div
    v-for="(item, index) in data"
    :key="index"
  >
    <blog-item
      :item="item"
    ></blog-item>
  </div>
</template>

<script>
  import BlogItem from './Item.vue'

  export default {
    name: 'BlogList',
    props: {
      data: Array
    },
    components: {
      BlogItem
    },
  }
</script>

<style lang="scss" scoped>

</style>
