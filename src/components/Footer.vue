<template>
  <v-footer
    dark
    padless
    class="pt-2"
  >
    <v-card
      flat
      tile
      class="white--text text-center"
      width="100%"
    >

      <v-card-text>
        <p class="white--text card__text">Let's get in touch</p>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4 white--text"
          icon
          @click="handlePageChange(icon.link)"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        &copy; Made With ❤ by Salman DMA
        {{ new Date().getFullYear() }} — Using
        <strong> Vuetify </strong> And <strong> Vue </strong>
      </v-card-text>

    </v-card>
  </v-footer>
</template>

<script>

export default {
  name: 'FooterVue',
  data: () => ({
    icons: [
      {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com',
      },
      {
        icon: 'mdi-twitter',
        link: 'https://twitter.com/salmandwimaula1',
      },
      {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/salmandma',
      },
      {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/salmandma',
      },
    ],
  }),
  methods: {
    handlePageChange(page) {
      window.open(page, '_blank');
    },
  },
};
</script>

<style scoped>
.v-footer,
.v-card {
  background-color: #193B3B !important;
}

.card__text {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
