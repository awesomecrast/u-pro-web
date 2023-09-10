<template>
  <NavBar :banner="banner" :menu="menu" :showOnlyNav="true" />
  <div class="content">
    <div class="content-max">
      <div class="content-video">
        <video-js ref="videoPlayer" class="vjs-default-skin video-custom" controls width="640" height="268">
          <source :src="videoUrl" type="application/x-mpegURL" />
        </video-js>
        <div class="video-data">
          <div class="video-data-top">
            <h2>Es Normal que Muchos se Rindan</h2>
            <div class="video-data-next">
              <h3>Siguiente</h3>
              <ChevronRightIcon class="icon-next" />
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
              <button
                @click="likePlayer"
                :style="isLike == true && 'background: linear-gradient(180deg, #32a3fb, #1455ec);'"
              >
                <HandThumbUpIcon class="icon" :style="isLike == true && 'color: #fff'" />
              </button>
              <button @click="showModal = true">
                <!-- <ShareIcon class="icon" /> -->
                <img
                  style="width: 1.5rem"
                  :src="require('../../public/share-icon.svg')"
                  alt="descripción de la imagen"
                />
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
            <div class="create-coment" v-if="!showCreateComment">
              <textarea
                @keydown.enter.prevent
                @input="adjustTextAreaHeight"
                ref="myTextArea"
                v-model="textContent"
                rows="1"
                placeholder="Escribe un comentario"
              ></textarea>
              <button class="create-coment-button" @click="createCommentPlayerCus">Comentar</button>
            </div>
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
                  <button @click="showResponseComment = !showResponseComment">Responder</button>
                  <button>0 Likes</button>
                </div>
              </div>
              <div v-if="showResponseComment" style="display: flex; gap: 1rem">
                <input v-model="textContentResponse" type="text" placeholder="Responder comentario" />
                <button @click="createResponseCommentPlayerCus" class="create-coment-button">Responder</button>
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
        <div class="create-coment" v-if="!showCreateComment">
          <textarea
            @keydown.enter.prevent
            @input="adjustTextAreaHeight"
            ref="myTextArea"
            v-model="textContent"
            rows="1"
            placeholder="Escribe un comentario"
          ></textarea>
          <button class="create-coment-button">Comentar</button>
        </div>
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
              <button @click="showResponseComment = !showResponseComment">Responder</button>
              <button>0 Likes</button>
            </div>
            <div v-if="!showResponseComment" style="display: flex; gap: 1rem">
              <input v-model="textContentResponse" type="text" placeholder="Responder comentario" />
              <button @click="createResponseCommentPlayerCus" class="create-coment-button">Responder</button>
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
        <a class="icon-facebook" :href="'https://www.facebook.com/sharer/sharer.php?u=' + currentUrl" target="_blank">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a class="icon-twitter" :href="'https://twitter.com/share?url=' + currentUrl" target="_blank">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a class="icon-instagram" href="#" @click="() => navigator.share">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a class="icon-whatsap" :href="'https://api.whatsapp.com/send?text=' + currentUrl" target="_blank">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a class="icon-telegram" :href="'https://telegram.me/share/url?url=' + currentUrl" target="_blank">
          <i class="fa-brands fa-telegram"></i>
        </a>
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
import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import '@videojs/http-streaming'
import NavBar from '@/components/NavBar.vue';
import useCourses from "@/composables/useCourses"
import { HandThumbUpIcon, ShareIcon, ChevronRightIcon, StarIcon } from '@heroicons/vue/24/solid';
import { StarIcon as StartIconOutline, UserIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import FooterH from '@/components/FooterH.vue';
const { handleGetAllCourses, handleGetPlayer, createCommentInPlayer, createCommentResponseInPlayer } = useCourses()

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
    // options: {
    //   type: Object,
    //   default () {
    //     return {
    //       techOrder: ['youtube'],
    //       sources: [{
    //         type: 'video/youtube',
    //         src: 'https://www.youtube.com/embed/cAn1dHmpBQA?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Facademia.urbisfx.com%2Fplayer%2F6%2F&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=false&enablejsapi=1&origin=https%3A%2F%2Facademia.urbisfx.com&widgetid=1',
    //       }],
    //       youtube: { "customVars": { "wmode": "transparent" },  "ytControls": 0, "iv_load_policy": 1 }
    //     };
    //   }
    // }
  },
  async mounted() {
    this.player_id = this.$route.params.id;
    this.currentUrl = window.location.href;
    this.player = videojs(this.$refs.videoPlayer, this.options);
    this.player = videojs(this.$refs.videoPlayer);
    this.username = document.querySelector('meta[name=username]')
    this.isLike  = JSON.parse(localStorage.getItem(`like-cap-${this.player_id}`))
    this.currentRating = JSON.parse(localStorage.getItem(`cap-${this.player_id}`))
    this.stars = this.stars.map((star, index) => index < this.currentRating);

    if (this.username === '' || this.username === null || this.username === undefined) {
      this.showCreateComment = false
    } else {
      this.showCreateComment = true
    }

    try {
      const dataPlayer = await handleGetPlayer(this.player_id)
      this.player_cap = dataPlayer.cap
      this.player_comentarios = dataPlayer.comentarios
      this.player_relacionados = dataPlayer.relacionados
      console.log(dataPlayer)
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
      videoUrl: 'https://example.com/index.m3u8',
      textContent: "",
      textContentResponse: '',
      username: null,

      showCreateComment: false,
      showResponseComment: false,
      player_id: "",
      player_cap: {},
      player_comentarios: [],
      player_relacionados: {}
    }
  },
  beforeUnmount () {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    likePlayer() {
      this.isLike  = !this.isLike
      localStorage.setItem(`like-cap-${this.player_id}`, this.isLike )
    },
    rateVideo(rating) {
      this.currentRating = rating;
      this.stars = this.stars.map((star, index) => index < rating);
      localStorage.setItem(`cap-${this.player_id}`, rating)
    },
    copyURL() {
        this.isCopied = true
        var input = document.querySelector('input[type="text"]');
        input.select();
        document.execCommand('copy');
        setTimeout(() => {
          this.isCopied = false
        }, 3000 )
    },
    createCommentPlayerCus() {
      if (this.textContent === "" && this.textContent.trim() === "") {
        return
      }
      createCommentInPlayer(this.player_id, this.textContent)
      this.textContent = ""
    },

    createResponseCommentPlayerCus() {
      if (this.textContentResponse === "" && this.textContentResponse.trim() === "") {
        return
      }
      createCommentResponseInPlayer(this.player_id, this.textContentResponse)
      this.textContentResponse = ""
    },
  }
}
</script>

<style scoped>
@import url('https://unpkg.com/@videojs/themes@1/dist/city/index.css');

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

.video-data-next:hover,
.video-data-next:hover > svg {
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

.icon-next {
  width: 1.5rem;
  color: #fff;
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
.create-coment {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  width: 100%;
  column-gap: 1rem;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

textarea {
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 16px;
  resize: none;
  font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.create-coment-button {
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding-block: 0.5rem;
  padding-inline: 1rem;
}

.create-coment-button:hover {
  background-color: #0056b3;
}

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

.video-custom {
  width: 750px;
}

@media (max-width: 870px) {
  .video-custom {
    max-width: 640px;
    width: 500px;
    height: 350px;
  }

  .content-video {
    max-width: 100%;
  }
}

@media (max-width: 550px) {
  .video-custom {
    max-width: 350px;
    width: 350px;
    height: 250px;
  }

  .content-video {
    max-width: 100%;
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
  column-gap: 1.5rem;
}

.social-icons a {
  cursor: pointer;
}

.icon-facebook {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  color: #1877f2;
  padding-inline: 1.1rem;
  border: 1px solid #1877f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.icon-facebook:hover {
  background-color: #1877f2;
  color: #fff;
}

.icon-twitter {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  padding-inline: 1.1rem;
  border: 1px solid #46c1f6;
  border-radius: 50%;
  color: #46c1f6;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.icon-twitter:hover {
  background-color: #46c1f6;
  color: #fff;
}

.icon-instagram {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  padding-inline: 1.1rem;
  border: 1px solid #e1306c;
  border-radius: 50%;
  display: flex;
  color: #e1306c;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.icon-instagram:hover {
  background-color: #e1306c;
  color: #fff;
}

.icon-whatsap {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  padding-inline: 1.1rem;
  border: 1px solid #25d366;
  color: #25d366;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.icon-whatsap:hover {
  background-color: #25d366;
  color: #fff;
}

.icon-telegram {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  color: #0088cc;
  padding-inline: 1.1rem;
  border: 1px solid #0088cc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.icon-telegram:hover {
  background-color: #0088cc;
  color: #fff;
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

<!-- <style scoped>
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
.video-data-next:hover,
.video-data-next:hover > svg {
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

.icon-next {
  width: 1.5rem;
  color: #fff;
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

  .content-video {
    max-width: 100%;
  }
}

@media (max-width: 550px) {
  .video-custom {
    max-width: 350px;
    width: 350px;
    height: 250px;
  }

  .content-video {
    max-width: 100%;
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
  column-gap: 1.5rem;
}

.social-icons a {
  cursor: pointer;
}

.icon-facebook {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  color: #1877f2;
  padding-inline: 1.1rem;
  border: 1px solid #1877f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.icon-facebook:hover {
  background-color: #1877f2;
  color: #fff;
}
.icon-twitter {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  padding-inline: 1.1rem;
  border: 1px solid #46c1f6;
  border-radius: 50%;
  color: #46c1f6;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}
.icon-twitter:hover {
  background-color: #46c1f6;
  color: #fff;
}

.icon-instagram {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  padding-inline: 1.1rem;
  border: 1px solid #e1306c;
  border-radius: 50%;
  display: flex;
  color: #e1306c;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}
.icon-instagram:hover {
  background-color: #e1306c;
  color: #fff;
}

.icon-whatsap {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  padding-inline: 1.1rem;
  border: 1px solid #25d366;
  color: #25d366;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}
.icon-whatsap:hover {
  background-color: #25d366;
  color: #fff;
}
.icon-telegram {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  color: #0088cc;
  padding-inline: 1.1rem;
  border: 1px solid #0088cc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}
.icon-telegram:hover {
  background-color: #0088cc;
  color: #fff;
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
</style> -->
