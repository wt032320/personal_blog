<template>
  <div
    class="blog-wrap"
    :style="{
      minHeight: height + 'px',
    }"
  > 
    <n-back-top :show="isShow">
    </n-back-top>
    <div class="bg-wrapper details-wrapper">
      <blog-details :data="blogDetails">
      </blog-details>
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
  import { onMounted, watch, ref, onBeforeUnmount, reactive } from 'vue';

  import { useRoute } from 'vue-router';

  import { useStore } from 'vuex';

  import { NBackTop } from "naive-ui";

  import BlogDetails from '@/components/Blog/BlogDetails/Details.vue';
  import OwnInfo from '../../../components/Blog/OwnInfo.vue';

  import { getBlogDetails } from '../../../services/blog';

  import ownInfoData from '../../../data/ownInfoData';

  export default {
    name: 'ListWrap',
    components: {
      BlogDetails,
      NBackTop,
      OwnInfo
    },
    setup () {
      let blogDetails = ref([])
      let height = ref(0)
  
      const route = useRoute(),
            id = route.params.id

      const store = useStore(),
            state = store.state

      let blogdata = state.blogData
      blogdata.forEach(item => {
        if (item._id == id) {
          blogDetails.value = item
        }
      })

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
        height.value = document.documentElement.clientHeight
      })

      onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll, false)
      })

      return {
        blogDetails,
        isShow,
        ownInfoData,
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
    .details-wrapper {
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