<template>
  <transition appear>
    <div class="car-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  toRefs,
  watch
} from "vue";

export default defineComponent({
  name: 'CarItem',
  setup () {
    const instance = getCurrentInstance()

    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex
    })

    watch(() => {
      return instance.parent.ctx.currentIndex
    }, (value) => {
      state.currentIndex = value
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss">
  .car-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 1s linear;
  }

  .v-enter-from {
    opacity: 0;
  }

  .v-enter-to {
    opacity: 1;
  }

  .v-leave-from {
    opacity: 1;
  }

  .v-leave-to {
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>