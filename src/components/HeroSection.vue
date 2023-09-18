<template>
  <section class="hero-section">
    <v-carousel cycle height="100%" hide-delimiter-background>
      <v-carousel-item
        v-for="(catData, index) in catImages"
        :key="index"
      >
        <v-sheet :color="backgroundColor" height="100%">
          <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12">
              <v-img
                :src="catData.url"
                height="auto"
                max-height="400px"
                width="100%"
                max-width="800px"
                cover
                class="mx-auto rounded"
              ></v-img>
            </v-col>
            <v-col cols="12" v-if="catData.url">
              <div class="card__content">
                <h2 class="card__title">{{ catData.title }}</h2>
                <p class="card__description">{{ catData.description }}</p>
                <p
                  :class="{ 'number-text': containsNumber(catData.funfact) }"
                  class="card__description"
                  v-html="processFunfact(catData.funfact)"
                ></p>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      backgroundColor: '#1a3e3e',
    };
  },
  computed: {
    catImages() {
      return this.$store.state.cats.catImages;
    },
  },
  methods: {
    containsNumber(text) {
      const regex = /\d+/;
      return regex.test(text);
    },
    processFunfact(text) {
      const regex = /(\d+)/g;
      const matches = text.match(regex);

      if (matches) {
        let formattedText = text;
        matches.forEach((match) => {
          const coloredMatch = this.containsNumber(match)
            ? `<span style="color: #00C753; font-weight: bold ; font-size: 2rem">${match}</span>`
            : match;
          formattedText = formattedText.replace(match, coloredMatch);
        });
        return formattedText;
      }

      return text;
    },
  },

};
</script>

<style scoped>

.number-text {
  color: #00C753;
}
.hero-section {
  height: 100%;
}

.card__content {
  text-align: center;
}

.card__title {
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.card__description {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  max-width: 700px;
  margin: 0 auto 16px;
}

.v-btn.primary {
  background-color: #4CAF50 !important;
  transition: all 0.5s ease;
}

.v-btn.primary:hover {
  background-color: #388E3C !important;
}

.v-btn.primary .v-btn__content {
  color: #fff;
}

.row {
    align-content: center !important;
    margin: 0 !important;
}

@media screen and (max-width: 600px) {
  .card__title {
    font-size: 1.2rem;
  }
  .card__description {
    font-size: 1rem;
  }
}

@media screen and (min-width: 601px) and (max-width: 1024px) {
  .card__title {
    font-size: 2.2rem;
  }
  .card__description {
    font-size: 1.4rem;
  }
}

</style>
