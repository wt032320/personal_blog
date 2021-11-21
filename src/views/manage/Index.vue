<template>
  <div
    class="bg-wrap"
    :style="{
      minHeight: height + 'px'
    }"
  >
    <div class="login-wrap">
      <n-message-provider>
        <login-form>
        </login-form>
      </n-message-provider>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import { NMessageProvider } from 'naive-ui';
import { ParticlesBg } from 'particles-bg-vue';
import LoginForm from '@/components/Manage/Login.vue';

export default {
  name: 'Index',
  components: {
    NMessageProvider,
    ParticlesBg,
    LoginForm,
  },
  setup(props) {
    let height = ref(0)

    onMounted(() => {
      height.value = document.documentElement.clientHeight
    })

    return {
      height
    }
  }
}
</script>

<style lang="scss" scoped>
  .bg-wrap {
    background-color: rgba(0, 0, 0, .03);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-wrap {
    width: 30%;
    height: 300px;
    background-color: #fff;
    opacity: .9;
    border-radius: 20px;
  }
</style>