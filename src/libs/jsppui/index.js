import Carousel from './components/Carousel/Carousel.vue'
import CarItem from './components/Carousel/Item.vue'

let JsppUI = {}

JsppUI.install = function (Vue) {
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarItem.name, CarItem)
}

export default JsppUI