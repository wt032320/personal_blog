<template>
  <div class="wrapper">
    <particles-bg
      color="#777777"
      type="cobweb"
      class="bg-wrap"
    >
    </particles-bg>
    <div class="info-wrap">
      <div
        class="own-info"
        v-for="(item, index) in infoData"
        :key="index"
      >
        <h3>{{ item.title }}:</h3>
        <p>{{ item.content }}</p>
      </div>
    </div>
    <div class="form-wrap">
      <h1 class="form-title">Have Any Query? Send Message</h1>
      <n-form class="form-info" :model="model" :rules="rules">
        <n-input
          class="input"
          v-model:value="model.firstName"
          type="text"
          size="large"
          placeholder="First Name"
        />
        <n-input
          class="input"
          v-model:value="model.lastName"
          type="text"
          size="large"
          placeholder="Last Name"
        />
        <n-form-item class="input" path="email" >
          <n-input
            v-model:value="model.email"
            size="large"
            placeholder="Your Email"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item class="input" path="phone" >
          <n-input
            v-model:value="model.phone"
            size="large"
            placeholder="Phone Number"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-input
          class="input-msg"
          v-model:value="model.message"
          type="textarea"
          size="large"
          placeholder="Message"
        />
      </n-form>
      <n-button
        class="form-btn"
        size="large"
        type="primary"
        :disabled="isDisabled"
        @click="messageSubmit"
      >Send Message</n-button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch } from 'vue';

import { NInput, NForm, NFormItem, NButton } from 'naive-ui';
import { ParticlesBg } from 'particles-bg-vue';

import infoData from '@/data/myInfo';

export default {
  name: 'ContcatMe',
  components: {
    NInput,
    NForm,
    NFormItem,
    NButton,
    ParticlesBg
  },
  setup () {
    
    const userInfo = reactive({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    })

    const isDisabled = ref(true)

    const messageSubmit = () => {
      console.log(userInfo)
    }

    watch(() => {
      return userInfo.email && userInfo.phone && userInfo.message
    }, (value) => {
        value ? isDisabled.value = false : isDisabled.value = true
      }
    )

    const rules = {
      email: [
        {
          required: true,
          validator (rule, value) {
            if (!value) {
              return new Error('需要填写邮箱')
            } else if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
              return new Error('邮箱格式不正确')
            } 
            return true
          },
          trigger: ['input', 'blur']
        }
      ],
      phone: [
        {
          required: true,
          validator (rule, value) {
            if (!value) {
              return new Error('需要填写手机号')
            } else if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(value)) {
              return new Error('手机号格式不正确')
            } 
            return true
          },
          trigger: ['input', 'blur']
        }
      ]
    }

    return {
      infoData,
      model: userInfo,
      rules,
      messageSubmit,
      isDisabled,
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    width: 100%;
    .bg-wrap {
      background-color: rgba(0, 0, 0, .02);
    }
    .info-wrap {
      position: absolute;
      top: 20%;
      left: 10%;
      width: 28%;
      height: 390px;
      background-color: rgba(0, 0, 0, .05);

      .own-info {
        margin: 11% 40px;
      }
    }

    .form-wrap {
      position: absolute;
      top: 20%;
      left: 38%;
      width: 48%;
      height: 390px;
      background-color: rgba(255, 255, 255, .85);

      .form-title {
        margin: 0 3% 3% 3%;
        font-weight: 350;
      }
      
      .form-info {
        display: flex;
        flex-wrap: wrap;

        .input {
          width: 40%;
          margin-left: 3%;
        }

        .input-msg {
          width: 83%;
          margin-left: 3%;
        }
      }
      .form-btn {
        margin: 3%;
      }
    }
  }
  
</style>