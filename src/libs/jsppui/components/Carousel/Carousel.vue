<template>
  <div
    class="carousel"
  >
    <div class="inner">
        <car-dot
          :hasDot="hasDot"
          :itemLen="itemLen"
          :currentIndex="currentIndex"
          :dotBgColor="dotBgColor"
          @dotClick="dotClick"
        ></car-dot>
        <car-director
          dir="prev"
          @dirClick="dirClick"
          v-if="hasDirector"
        ></car-director>
        <car-director
          dir="next"
          v-if="hasDirector"
        ></car-director>
        <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance
} from "vue";

import CarDot from './Dot.vue'
import CarDirector from './Director.vue'

export default defineComponent({
  name: 'Carousel',
  components: {
    CarDot,
    CarDirector
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    initial: {
      type: Number,
      default: 0
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: false
    },
    dotBgColor: String
  },
  setup (props) {
    const instance = getCurrentInstance()

    const state = reactive({
      currentIndex: props.initial,
      itemLen: 0
    })

    let t = null

    const autoPlay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex('next')
        }, props.duration)
      }
    }

    const setIndex = (dir) => {
      switch (dir) {
        case 'next':
          state.currentIndex += 1
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0
          }
          break
        case 'prev':
          state.currentIndex -= 1
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1
          }
          break
        default:
          break
      }
    }

    const dotClick = (index) => {
      state.currentIndex = index
    }

    const dirClick = (dir) => {
      setIndex(dir)
    }

    const mouseEnter = () => {
      _clearIntervalFn()
    }

    const mouseLeave = () => {
      autoPlay()
    }


    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length
      autoPlay()
    })

    onBeforeUnmount(() => {
      _clearIntervalFn()
    })

    function _clearIntervalFn () {
      clearInterval(t)
      t = null
    }

    return {
      ...toRefs(state),
      dotClick,
      dirClick,
    }
  }
})
</script>

<style lang="scss">
  .carousel {
    width: 100%;
    height: 100%;

    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>