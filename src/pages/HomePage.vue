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
          '--background-image': `url(${certificado.gif})`,
        }"
      >
        <img class="certification-img" :src="certificado.logo" :alt="certificado.nombre" />
      </div>
    </div>

    <!-- Content courses -->
    <div class="content-section" v-for="(cursocap, index) in cursos" :key="index">
      <div class="content-header">
        <h2>{{ cursocap.nombre }}</h2>
      </div>
      <SwiperCustom>
        <swiper-slide
          class="card-course"
          v-for="capitulo in cursocap.capitulos"
          :key="capitulo.id"
          @click="redirectToCourse(capitulo)"
        >
          <img class="course-miniatura" :src="'https://academia.urbisfx.com/' + capitulo.miniatura" alt="img" />
          <!-- <div class="additional-info">
            <h2>{{ capitulo.nombre }}</h2>
            <p>Descripcion</p>
          </div> -->
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
      const { handleGetAllCourses } = useCourses();
      const data = await handleGetAllCourses()
      this.cursos = data.cursos
      this.banner = data.banner
      this.menu = data.menu
      this.certificados = data.certificaciones
    } catch (error) {
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
    redirectToCourse(course) {
      console.log(course)

      if (course.nodo) {
        window.open(`https://academia.urbisfx.com/node/mod/${course.id}`, '_self');
      } else if (course.curso) {
        window.open(`https://academia.urbisfx.com/cur/${course.id}`, '_self');
      } else if (course.modulo) {
        window.open(`https://academia.urbisfx.com/mod/${course.id}`, '_self');
      } else {
        window.open(`https://academia.urbisfx.com/cap/${course.id}`, '_self');
      }
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
  top: 80vh;
  z-index: 2;
  padding-inline: 0.75rem;
  width: 100%;
  padding-top: 5rem;
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
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  justify-content: center;
  /* gap: 16px;
  row-gap: 2rem; */
  padding-bottom: 1rem;
}

.card {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
  background: linear-gradient(#1a1a68, #000033);
  border-radius: 10px;
  box-shadow: -2px 9px 16px 8px rgba(0, 0, 0, 0.81);
  font-size: 2rem;
  max-width: 350px;
  max-height: 192px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.card:hover {
  background-image: var(--background-image);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 4px solid #fff;
}

.card img {
  width: 15rem;
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

  .content-cards {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .card {
    width: 100px;
    height: 70px !important;
  }

  .card img {
    width: 90px !important;
  }
}

@media (min-width: 1000px) {
  .card img {
    width: 200px !important;
  }

  .card {
    width: 250px !important;
    height: 175px !important;
  }
}

@media (min-width: 1500px) {
  .card img {
    width: 225px !important;
  }

  .card {
    width: 360px !important;
    height: 252px !important;
  }
}

@media (min-width: 1600px) {
  .card img {
    width: 225px !important;
  }

  .card {
    width: 400px !important;
    height: 240px !important;
  }
}

@media (max-width: 500px) {
  .card img {
    width: 90px !important;
  }
  .card {
    margin: 5px !important;
  }
}

/* @media (max-width: 375px) {
  .card {
    width: 100% !important;
  }
} */

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
  /* overflow: hidden; */
  max-width: 341px;
}

/* .course-miniatura {
  max-width: 341px;
} */

.card-course:hover {
  background-size: cover;
  background-position: center;
  border: 4px solid #fff;
  background-color: rgba(0, 0, 0, 0.5);
}

.card-course img {
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
}

.card-course:hover > img {
  /* transform: scale(1.2); */
  position: fixed;
  transform: scale(1.2);
  z-index: 99999;
  top: 0;
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
}

.card img {
  border-radius: 10px;
}
</style>
