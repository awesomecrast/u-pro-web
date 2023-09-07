<template>
  <NavBar :banner="banner" :menu="menu" />
  <div class="content">
    <div
      class="content-section"
      v-for="(cursocap, index) in cursos"
      :key="index"
    >
      <div class="content-header">
        <h2>{{ cursocap.nombre }}</h2>
      </div>
      <SwiperCustom>
        <swiper-slide
          class="card"
          v-for="capitulo in cursocap.capitulos"
          :key="capitulo.id"
        >
          <img :src="capitulo.miniatura" alt="img" />
          <div class="additional-info">
            <h2>{{ capitulo.nombre }}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              malesuada tellus sed dui vehicula suscipit. Vivamus aliquet
              eleifend libero.
            </p>
          </div>
        </swiper-slide>
      </SwiperCustom>
    </div>
    <FooterH />
  </div>
</template>

<script lang="js">
import { SwiperSlide } from 'swiper/vue';
import NavBar from "@/components/NavBar.vue"
import FooterH from "@/components/FooterH.vue"
import SwiperCustom from '@/components/SwiperCustom.vue';
import useCourses from "@/composables/useCourses"

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    SwiperSlide,
    NavBar,
    FooterH,
    SwiperCustom
  },
  async mounted() {
    try {
      const { handleGetAllCourses} = useCourses();
      const data = await handleGetAllCourses()
      this.cursos = data.cursos
      this.banner = data.banner
      this.menu = data.menu
    } catch(error) {
      console.error('Error al obtener los cursos:', error);
    }
  },
  data() {
      return {
      certificados: [
        'Certificado 1',
        'Certificado 2',
        'Certificado 3',
        'Certificado 4',
        'Certificado 5',
      ],
      courses: [],
      banner: {},
      menu: []
    }
  },
};
</script>

<style scoped>
.content {
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  z-index: 33;
  position: absolute;
  top: 70vh;
  z-index: 2;
  padding-inline: 0.75rem;
  width: 100%;
}

@media (max-width: 950px) {
  .content {
    top: 46vh;
  }
}

@media (max-width: 550px) {
  .content {
    top: 25vh;
  }
}

.content-header {
  margin-block: 2rem;
  margin-inline: 2rem;
}

.content-header h2 {
  color: #fff;
  font-size: 1.25rem;
  padding: 10px;
  border-bottom: 1px solid gray;
}

.card {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
  background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
  border: 4px transparent;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  max-width: 341px;
  /* box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px; */
}

.card:hover {
  background-size: cover;
  background-position: center;
  border: 4px solid #fff;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo negro opaco */
}

.additional-info {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 1rem;
  padding-block: 0.5rem;
  padding-inline: 1rem;
}

.additional-info h2 {
  font-size: 1.2rem;
}

.card:hover .additional-info {
  opacity: 1;
  /* Otros estilos que desees aplicar cuando se muestra la información adicional */
}

/* .card:hover::after {
  content: attr(data-name);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 5px;
  font-size: 1rem;
  text-align: center;
  display: flex;
  align-items: flex-end;
}

.card:hover::before {
  content: attr(data-description);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 5px;
  font-size: 1rem;
  text-align: center;
  display: flex;
  align-items: flex-end;
} */

.card img {
  border-radius: 10px;
}
</style>
