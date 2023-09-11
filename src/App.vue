<template>
  <router-view />
</template>

<script lang="js">
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const pageTitle = ref(''); // Inicializa pageTitle como una referencia

    onMounted(() => {
      pageTitle.value = 'University - UPro'; // Cambia el título de la página
      document.title = pageTitle.value; // Establece el título en el documento HTML
    });
  },
};
</script>

<style lang="css">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  position: relative;
}

body {
  user-select: none;
  font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: rgba(11, 13, 27);
  color: #ffffff;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.swiper {
  width: 100%;
  height: 100%;
  padding-inline: 2.5rem !important;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.swiper-wrapper {
  padding-block: 1rem !important;
}

.swiper-slide:hover {
  transform: scale(1.2);
  z-index: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-next {
  right: 0px !important;
}

.swiper-button-prev {
  left: 0px !important;
}

.swiper-button-next,
.swiper-button-prev {
  background: #0c0c0cc4;
  height: 100% !important;
  top: 11% !important;
  color: #fff !important;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 15px !important;
  font-weight: bold;
}

/* .swiper-wrapper {
  padding-bottom: 20px;
} */
</style>
