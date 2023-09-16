<template>
  <NavBar :banner="banner" :menu="menu" />
  <div class="content">
    <div class="content-cards">
      <div class="card" v-for="capitulo in cursos" :key="capitulo.id" @click="redirectToCourse(capitulo)">
        <!-- <img
          :src="'https://academia.urbisfx.com' + capitulo.miniatura"
          alt="img"
        /> -->
        <img :src="capitulo.miniatura" :style="{'filter': capitulo.blocked == true ? 'grayscale(1)': 'none'}" alt="img" />
        <img v-if="capitulo.blocked" class="lock-img" src="/static/lock.png" alt="img" />

        <div class="additional-info">
          <h2>{{ capitulo.nombre }}</h2>
          <p>{{ capitulo.descripcion }}</p>
        </div>
      </div>
    </div>
    <FooterH />
  </div>
</template>

<script lang="js">
import NavBar from "@/components/NavBar.vue"
import FooterH from "@/components/FooterH.vue"
import useClasses from "@/composables/useClasses"

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    NavBar,
    FooterH,
  },
  async mounted() {
    try {
      const { handleGetDataClasses } = useClasses();
      const data = await handleGetDataClasses(this.$route.params.id);
      this.cursos = data.clases.map((el,index) => {
        if(index != 0){
          el.blocked = true;
        }else{
          el.blocked = false;
        }
        return el;
      })
      this.banner = data.banner
      this.menu = data.menu
    } catch (error) {
      console.error('Error al obtener los cursos:', error);
    }
  },
  data() {
    return {
      courses: [],
      banner: {},
      menu: []
    }
  },
  methods: {
    redirectToCourse(course) {
      console.log(course)

      window.open(`https://academia.urbisfx.com/class/${course.id}`, '_self');

    }
  }
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
.lock-img{
  position: absolute;
  height: 70px !important;
  width: 70px !important;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
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
  max-width: 350px;
  max-height: 192px;
  min-width: 350px;
}

.card img {
  width: 100%;
}

.card:hover {
  background-size: cover;
  background-position: center;
  border: 4px solid #fff;
  background-color: rgba(0, 0, 0, 0.5);
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
  text-align: center;
}

.additional-info h2 {
  font-size: 1.2rem;
}

.card:hover .additional-info {
  opacity: 1;
}

.card img {
  border-radius: 10px;
}
</style>
