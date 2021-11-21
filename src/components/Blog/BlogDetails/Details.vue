<template>
  <div class="breadcrumb">
    <n-breadcrumb>
      <n-breadcrumb-item href="#">
        blog
      </n-breadcrumb-item>
      <n-breadcrumb-item href="#">
        {{ blogdata.category }}
      </n-breadcrumb-item>
      <n-breadcrumb-item href="#">
        {{ blogdata.details }}
      </n-breadcrumb-item>
    </n-breadcrumb>
  </div>
  <div
    class="details-wrap"
    :style="{
      minHeight: height - 80 + 'px'
    }"
  >
    <div class="header">
      <div v-html="blogdata.title">
      </div>
      <div class="icon-wrap">
        <div class="info-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-riqi"></use>
          </svg>
          <span class="font">{{ blogdata.createdAt }}</span>
        </div>
        <div class="info-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wenjianjia1"></use>
          </svg>
          <span class="font">{{ blogdata.category }}</span>
        </div>
        <div class="info-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-caiyouduo_liulanliang"></use>
          </svg>
          <span class="font">{{ blogdata.pageviews }} 人</span>
        </div>
      </div>
    </div>
    <div class="content" v-html="blogdata.text">
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

import { NBreadcrumbItem, NBreadcrumb } from "naive-ui";

export default {
  name: 'BlogDetails',
  props: {
    data: Array
  },
  components: {
    NBreadcrumbItem,
    NBreadcrumb
  },
  setup (props) {
    let height = ref(0)
    let blogdata = props.data

    onMounted(() => {
      height.value = document.documentElement.clientHeight
    })

    return {
      blogdata,
      height
    }
  }
}
</script>

<style lang="scss">
  .breadcrumb {
    width: 95%;
    height: 30px;
    line-height: 30px;
    padding-left: 5%;
    background-color: #76ca9a;
  }
  .details-wrap {
    width: 90%;
    margin-left: 5%;
    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        color: #000000A6;
        font-weight: 350;
      }
      .icon-wrap {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
      }
      .info-item {
        width: 15%;
        margin-right: 2%;
      }
      .icon {
        padding-right: 2%;
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
      .font {
        color: #cccccc;
        font-size: 14px;
      }
    }
    .content {
      #heading-1 {
        display: none;
      }
      p {
        color: #777777;
      }
    }
  }
</style>