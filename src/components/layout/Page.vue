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
        <input
          placeholder="search"
          type="text"
          class="form_input"
        />
        <div class="search-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
          </svg>
        </div>
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

    .search {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-right: 3%;
      border: 1px solid #aaa;

      .form_input {
        outline-style: none;
        border: 0px;
        padding: 3px 0 3px 3px;
        border-right: none;
      }

      .search-icon {
        width: 16px;
        padding-right: 3px;
        .icon {
          width: 1em; height: 1em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }
      }
    }

    .item-wrap {
      width: 25%;
      margin-right: 10%;

      .item {
        padding: 5% 8%;

        .item-font {
          color: #000;
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