<template>
  <header>
    <v-app-bar app color="#193B3B">
      <v-app-bar-nav-icon
        @click="toggleDrawer"
        v-if="isSmallScreen"
        class="white--text ">
      </v-app-bar-nav-icon>
      <v-toolbar-title @click="navigateTo('home')" class="logo white--text">
        MyLovelyPet
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <Navigation v-if="!isSmallScreen" />

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="#193B3B" absolute disable-resize-watcher temporary>
      <Navigation type="drawer" @toggleDrawer="toggleDrawer" />
    </v-navigation-drawer>
  </header>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'HeaderVue',
  components: {
    Navigation,
  },
  data() {
    return {
      drawer: false,
      isSmallScreen: window.innerWidth < 600,
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isSmallScreen = window.innerWidth < 600;
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
.logo {
  transition: all 0.5s ease;
  cursor: pointer;
}

.logo:hover {
  transform: scale(1.1);
}
</style>
