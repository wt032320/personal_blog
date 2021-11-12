<template>
  <div :style="{
    height: clientHeight + 'px',
    position: 'relative'
  }">
    <n-layout position="absolute">
      <n-layout-header
        class="layout-header"
        bordered
        :inverted="inverted"
      >
        <div class="header-title">博客管理平台</div>
        <div class="switch-wrap">
          <span class="switch-font">switch</span>
          <n-switch v-model:value="inverted" />
        </div>
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 50px; bottom: 0;">
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="50"
          :width="180"
          :native-scrollbar="false"
          :inverted="inverted"
          :style="{ height: clientHeight - 50 + 'px'}"
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="46"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout content-style="padding: 24px;">
          <n-message-provider>
            <router-view></router-view>
          </n-message-provider>
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

<script>
import { h, defineComponent, ref, onMounted } from 'vue'

import { RouterLink } from 'vue-router'

import { NIcon, NSpace, NSwitch, NLayout, NLayoutHeader, NLayoutFooter, NMenu, NLayoutSider, NMessageProvider } from 'naive-ui'
import {
  Create as CreateIcon,
  PersonOutline as PersonIcon,
  Apps as AppIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'create',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '新建博客' }
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(CreateIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'manage',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '管理博客' }
      ),
    key: 'a-wild-sheep-chase',
    // disabled: true,
    icon: renderIcon(AppIcon)
  },
]

export default defineComponent({
  name: 'ManageHome',
  components: {
    NLayoutSider,
    NMenu,
    NSpace,
    NSwitch,
    NLayout,
    NLayoutFooter,
    NLayoutHeader,
    NMessageProvider
  },
  setup () {
    let clientHeight = ref(0)
    onMounted(() => {
      const height = document.documentElement.clientHeight
      clientHeight.value = height
    })

    return {
      inverted: ref(false),
      clientHeight,
      menuOptions
    }
  }
})
</script>

<style lang="scss" scoped>
  .layout-header {
    height: 50px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-title {
      font-size: large;
    }
    .switch-wrap {
      width: 8%;
      display: flex;
      justify-content: center;
      align-items: center;
      .switch-font {
        margin-right: 5%;
      }
    }
  }
</style>