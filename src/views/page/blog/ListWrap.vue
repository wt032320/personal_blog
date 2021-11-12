<template>
  <div
    class="blog-wrap"
    :style="{
      minHeight: height + 'px',
    }"
  > 
    <n-back-top :show="isShow">
    </n-back-top>
    <div class="bg-wrapper list-wrapper">
      <blog-list :data="blogData">
      </blog-list>
    </div>
    <div class="bg-wrapper right-wrapper">
      <own-info
        :data="ownInfoData"
      >
      </own-info>
    </div>
  </div>
</template>

<script>
  import { onMounted, reactive, ref, computed, onBeforeUnmount } from 'vue';
  import { useStore } from 'vuex';

  import BlogList from '@/components/Blog/BlogList/List.vue';
  import OwnInfo from '../../../components/Blog/OwnInfo.vue';

  import { NBackTop } from 'naive-ui';

  import { getBlogInfo } from '../../../services/blog';
  import { markdown_it, farmatDate } from '../../../utils/tools';

  import ownInfoData from '@/data/ownInfoData';

  export default {
    name: 'ListWrap',
    components: {
      BlogList,
      OwnInfo,
      NBackTop
    },
    setup () {

      let isShow = ref(false)
      
      const handleScroll = (e) => {
        let scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop;
        if (scrollTop > 500) isShow.value = true
        else if (scrollTop < 500) {
          isShow.value = false
        }
      }

      onMounted(() => {
        window.addEventListener('scroll', handleScroll, false)
      })

      onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll, false)
      })

      const store = useStore(),
            state = store.state

      onMounted(() => {
        getBlogInfo().then(res => {
          let data = res.result
          
          data.forEach((item) => {
            item.createdAt = farmatDate(item.createdAt)
            const temp = markdown_it(item.text)
            item.text = temp.html
            item.title = `<h${temp.headstemp[0].level} class="title">${temp.headstemp[0].text}</h${temp.headstemp[0].level}>`
            item.content = `<p>${temp.paragraphs[0].text}</p><p>${temp.paragraphs[1].text}</p>`
            item.details = temp.headstemp[0].text
          })

          store.commit('SETBLOGDATA', data)
        })
      })
      let height = ref(0)

      onMounted(() => {
        height.value = document.documentElement.clientHeight
      })

      return {
        blogData: computed(() => state.blogData),
        ownInfoData,
        isShow,
        height
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blog-wrap {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, .03);


    .bg-wrapper {
      z-index: 1;
      background-color: rgba(255, 255, 255, .85);
    }
    .list-wrapper {
      width: 58%;
      margin-top: 70px;
    }
    .right-wrapper {
      width: 18%;
      margin-left: 1%;
      margin-top: 70px;
    }
  }
</style>