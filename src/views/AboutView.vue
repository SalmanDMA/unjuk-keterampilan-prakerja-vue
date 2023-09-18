<template>
  <default-layout>
    <section class="about">
    <v-row>
      <v-col cols="12" md="6" class="about-img">
        <img
          src="../assets/salman.webp"
          alt="Author Image"
          class="elevation-5 rounded"
        />
      </v-col>
      <v-col cols="12" md="6">
        <div class="about-content">
          <h2>About the Author</h2>
          <p>
            I am a Fullstack Developer with experience as an
            intern at Alkademi and through the Mini Bootcamp
            Digital Talent Masjid. I have expertise in various
            development technologies, including React.js, Vue.js,
            Next.js, Nuxt.js, Node.js, Express.js, PHP, MySQL, and MongoDB.
          </p>
          <p>
            Throughout my experience, I have successfully completed
            various projects involving website development with
            React.js or Vue.js and API creation with Node.js. I have also
            participated in other projects that have allowed me to
            sharpen my development skills and provide the right solutions for client needs.
          </p>
          <p>
            Don't hesitate to ask me; I will assist you wholeheartedly.
            Please feel free to contact me for further information or check out my portfolio
            at the following link: <a href='https://bit.ly/portofolioSalmanDMA'>My Portfolio</a>.
          </p>
        </div>
      </v-col>
    </v-row>
  </section>
</default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'AboutView',
  components: {
    DefaultLayout,
  },
};
</script>

<style scoped>
.about {
  width: 100%;
  height: 100%;
  padding: 2rem;
}
.about-content {
  padding: 20px;
}

.about-content h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.about-content p {
  font-size: 16px;
  line-height: 1.5;
}

.about-img {
  display: flex;
  justify-content: center;
}

.about-img img {
  width: 464px !important;
  height: 464px !important;
  border-radius: 50% !important;
}

.about-content a {
  color: #00C753;
}

@media screen and (max-width: 600px) {
  .about-img img {
    width: 272px !important;
    height: 272px !important;
  }
}
</style>
