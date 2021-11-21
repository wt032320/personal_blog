<template>
  <div class="wrapper">
    <div class="layout-wrap">
      <div class="title">
        BLOG
      </div>
      <div class="item-wrap">
        <span
          v-for="(item, index) in layoutData"
          :key="index"
          class="item"
        >
          <router-link 
            :to="`/page/${item.path}`"
            class="item-font"
          >{{ item.name }}</router-link>
        </span>
        <span
          class="item"
        >
          <router-link 
            to="/admin"
            class="item-font"
          >Manage</router-link>
        </span>
      </div>
      <div class="search">
        
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { layoutData } from '@/data/tabs';

export default {
  name: 'LayoutPage',
  setup () {
    return {
      layoutData
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-wrap {
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    background-color: #fff;
    // border-bottom: 1px solid #ddd;

    .title {
      margin-left: 1%;
      font-family: 'Courier New', Courier, monospace;
      font-size: 30px;
      font-weight: 550;
      background: radial-gradient(white, #36ad6a);
      background-clip: text;
      color: transparent;
    }

    .item-wrap {
      width: 25%;
      margin-right: 10%;

      .item {
        padding: 5% 8%;

        .item-font {
          color: #000;
          font-size: medium;
          text-decoration: none;
        }

        .item-font:hover {
          cursor: default;
          color: #36ad6a;
        }
      }
    }
  }

</style>