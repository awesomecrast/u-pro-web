<template>
  <head>
    <title>University - UPro</title>
  </head>
  <NavBar :banner="banner" :menu="menu" />
  <div class="content">
    <!-- Content certifications -->
    <div class="content-cards">
      <div
        class="card"
        v-for="(certificado, index) in certificados"
        :key="certificado.id"
        @click="redirectToCertification(index + 1)"
        :style="{
          '--background-image': `url(https://academia.urbisfx.com/${certificado.gif})`,
        }"
      >
        <img :src="certificado.logo" :alt="certificado.nombre" />
      </div>
    </div>

    <!-- Content courses -->
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
          class="card-course"
          v-for="capitulo in cursocap.capitulos"
          :key="capitulo.id"
        >
          <img class="course-miniatura" :src="capitulo.miniatura" alt="img" />
          <div class="additional-info">
            <h2>{{ capitulo.nombre }}</h2>
            <p>Descripcion</p>
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
import SwiperCustom from "@/components/SwiperCustom.vue";
import useCourses from "@/composables/useCourses"

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    NavBar,
    FooterH,
    SwiperCustom,
    SwiperSlide
  },
  async mounted() {
    try {
      const { handleGetAllCourses} = useCourses();
      const data = await handleGetAllCourses()
      this.cursos = data.cursos
      this.banner = data.banner
      this.menu = data.menu
      this.certificados = data.certificaciones
    } catch(error) {
      console.error('Error al obtener los cursos:', error);
    }
  },
  data() {
      return {
      certificados: [],
      courses: [],
      banner: {},
      menu: []
    }
  },
  methods: {
    redirectToCertification(id) {
      this.$router.push({ name: 'certification', params: { id } });
    },
  },
};
</script>

<style scoped>
.content {
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  z-index: 33;
  position: absolute;
  top: 80vh;
  z-index: 2;
  padding-inline: 0.75rem;
  width: 100%;
  padding-top: 5rem;
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

.content-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.card {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
  background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
  border-radius: 10px;
  /* box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px; */
  font-size: 2rem;
}

.card:hover {
  background-image: var(--background-image);
  background-size: cover;
  background-position: center;
  border: 4px solid #fff;
}

.card img {
  width: 15rem;
}

.card-course {
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

/* .course-miniatura {
  max-width: 341px;
} */

.card-course:hover {
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

.card-course:hover .additional-info {
  opacity: 1;
  /* Otros estilos que desees aplicar cuando se muestra la información adicional */
}

.card img {
  border-radius: 10px;
}
</style>
