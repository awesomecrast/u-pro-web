<template>
  <!-- Nav desktop -->
  <nav class="nav nav-desktop">
    <div class="nav-section-1">
      <router-link :to="{ name: 'home' }">
        <img src="https://academia.urbisfx.com/media/Sin_t%C3%ADtulo_1080100px.png" alt="" />
      </router-link>

      <ul class="nav-links" v-for="(item, index) in menu" :key="index">
        <li class="link" v-if="item.tiene_icono === false">
          <a :href="item.link">{{ item.nombre }}</a>
        </li>

        <li class="link" v-if="item.tiene_icono">
          <a :href="item.link"><img :src="item.icono" :alt="item.nombre" /></a>
        </li>
      </ul>
    </div>
    <div class="nav-section-2">
      <div class="nav-section-2-flag">
        <div ref="flagDiv" class="flag-div" @click.prevent="showMoreFlag = !showMoreFlag">
          <img class="flag" src="https://academia.urbisfx.com/static/flag-icons/flags/4x3/us.svg" alt="USA" />
          EN
        </div>
        <div v-if="showMoreFlag" :class="showMoreFlag ? 'more-flag' : 'more-flag-hidden'">
          <div class="flag-div" @click.prevent="showMoreFlag = !showMoreFlag">
            <img class="flag" src="https://academia.urbisfx.com/static/flag-icons/flags/4x3/us.svg" alt="USA" />
            EN
          </div>
          <div class="flag-div" @click.prevent="showMoreFlag = !showMoreFlag">
            <img class="flag" src="https://academia.urbisfx.com/static/flag-icons/flags/4x3/es.svg" alt="USA" />
            ES
          </div>
        </div>
      </div>
      <a href="/profile" class="nav-user">
        <img src="https://academia.urbisfx.com/static/assets/img/user.svg" alt="" />
      </a>
    </div>
  </nav>

  <!-- Nav mobile -->
  <nav class="nav nav-mobile">
    <div class="nav-section-1">
      <router-link :to="{ name: 'home' }" style="overflow: hidden">
        <img src="https://academia.urbisfx.com/media/Sin_t%C3%ADtulo_1080100px.png" alt="" />
      </router-link>
    </div>

    <button @click.prevent="showMenuMobile = !showMenuMobile" class="button-bar">
      <Bars3Icon class="icon" />
    </button>

    <div v-if="showMenuMobile" class="nav-section-2 nav-menu-mobile">
      <ul class="nav-links">
        <li class="link">
          <router-link :to="{ name: 'home' }">UrbisFX</router-link>
        </li>
        <li class="link">
          <router-link :to="{ name: 'home' }">Back Office</router-link>
        </li>
        <li class="link">
          <router-link :to="{ name: 'home' }">Super Pamm</router-link>
        </li>
        <li class="link">
          <router-link :to="{ name: 'home' }">Material de descarga</router-link>
        </li>
        <li class="link">
          <div class="link-icons">
            <a href="/"><img src="https://academia.urbisfx.com/media/1_LOCYrwp.svg" alt="facebook" /></a>
            <a href="/"><img src="https://academia.urbisfx.com/media/2_8iCiU1B.svg" alt="facebook" /></a>
            <a href="/"><img src="https://academia.urbisfx.com/media/3_A4ciE69.svg" alt="facebook" /></a>
          </div>
        </li>
      </ul>
      <div class="nav-section-2-flag">
        <div ref="flagDiv" class="flag-div" @click.prevent="showMoreFlag = !showMoreFlag">
          <img class="flag" src="https://academia.urbisfx.com/static/flag-icons/flags/4x3/us.svg" alt="USA" />
          EN
        </div>
        <!-- <div
          v-if="showMoreFlag"
          :class="showMoreFlag ? 'more-flag' : 'more-flag-hidden'"
        >
          <div class="flag-div" @click.prevent="showMoreFlag = !showMoreFlag">
            <img
              class="flag"
              src="https://academia.urbisfx.com/static/flag-icons/flags/4x3/us.svg"
              alt="USA"
            />
            EN
          </div>
          <div class="flag-div" @click.prevent="showMoreFlag = !showMoreFlag">
            <img
              class="flag"
              src="https://academia.urbisfx.com/static/flag-icons/flags/4x3/es.svg"
              alt="USA"
            />
            ES
          </div>
        </div> -->
      </div>
      <a href="/profile" class="nav-user">
        <img src="https://academia.urbisfx.com/static/assets/img/user.svg" alt="" />
      </a>
    </div>
  </nav>

  <VueSpinner class="loader" v-if="loading && !showOnlyNav" size="60" color="white" />
  <video v-if="!showOnlyNav" class="video-header" autoplay loop muted :src="videoSrc" @canplay="videoLoaded"></video>
  <div v-if="!showOnlyNav" class="banner-flot">
    <h3>{{ banner.titulo }}</h3>
    <h4>{{ banner.subtitulo }}</h4>
    <h5>{{ banner.texto }}</h5>
    <a :href="banner.link_boton">
      {{ banner.titulo_boton }}
    </a>
  </div>
</template>

<script lang="js">
import { VueSpinner } from 'vue3-spinners';
import { Bars3Icon } from '@heroicons/vue/24/solid';

export default {
  mounted() {
    document.body.addEventListener('click', this.closeShowMoreFlagOnClick);
    this.menuMeta = document.querySelector('meta[name=menu]').content
  },
  components: {
    VueSpinner,
    Bars3Icon
  },
  props: {
    // menu: {
    //   type: Array,
    // },
    banner: {
      type: Object,
    },
    showOnlyNav: {
      type: Boolean,
      default: false
    },
  },
  data() {
      return {
        menu: JSON.parse(document.querySelector('meta[name=menu]').content).menu,
        loading: true,
        showMoreFlag: false,
        showMenuMobile: false,
      };
    },
    computed: {
      videoSrc() {
        return "https://academia.urbisfx.com/media/Video_presentacion_-_Sin_musica_URBISFX_1_1_bHC7UZ4.mp4";
      },
    },
    methods: {
      videoLoaded() {
        this.loading = false;
      },
      closeShowMoreFlagOnClick(event) {
      const flagDiv = this.$refs.flagDiv;
      if (flagDiv && !flagDiv.contains(event.target)) {
        this.showMoreFlag = false;
      }
    },
    },
}
</script>

<style scoped>
.loader {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video-header {
  width: 100% !important;
  position: absolute;
  top: 0;
  z-index: 1;
}

.nav {
  position: absolute;
  z-index: 2;
  padding-inline: 0.75rem;
  padding-block: 0.5rem;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
}

.nav a {
  max-width: 205px;
}

@media (max-width: 996px) {
  .nav a img {
    max-height: 50px;
  }
}

.nav ul {
  display: flex;
  align-items: center;
  column-gap: 2rem;
}

.nav-section-1 {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.nav-section-2 {
  display: flex;
  align-items: center;
  column-gap: 1rem;
  position: relative;
}

.flag-div {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  cursor: pointer;
  font-weight: bold;
}

.flag-div img {
  width: 25px;
}

.more-flag {
  opacity: 1;
  position: absolute;
  pointer-events: none;
  bottom: -5.5rem;
  left: -1rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  pointer-events: all;
}

.more-flag .flag-div {
  cursor: pointer;
  padding-inline: 1rem;
  padding-block: 0.5rem;
}

.more-flag .flag-div:hover {
  background-color: #000143 !important;
}

.more-flag img {
  width: 25px;
}

.nav-user {
  background-color: #dfdfdf94;
  border-radius: 50%;
  padding: 0.5rem;
  padding-inline: 0.6rem;
}

.nav-user img {
  width: 25px;
}

.link a {
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
}

.link a:hover {
  color: #f5a434;
}

.link a img {
  height: 25px;
}

.link-icons {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.nav-mobile {
  display: none;
}

@media (max-width: 996px) {
  .nav-desktop {
    justify-content: flex-start;
    display: none;
  }

  .nav-mobile {
    display: flex;
    z-index: 50;
  }

  .banner-flot {
    display: none !important;
  }
}

.nav-menu-mobile {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5rem;
  background-color: rgb(0 0 0 / 70%);
  width: 100%;
  left: 20px;
  padding-block: 1rem;
  border-radius: 10px;
}

.nav-menu-mobile ul {
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
}

.nav-menu-mobile .link a {
  font-size: 1.2rem;
}

.nav-menu-mobile .nav-section-2-flag .flag-div {
  margin-block: 0.8rem;
}

.banner-flot {
  position: absolute;
  max-width: 800px;
  left: 25px;
  top: calc(70vh - 250px);
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  z-index: 2;
  padding-block: 1rem;
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
}

.banner-flot h3 {
  font-size: 2.5rem;
}

.banner-flot h4 {
  font-size: 1.5rem;
  font-weight: 400;
}

.banner-flot h5 {
  font-size: 1rem;
  font-weight: 400;
}

.banner-flot a {
  background-color: #000143;
  border-color: #000143;
  color: #ffffff;
  font-weight: 600;
  border-radius: 3px;
  padding-block: 0.7rem;
  width: fit-content;
  padding-inline: 1rem;
}

.icon {
  width: 2.5rem;
  color: #fff;
}

.button-bar {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
