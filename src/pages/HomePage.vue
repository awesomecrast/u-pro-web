<template>
  <head>
    <title>University - UPro</title>
  </head>
  <NavBar />
  <div class="content">
    <!-- Content certifications -->
    <div class="content-cards">
      <div
        class="card"
        v-for="(certificado, index) in certificados"
        :key="index"
        @click="redirectToCertification(index + 1)"
      >
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=400&aspectRatio=1.78&format=png"
          alt="logo"
        />
      </div>
    </div>

    <!-- Content courses -->
    <div class="content-section">
      <div class="content-header">
        <h2>Zona UrbisFX Certificacion X</h2>
      </div>
      <SwiperCustom>
        <swiper-slide
          class="card-course"
          v-for="(curso, index) in cursos"
          :key="index"
        >
          <img class="course-miniatura" :src="curso.miniatura" alt="img" />
          <div class="additional-info">
            <h2>{{ curso.nombre }}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              malesuada tellus sed dui vehicula suscipit.
            </p>
          </div>
        </swiper-slide>
      </SwiperCustom>
    </div>

    <FooterH />
  </div>
</template>

<script lang="js">
// import {  SwiperSlide } from 'swiper/vue';
import NavBar from "@/components/NavBar.vue"
import FooterH from "@/components/FooterH.vue"
import { SwiperSlide } from 'swiper/vue';
import SwiperCustom from "@/components/SwiperCustom.vue";

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    // SwiperSlide,
    NavBar,
    FooterH,
    SwiperCustom,
    SwiperSlide
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
      cursos: [
        {
         id: "",
         nombre: "Curso de Desarrollo Web Completo",
         miniatura: "https://academia.urbisfx.com/media/1_jL1yLQC.png",
        },
        {
         id: "",
         nombre: "Curso de Python para Principiantes",
         miniatura: "https://academia.urbisfx.com/media/L%C3%ADneas_de_Negocio_1.png",
        },
        {
         id: "",
         nombre: "Curso de Desarrollo de Aplicaciones Móviles con React Native",
         miniatura: "https://academia.urbisfx.com/media/3_tff7ZYh.png",
        },
        {
         id: "",
         nombre: "Curso de Desarrollo de Juegos con Unity",
         miniatura: "https://academia.urbisfx.com/media/6_hQsTfcQ.png",
        },
        {
         id: "",
         nombre: "Curso de Desarrollo de Aplicaciones Empresariales con Java",
         miniatura: "https://academia.urbisfx.com/media/5_gad0qHP.png",
        }
      ],
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
  background-image: url("https://images-cdn.newscred.com/Zz04NjA3ZjljMjQ0ODkxMWViOWRjYzU1OGJkNjI1ZjVkZA==");
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
