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
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .item {
        padding: 5% 8%;

        .item-font {
          position: relative;
          color: #000;
          font-size: medium;
          text-decoration: none;
          transition: 0.5s;

          &::after {
            position: absolute;
            content: "";
            top: 100%;
            left: 0;
            width: 100%;
            height: 3px;
            background: #36ad6a;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.5s;
          }

          &:hover {
            color: #5bc98a;
            cursor: default;
          }

          &:hover::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
      }
    }
  }

</style>