<template>
  <NavBar :banner="banner" :menu="menu" :showOnlyNav="true" />
  <div class="content">
    <div class="content-max">
      <div class="content-video">
        <video
          ref="videoPlayer"
          id="my-video"
          class="video-js vjs-default-skin video-custom"
          controls
          data-setup="{}"
          width="840"
          height="460"
        >
          <source src="https://www.youtube.com/embed/<VIDEO_ID>" type="video/youtube" />
        </video>
        <div class="video-data">
          <div class="video-data-top">
            <h2>Es Normal que Muchos se Rindan</h2>
            <div class="video-data-next">
              <h3>Siguiente</h3>
              <ChevronRightIcon class="icon" />
            </div>
          </div>
          <div class="video-data-bottom">
            <div class="video-stars">
              <component
                v-for="(star, index) in stars"
                :key="index"
                :is="star ? 'StarIcon' : 'StartIconOutline'"
                @click="rateVideo(index + 1)"
                class="icon-start-outline"
              />
            </div>
            <div class="video-button">
              <button @click="isLike = !isLike">
                <HandThumbUpIcon class="icon" :style="isLike && 'color: #2a8df7'" />
              </button>
              <button>
                <ShareIcon class="icon" @click="showModal = true" />
              </button>
            </div>
          </div>
        </div>

        <!-- Video max comentarios -->
        <div class="coments-max">
          <div class="coments-title">
            <h2>Comentarios</h2>
          </div>
          <div class="coment">
            <div class="coment-user">
              <div class="coment-user-info">
                <UserIcon class="icon-user" />
                <p>@6v0k4d</p>
              </div>
              <div class="coment-user-text">
                <p>
                  This is a really interesting topic and there’s so much to learn about it. I’m glad we have the
                  opportunity to discuss it and share our thoughts and ideas.
                </p>
                <div class="coment-user-text-button">
                  <button>Responder</button>
                  <button>0 Likes</button>
                </div>
              </div>
            </div>

            <div class="coment-response">
              <div class="coment-user-info">
                <UserIcon class="icon-user" />
                <p>@6v0k4d</p>
              </div>
              <div class="coment-user-text">
                <p>Great insights! Thanks for sharing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="courses-max">
        <div class="courses-title">
          <h2>Cursos relacionados</h2>
        </div>
        <div class="courses-list">
          <div class="courses-item">
            <img src="https://academia.urbisfx.com/media/1.png" alt="course" />
          </div>
          <div class="courses-item">
            <img src="https://academia.urbisfx.com/media/1.png" alt="course" />
          </div>
          <div class="courses-item">
            <img src="https://academia.urbisfx.com/media/1.png" alt="course" />
          </div>
          <div class="courses-item">
            <img src="https://academia.urbisfx.com/media/1.png" alt="course" />
          </div>
          <div class="courses-item">
            <img src="https://academia.urbisfx.com/media/1.png" alt="course" />
          </div>
        </div>
      </div>
    </div>

    <div class="coments">
      <div class="coments-title">
        <h2>Comentarios</h2>
      </div>
      <div class="coment">
        <div class="coment-user">
          <div class="coment-user-info">
            <UserIcon class="icon-user" />
            <p>@6v0k4d</p>
          </div>
          <div class="coment-user-text">
            <p>
              This is a really interesting topic and there’s so much to learn about it. I’m glad we have the opportunity
              to discuss it and share our thoughts and ideas.
            </p>
            <div class="coment-user-text-button">
              <button>Responder</button>
              <button>0 Likes</button>
            </div>
          </div>
        </div>

        <div class="coment-response">
          <div class="coment-user-info">
            <UserIcon class="icon-user" />
            <p>@6v0k4d</p>
          </div>
          <div class="coment-user-text">
            <p>Great insights! Thanks for sharing</p>
          </div>
        </div>
      </div>
    </div>

    <div class="courses">
      <div class="courses-title">
        <h2>Cursos relacionados</h2>
      </div>
      <div class="courses-list">
        <div class="courses-item">
          <img src="https://academia.urbisfx.com/media/1.png" alt="course" />
        </div>
        <div class="courses-item">
          <img src="https://academia.urbisfx.com/media/1.png" alt="course" />
        </div>
        <div class="courses-item">
          <img src="https://academia.urbisfx.com/media/1.png" alt="course" />
        </div>
      </div>
    </div>
  </div>

  <div v-if="showModal" class="modal-hidden" :class="showModal && 'modal'">
    <div class="modal-content">
      <div class="modal-close">
        <div @click="showModal = false">
          <XMarkIcon class="icon" style="color: #8d8d8e; cursor: pointer" />
        </div>
      </div>
      <div class="social-icons">
        <div class="icon-facebook">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <path
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
        </div>
        <div class="icon-twitter">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
          </svg>
        </div>
        <div class="icon-instagram">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </div>
        <div class="icon-whatsap">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            />
          </svg>
        </div>
        <div class="icon-telegram">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512">
            <path
              d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
            />
          </svg>
        </div>
      </div>
      <div class="modal-content-copy">
        <input type="text" v-model="currentUrl" readonly :style="isCopied && 'border: 2px solid #0088cc'" />
        <button class="copy-button" @click="copyURL">{{ isCopied ? 'Copiado' : 'Copiar' }}</button>
      </div>
    </div>
  </div>
  <FooterH :showButton="true" />
</template>

<script lang="js">
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';
import NavBar from '@/components/NavBar.vue';
import useCourses from "@/composables/useCourses"
import { HandThumbUpIcon, ShareIcon, ChevronRightIcon, StarIcon } from '@heroicons/vue/24/solid';
import { StarIcon as StartIconOutline, UserIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import FooterH from '@/components/FooterH.vue';


export default {
  name: 'VideoPlayer',
  components: {
    NavBar,
    HandThumbUpIcon,
    ShareIcon,
    ChevronRightIcon,
    StarIcon,
    StartIconOutline,
    UserIcon,
    XMarkIcon,
    FooterH
},
  props: {
    options: {
      type: Object,
      default () {
        return {
          techOrder: ['youtube'],
          sources: [{
            src: 'https://www.youtube.com/embed/cAn1dHmpBQA?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Facademia.urbisfx.com%2Fplayer%2F6%2F&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=false&enablejsapi=1&origin=https%3A%2F%2Facademia.urbisfx.com&widgetid=1',
            type: 'video/youtube'
          }]
        };
      }
    }
  },
  async mounted() {
    this.currentUrl = window.location.href;
    this.player = videojs(this.$refs.videoPlayer, this.options);
    try {
      const { handleGetAllCourses } = useCourses();
      const data = await handleGetAllCourses()
      this.cursos = data.cursos
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
      menu: [],
      player: null,
      stars: [false, false, false, false, false],
      currentRating: 0,
      isLike: false,
      showModal: false,
      currentUrl: "",
      isCopied: false,
    }
  },
  beforeUnmount () {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    rateVideo(rating) {
      this.currentRating = rating;
      this.stars = this.stars.map((star, index) => index < rating);
    },
    copyURL() {
        this.isCopied = true
        var input = document.querySelector('input[type="text"]');
        input.select();
        document.execCommand('copy');
        setTimeout(() => {
          this.isCopied = false
        }, 3000 )
    }
  }
}
</script>

<style scoped>
.content {
  padding-inline: 0.75rem;
  width: 100%;
  padding-top: 10rem;
  padding-bottom: 2rem;
}

.content-video {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
}

.video-data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;
  width: 100%;
  /* max-width: 640px; */
}

.video-data-top {
  display: flex;
  justify-content: space-between;
}

.video-data-next {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
}
.video-data-next:hover {
  color: #de9c39 !important;
}

.video-data-bottom {
  display: flex;
  justify-content: space-between;
}

.video-button {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.video-button button {
  background-color: rgb(82, 81, 82);
  border: none;
  border-radius: 50%;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.video-button button:hover {
  background-color: #7a7a7a;
}

.icon {
  width: 1.5rem;
  color: #fff;
  transition: all 0.3s ease-in-out;
}

.icon-start {
  width: 2rem;
  color: #b09c2a;
  cursor: pointer;
}

.icon-start-outline {
  width: 2rem;
  color: #b09c2a;
  cursor: pointer;
}

/* Coments */
.coments,
.coments-max {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  row-gap: 2rem;
}

.coments-title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;
  width: 100%;
}

.coments-title h2 {
  padding-bottom: 1rem;
  border-bottom: 1px solid #fff;
}

.coment {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;
  width: 100%;
  max-width: 640px;
}

.coment-user {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}

.coment-user-info {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}

.coment .icon-user {
  width: 2rem;
  color: #fff;
}

.coment-user-info p {
  color: #3799e5;
}

.coment-user-text {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}
.coment-user-text p {
  line-height: 1.5rem;
}

.coment-user-text-button {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.coment-user-text-button button {
  background-color: transparent;
  color: #757576;
  border: none;
  cursor: pointer;
}

.coment-response {
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}

/* Courses */
.courses {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  row-gap: 2rem;
}

@media (max-width: 870px) {
  .video-custom {
    max-width: 640px;
    width: 100%;
  }
}

@media (min-width: 1100px) {
  .courses {
    display: none;
  }

  .coments {
    display: none;
  }

  .content-video {
    max-width: 100%;
    align-items: flex-start;
  }
}

@media (max-width: 1100px) {
  .courses-max {
    display: none;
  }

  .coments-max {
    display: none;
  }

  .coments-title {
    max-width: 640px;
  }

  .content-video {
    align-items: center;
  }

  .content-video iframe {
    max-width: 100%;
    height: 380px;
  }

  .courses-title {
    max-width: 640px;
  }

  .courses-list {
    max-width: 640px;
  }
}

.courses-title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;
  width: 100%;
}

.courses-title h2 {
  padding-bottom: 1rem;
  border-bottom: 1px solid #fff;
}

.courses-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 2rem;
}

.courses-item {
  max-width: 250px;
  cursor: pointer;
}

.courses-item img {
  width: 100%;
}

@media (max-width: 570px) {
  .courses-item {
    max-width: 100%;
    cursor: pointer;
  }
}

.content-max {
  display: flex;
  justify-content: center;
  column-gap: 8rem;
}

.courses-max .courses-list {
  display: flex;
  flex-direction: column;
}

/* Modal */
.modal {
  opacity: 1 !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
}

.modal-hidden {
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.modal-close {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f5f5fb;
}

.modal-close div {
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}

.modal-close div:hover {
  background-color: #ebedf9;
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.modal-content-copy {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}

/* Estilo de los iconos y el input */
.social-icons {
  display: flex;
  justify-content: center;
  column-gap: 1rem;
}

.icon-facebook {
  padding: 1rem;
  padding-inline: 1.1rem;
  border: 1px solid #1877f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-twitter {
  padding: 1rem;
  padding-inline: 1.1rem;
  border: 1px solid #46c1f6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-instagram {
  padding: 1rem;
  padding-inline: 1.1rem;
  border: 1px solid #e1306c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-whatsap {
  padding: 1rem;
  padding-inline: 1.1rem;
  border: 1px solid #25d366;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-telegram {
  padding: 1rem;
  padding-inline: 1.1rem;
  border: 1px solid #0088cc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type='text'] {
  width: 100%;
  padding: 10px;
  border: 2px solid #dddddd;
  border-radius: 5px;
  outline: none;
}

/* Estilo del botón de copiar */
.copy-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.copy-button:hover {
  background-color: #0056b3;
}
</style>
