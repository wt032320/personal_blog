<template>
  <div class="blog-item">
    <div v-html="item.title">
    </div>
    <div class="blog-info">
      <div class="info-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-riqi"></use>
        </svg>
        <span class="font">{{ item.createdAt }}</span>
      </div>
      <div class="info-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wenjianjia1"></use>
        </svg>
        <span class="font">{{ item.category }}</span>
      </div>
      <div class="info-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-caiyouduo_liulanliang"></use>
        </svg>
        <span class="font">{{ item.pageviews }} 人</span>
      </div>
    </div>
    <div class="blog-content">
      <div class="content-info" v-html="item.content">
      </div>
    </div>
    <router-link 
      :to="`/page/blog/details/${item._id}`"
    >
      <div class="blog-direction" @click="changeViews">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-24gl-fileEmpty"></use>
        </svg>
        <span class="direction-font">查看全文</span>
        <svg class="icon icon-right" aria-hidden="true">
          <use xlink:href="#icon-right"></use>
        </svg>
      </div>
    </router-link>
  </div>
</template>

<script>
  import { ref, reactive, watch } from 'vue';

  import { NSkeleton } from 'naive-ui';

  import { changeBlogViews } from '@/services/blog';

  export default {
    name: 'BlogItem',
    components: {
      NSkeleton
    },
    props: {
      item: Object
    },
    setup (props) {
      const data = {
        id: props.item._id
      }
      const changeViews = () => {
        changeBlogViews(data).then((res) => {
          console.log(res)
        })
      }
      return {
        changeViews
      }
    }
  }
</script>

<style lang="scss">
  .blog-item {
    width: 96%;
    margin: 0 2%;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    .title {
      font-weight: 400;
      font-size: 23px;
      color: #36ad6a;
    }
    .blog-info {
      height: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
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
        color: #999;
        font-size: 14px;
      }
    }
    .blog-content {
      width: 98%;
      padding-bottom: 10px;
      .content-info {
        font-weight: 400;
        line-height: 30px;
        color: #666;
      }
    }
    .blog-direction {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-bottom: 10px;
      .icon {
        padding-right: .5%;
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
      .direction-font {
        color: #36ad6a;
      }
      .icon-right {
        padding-left: .5%;
        margin-right: 1%;
      }
    }
  }
</style>