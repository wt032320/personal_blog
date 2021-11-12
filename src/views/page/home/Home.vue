<template>
  <div class="home">
    <Carousel
      :autoplay="true"
      :duration="30000"
      :initial="0"
      :hasDot="false"
      :hasDirector="false"
    >
      <car-item
        v-for="(item, index) of carData"
        :key="index"
      >
        <div class="img-wrap">
          <img :src="item.img_src" />
        </div>
        <div class="mask">
          <h3 class="title font">
            {{ item.title }} ——
          </h3>
          <h1 class="slogan font">
            {{ item.content }}
          </h1>
        </div>
      </car-item>
    </Carousel>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';

import { getHomeInfo } from '../../../services/home';

export default {
  name: 'PageHome',
  setup () {
    let carData = ref([])

    onMounted(() => {
      getHomeInfo().then((res) => {
        carData.value = res.result
      })
    }) 

    return {
      carData
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    position: relative;
    width: 100%;
    height: 900px;
    .img-wrap {

      img {
        width: 100%;
        height: 900px;
      }
    }

    .mask {
      position: absolute;
      top: 60%;
      left: 30%;
      z-index: 1;
      width: 75%;
      height: 30%;
      transform: translate(-30%, -65%);

      .font {
        color: #fff;
        font-weight: 400;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      }

      .title {
        position: relative;
        top: 0%;
        animation: titlemove 2.5s ease-in-out 1;
        -webkit-animation: titlemove 2.5s ease-in-out 1;
      }

      .slogan {
        position: relative;
        left: 0%;
        animation: sloganmove 1.5s ease-in-out 1;
        -webkit-animation: sloganmove 1.5s ease-in-out 1;
      }

      @keyframes titlemove {
        from {
          top: -200%;
        }
        25% {
          top: 8%;
        }
        50% {
          top: -6%;
        }
        to {
          top: 0%;
        }
      }

      @-moz-keyframes titlemove  { /* Firefox */
        from {
          top: -200%;
        }
        25% {
          top: 8%;
        }
        50% {
          top: -6%;
        }
        to {
          top: 0%;
        }
      }

      @-webkit-keyframes titlemove { /* Safari 和 Chrome */
        from {
          top: -200%;
        }
        25% {
          top: 8%;
        }
        50% {
          top: -6%;
        }
        to {
          top: 0%;
        }
      }

      @keyframes sloganmove {
        from {
          left: -200%;
        }
        to {
          left: 0%;
        }
      }

      @-moz-keyframes titlemove  { /* Firefox */
        from {
          left: -200%;
        }
        to {
          left: 0%;
        }
      }

      @-webkit-keyframes titlemove { /* Safari 和 Chrome */
        from {
          left: -200%;
        }
        to {
          left: 0%;
        }
      }
    }
  }
</style>