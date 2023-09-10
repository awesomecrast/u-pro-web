<template>
  <div class="muro">
    <div class="profile-content">
      <div class="profile">
        <div class="profile-img">
          <img src="https://th.bing.com/th/id/OIP.gAp5VXTOGXFMcfQZ_IjusgAAAA?pid=ImgDet&rs=1" alt="profile" />
        </div>
        <div class="profile-info">
          <h2>dream SUBMISSION blog</h2>
          <h3>@{{ username }}</h3>
          <span>💎</span>
          <p>
            A pro player is a professional gamer who competes in organized video game tournaments and leagues for cash
            prizes 🎶
          </p>
        </div>
      </div>

      <div class="create-publication">
        <textarea
          @input="adjustTextAreaHeight"
          ref="myTextArea"
          v-model="textContent"
          rows="1"
          placeholder="Haz una publicación..."
        ></textarea>
        <PaperAirplaneIcon class="create-publication-button" />
      </div>

      <!-- Publication -->
      <div class="publications">
        <div class="publication">
          <div class="publication-user">
            <img src="https://th.bing.com/th/id/OIP.gAp5VXTOGXFMcfQZ_IjusgAAAA?pid=ImgDet&rs=1" alt="profile" />
            <div class="publication-user-name">
              <h3>@{{ username }} 💎</h3>
              <!-- <button>Seguir</button> -->
            </div>
          </div>
          <div class="publication-content">
            <p>
              “Good evening everyone! This is a dream come true for me. Ever since I was a kid, I’ve always wanted to be
              here, in front of all of you, sharing the music I love. Tonight, we’re going to dive into the world of
              Phonk, a genre that combines the best of hip-hop, funk, and soul. We’re going to journey together through
              raw beats, smooth jazz samples, and deep bass lines. So get ready, because tonight, we’re going to raise
              the energy and celebrate life through music. Let’s do this!” 😊
            </p>
            <button v-if="!isLike" class="publication-content-like" @click="isLike = true">
              <HeartIconOutline class="icon" />
            </button>
            <button v-else class="publication-content-like" @click="isLike = false">
              <HeartIcon class="icon-like" />
            </button>
          </div>
        </div>
        <div class="publication">
          <div class="publication-user">
            <img src="https://th.bing.com/th/id/OIP.gAp5VXTOGXFMcfQZ_IjusgAAAA?pid=ImgDet&rs=1" alt="profile" />
            <div class="publication-user-name">
              <h3>@{{ username }} 💎</h3>
              <!-- <button>Seguir</button> -->
            </div>
          </div>
          <div class="publication-content">
            <p>
              “Good evening everyone! This is a dream come true for me. Ever since I was a kid, I’ve always wanted to be
              here, in front of all of you, sharing the music I love. Tonight, we’re going to dive into the world of
              Phonk, a genre that combines the best of hip-hop, funk, and soul. We’re going to journey together through
              raw beats, smooth jazz samples, and deep bass lines. So get ready, because tonight, we’re going to raise
              the energy and celebrate life through music. Let’s do this!” 😊
            </p>
            <button v-if="!isLike" class="publication-content-like" @click="isLike = true">
              <HeartIconOutline class="icon" />
            </button>
            <button v-else class="publication-content-like" @click="isLike = false">
              <HeartIcon class="icon-like" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { HeartIcon, PaperAirplaneIcon } from '@heroicons/vue/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/vue/24/outline';

export default {
  mounted() {

  },
  created() {
    const username = this.$route.params.username;
    this.username = username
  },
  components: {
    HeartIcon,
    HeartIconOutline,
    PaperAirplaneIcon
  },
  data() {
    return {
      isLike: false,
      username: "",
      textContent: ""
    }
  },
  methods: {
    adjustTextAreaHeight() {
      this.$refs.myTextArea.style.height = 'auto';
      this.$refs.myTextArea.style.height = this.$refs.myTextArea.scrollHeight + 'px';
    },
  }
}
</script>

<style scoped>
.muro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 4rem;
  width: 90%;
}

.profile-content {
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  max-width: 680px;
  width: 100%;
  border-radius: 10px;
  padding-inline: 1rem;
  padding-block: 2rem;
}

.profile {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.profile-img {
  display: flex;
  justify-content: center;
}

.profile-img img {
  border-radius: 10px;
  width: 40%;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  row-gap: 1rem;
}

.profile-info h2 {
  font-size: 1.6rem;
  color: #444444;
  text-align: center;
}

.profile-info h3 {
  font-size: 1rem;
  text-align: center;
}

.profile-info span {
  text-align: center;
}

.profile-info p {
  text-align: center;
}

/* Create publication */
.create-publication {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  width: 100%;
  column-gap: 1rem;
  margin-top: 3rem;
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

.create-publication-button {
  cursor: pointer;
  color: #007bff;
  width: 1.5rem;
}

.create-publication-button:hover {
  color: #0056b3;
}

/* Publication */
.publications {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  margin-top: 3rem;
}

.publication {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  border-bottom: 1px solid #d4d4d4;
}

.publication-user {
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 1rem;
}

.publication-user:hover {
  background-color: #f5f5f5;
}

.publication-user h3 {
  color: #000;
  font-size: 1rem;
}

.publication-user img {
  width: 2rem;
  border-radius: 50%;
}

.publication-user-name {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}

.publication-user-name button {
  background-color: transparent;
  color: #00bbfc;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.publication-user-name button:hover {
  text-decoration: underline;
}

.publication-content {
  display: flex;
  flex-direction: column;
  color: #000;
  padding: 1rem;
  padding-top: 0;
  line-height: 1.8rem;
}

.publication-content-like {
  background-color: transparent;
  color: red;
  width: fit-content;
  border: none;
  margin-top: 1rem;
  cursor: pointer;
}

.icon {
  width: 2.5rem;
  color: #5f5f5f;
}

.icon-like {
  width: 2.5rem;
  color: #f92f60;
}
</style>
