<template>
  <div class="up-wrap">
    <span class="title-wrap">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-24gf-tags"></use>
      </svg>
      博客标签
    </span>
    <n-space
      class="tag-wrap"
    >
      <n-tag
        style="box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .09); border-radius: 2px; "
        v-for="(item, index) in data"
        :key="index"
        size="large"
        :color="{
          color: getRandomColor()
        }"
      >
        {{ item.category }}
        <span style="color: red;"
        >
          {{ item.number }}
        </span>
      </n-tag>
    </n-space>
  </div>
</template>

<script>
import { NSpace, NTag } from "naive-ui";

import { getRandomColor } from "@/utils/tools";

export default {
  name: 'CategoryUp',
  components: {
    NSpace,
    NTag,
  },
  props: {
    data: Array
  },
  setup(props) {
    console.log(props.data)
    let data = props.data
    return {
      data,
      getRandomColor
    }
  }
}
</script>

<style lang="scss" scoped>
  .up-wrap {
    background-color: #fff;
    width: 100%;
    height: 150px;
    border-radius: 10px;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, .09);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title-wrap {
      padding-top: 10px;
      font-size: 28px;
      color: #333333;
      .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
    .tag-wrap {
      width: 65%;
      padding-top: 10px;
      padding-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
  }
</style>