<template>
  <div class="muro">
    <div class="profile-content">
      <div class="profile">
        <div class="profile-img">
          <img src="https://th.bing.com/th/id/OIP.gAp5VXTOGXFMcfQZ_IjusgAAAA?pid=ImgDet&rs=1" alt="profile" />
        </div>
        <div class="profile-info">
          <h2>dream SUBMISSION blog</h2>
          <h3>@one-time-i-dreamt / one-time-i-dreamt.tumblr.com</h3>
          <span>💕💕💕💕💕</span>
          <p>
            A pro player is a professional gamer who competes in organized video game tournaments and leagues for cash
            prizes 🎶
          </p>
        </div>
      </div>

      <!-- Publication -->
      <div class="publications">
        <div class="publication">
          <div class="publication-user">
            <img src="https://th.bing.com/th/id/OIP.gAp5VXTOGXFMcfQZ_IjusgAAAA?pid=ImgDet&rs=1" alt="profile" />
            <div class="publication-user-name">
              <h3>@one-time-i-dreamt 💕💕💕💕💕</h3>
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
import { HeartIcon } from '@heroicons/vue/24/solid';
import { HeartIcon as HeartIconOutline} from '@heroicons/vue/24/outline';

export default {
    created() {
        const username = this.$route.params.username;
        console.log(username);
    },
    components: {
        HeartIcon,
        HeartIconOutline
    },
    data() {
        return {
            isLike: false
        }
    },
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
