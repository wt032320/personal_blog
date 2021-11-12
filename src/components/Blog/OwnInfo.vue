<template>
  <div
    class="info-wrap"
  >
    <n-avatar
      class="avatar"
      round
      :size="88"
      :src="data[0].avatar_img_src"
    >
    </n-avatar>
    <div class="shared nick-name">{{ data[1].nick_name }}</div>
    <div class="shared slogn">{{ data[2].slogn }}</div>
    <div class="shared label">
      <n-tag
        v-for="(item, index) in data[3].label"
        :key="index"
        :type="item.type"
      > {{ item.content }} </n-tag>
    </div>
    <div class="shared mid-title">
      —————— 
      <span>社交账号</span>
      ——————
    </div>
    <div class="content-icon">
      <n-popover trigger="hover">
        <template #trigger>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github-fill"></use>
            </svg>
          </div>
        </template>
        <span>https://github.com/wt032320</span>
      </n-popover>
      <n-popover trigger="hover">
        <template #trigger>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-QQ-circle-fill"></use>
            </svg>
          </div>
        </template>
        <span>QQ:1476081727</span>
      </n-popover>
      <n-popover trigger="hover">
        <template #trigger>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixin-copy"></use>
            </svg>
          </div>
        </template>
        <span>weChat:wen_2320</span>
      </n-popover>
      <n-popover trigger="hover">
        <template #trigger>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinpaibiaoshi_douyin"></use>
            </svg>
          </div>
        </template>
        <span>tiktok:1083775895</span>
      </n-popover>
    </div>
  </div>
</template>
<script>
  import { NAvatar, NTag, NPopover } from 'naive-ui';

  export default {
    name: "OwnInfo",
    props: {
      data: Array
    },
    components: {
      NAvatar,
      NTag,
      NPopover
    },
    setup (props) {
      
    }
  }
</script>
<style lang="scss" scoped>
  .info-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .avatar {
      margin: 15px 0;
    }
    .shared {
      margin-bottom: 15px;
    }
    .nick-name {
      color: #36ad6a;
    }
    .slogn {
      color: #777;
    }
    .label {
      width: 90%;
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-content: space-between;
      flex-wrap: wrap;
    }
    .mid-title {
      color: #ccc;
      span {
        color: #000;
      }
    }
    .content-icon {
      width: 80%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 30px;
      .icon {
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }
</style>