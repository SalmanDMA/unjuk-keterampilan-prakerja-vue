<template>
  <div>
    <default-layout v-if="!loading">
      <hero-section/>
    </default-layout>
    <v-overlay :value="loading">
      <v-progress-circular
        :rotate="360"
        :size="100"
        :width="15"
        :value="value"
        color="#193B3B"
        indeterminate
      >
      {{ value }}%
    </v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection';
import DefaultLayout from '@/layouts/DefaultLayout';

export default {
  name: 'HomeView',
  components: {
    DefaultLayout,
    HeroSection,
  },
  computed: {
    loading() {
      return this.$store.state.cats.loading;
    },
    value() {
      return this.$store.state.cats.progress;
    },
  },
  mounted() {
    const catsData = JSON.parse(localStorage.getItem('vuex')) || { cats: { catImages: [] } };
    this.$store.state.cats.catImages = catsData.cats.catImages;

    if (!catsData.cats.catImages.length) {
      this.$store.dispatch('cats/fetchCatImages');
    }
  },
};
</script>
