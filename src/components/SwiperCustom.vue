<template>
  <swiper
    :slides-per-view="15"
    :space-between="10"
    :loop="true"
    :navigation="true"
    :modules="modules"
    :pagination="false"
    :allow-touch-move="true"
    :breakpoints="{
      240: {
        slidesPerView: 1,
        spaceBetweenSlides: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetweenSlides: 10,
      },
      703: {
        slidesPerView: 2,
        spaceBetweenSlides: 10,
      },

      1071: {
        slidesPerView: 3,
        spaceBetweenSlides: 10,
      },

      1500: {
        slidesPerView: 4,
        spaceBetweenSlides: 10,
      },

      2050: {
        slidesPerView: 5,
        spaceBetweenSlides: 10,
      },

      2050: {
        slidesPerView: 6,
        spaceBetweenSlides: 10,
      },
    }"
    class="swiper"
  >
    <slot></slot>
  </swiper>
</template>

<script lang="js">
import { Swiper } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation"

export default {
  components: {
    Swiper,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
