<template>
  <div>
    <particles-bg
      type="polygon"
      class="bg-wrap"
    >
    </particles-bg>
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
import { NMessageProvider } from 'naive-ui';
import { ParticlesBg } from 'particles-bg-vue';
import LoginForm from '@/components/Manage/Login.vue';

export default {
  name: 'Index',
  components: {
    NMessageProvider,
    ParticlesBg,
    LoginForm,
  }
}
</script>

<style lang="scss" scoped>
  .bg-wrap {
    background-color: rgba(0, 0, 0, .03);
  }
  .login-wrap {
    position: fixed;
    top: 22%;
    left: 33%;
    width: 30%;
    height: 300px;
    background-color: #fff;
    opacity: .9;
    border-radius: 20px;
  }
</style>