<template>
  <v-app>

    <Header/>

    <v-main>
      <slot/>
    </v-main>

    <Footer/>

  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
div.v-carousel__controls {
  bottom: -10px !important;
}
</style>
