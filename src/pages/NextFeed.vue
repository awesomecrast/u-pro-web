<template>
    <div style="background-color: #0b0d1b !important; width: 100%; height: 5rem; overflow: hidden">
        <NavBar :banner="banner" :menu="menu" :showOnlyNav="true" />
    </div>
    <div class="muro">
        <div class="profile-content">


            <!-- Publication -->
            <div class="publications">
                <div v-for="(publication, index) in dataPublic.posts" :key="index" class="publication">
                    <div class="publication-user">
                        <img :src="dataPublic.avatar" alt="profile" />
                        <div class="publication-user-name">
                            <h3>@{{ dataPublic.username }}</h3>
                            <!-- <button>Seguir</button> -->
                        </div>
                    </div>
                    <div class="publication-content">
                        <p>
                            {{ publication.text }}
                        </p>
                        <!-- <button v-if="!isLike" class="publication-content-like" @click="isLike = true">
                                <HeartIconOutline class="icon" />
                            </button>
                            <button v-else class="publication-content-like" @click="isLike = false">
                                <HeartIcon class="icon-like" />
                            </button>
                         -->
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script lang="js">
// import { PaperAirplaneIcon } from '@heroicons/vue/24/solid';
// import { HeartIcon as HeartIconOutline } from '@heroicons/vue/24/outline';
import NavBar from '@/components/NavBar.vue';
import useProfilePublic from "@/composables/useProfilePublic"

const { handleGetDataProfilePublic } = useProfilePublic()

export default {
    async mounted() {
        try {
            const dataProfilePublic = await handleGetDataProfilePublic(this.$route.params.username)
            this.usernameMeta = document.querySelector('meta[name=username]')
            console.log(this.usernameMeta.content === "")
            this.dataPublic = dataProfilePublic.profile
            console.log(dataProfilePublic.profile)
        } catch (error) {
            console.log(error)
        }
    },
    created() {
        const username = this.$route.params.username;
        this.username = username
    },
    components: {
        // HeartIcon,
        // HeartIconOutline,
        // PaperAirplaneIcon,
        NavBar
    },
    data() {
        return {
            isLike: false,
            username: "",
            usernameMeta: "",
            textContent: "",
            dataPublic: {}
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
  