<template>
  <div class="md-wrap">
    <md-editor
      v-model="text"
      :style="{
        height: clientHeight - 150 + 'px'
      }"
    />
    <div class="footer-wrap">
      <n-input
        class="input"
        type="text"
        size="large"
        placeholder="设置博客分类" 
        v-model:value="category"
      />
      <n-button @click="submit" type="primary" class="submit-btn" :disabled="isDisabled">发布</n-button>
    </div>
  </div>
</template>

<script>
  import { reactive, toRefs, computed, ref, onMounted, watch } from "vue";

  import { NButton, NInput, useMessage } from "naive-ui";

  import { blogSubmit } from '@/services/blog';

  import MdEditor from 'md-editor-v3';
  import 'md-editor-v3/lib/style.css';

  export default {
    name: 'BlogCreate',
    components: {
      MdEditor,
      NButton,
      NInput
    },
    setup () {
      const message = useMessage()

      let content = reactive({
        text: '',
        category: ''
      })

      const isDisabled = ref(true)

      const submit = () => {
        const data = {
          text: content.text,
          category: content.category,
        }

        blogSubmit(data).then((res) => {
          if (res.status) {
            message.success('发布成功！', { duration: 3000 })
          }
        })
      }

      watch(() => {
        return content.text
      }, (value) => {
          value ? isDisabled.value = false : isDisabled.value = true
        }
      )

      let clientHeight = ref(0)
  
      onMounted(() => {
        const height = document.documentElement.clientHeight
        clientHeight.value = height
      })

      return {
        ...toRefs(content),
        submit,
        isDisabled,
        clientHeight,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .footer-wrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      .input {
        width: 20%;
      }
      .submit-btn {
        width: 10%;
        margin-right: 10%;
      }
    }
  }
</style>