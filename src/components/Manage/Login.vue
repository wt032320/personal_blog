<template>
  <div class="form-wrap">
    <n-form class="form-info" :model="model" :rules="rules">
      <n-form-item class="input" path="username" >
        <n-input
          v-model:value="model.username"
          size="large"
          placeholder="用户名"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item class="input" path="password" >
        <n-input
          v-model:value="model.password"
          size="large"
          placeholder="密码"
          @keydown.enter.prevent
        />
      </n-form-item>
    </n-form>
    <n-button
      class="form-btn"
      size="large"
      type="primary"
      :disabled="isDisabled"
      @click="messageSubmit"
    >Login</n-button>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch } from 'vue';

import { NInput, NForm, NFormItem, NButton, useMessage } from 'naive-ui';
import { ParticlesBg } from 'particles-bg-vue';

import router from '../../router';

import { login } from '../../services/login';

export default {
  name: 'ContcatMe',
  components: {
    NForm,
    NFormItem,
    NInput,
    NButton,
    ParticlesBg
  },
  setup () {
    
    const userInfo = reactive({
      username: '',
      password: '',
    })

    const isDisabled = ref(true)

    const message = useMessage()

    const messageSubmit = () => {
      const data = {
        username: userInfo.username,
        password: userInfo.password
      }

      login(data).then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token)
          router.push({ path: '/managehome' })
        } else if (res.error) {
          message.error(res.error, { duration: 3000 })
        }
      })
    }

    watch(() => {
      return userInfo.username && userInfo.password
    }, (value) => {
        value ? isDisabled.value = false : isDisabled.value = true
      }
    )

    const rules = {
      username: [
        {
          required: true,
          validator (rule, value) {
            if (!value) {
              return new Error('需要填写用户名')
            } else if (!/^[a-zA-Z0-9_-]{4,16}$/.test(value)) {
              return new Error('4到16位（字母，数字，下划线，减号')
            } 
            return true
          },
          trigger: ['input', 'blur']
        }
      ],
      password: [
        {
          required: true,
          validator (rule, value) {
            if (!value) {
              return new Error('需要填写密码')
            } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value)) {
              return new Error('密码至少包含 数字和英文，长度6-20')
            } 
            return true
          },
          trigger: ['input', 'blur']
        }
      ]
    }

    return {
      model: userInfo,
      rules,
      messageSubmit,
      isDisabled,
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-info {
    width: 90%;
    margin-left: 10%;
    margin-top: 25px;

    .input {
      width: 90%;
    }
  }
  .form-btn {
    width: 150px;
    margin-left: 31%;
    margin-top: 10px;
  }
</style>