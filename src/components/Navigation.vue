<template>
  <v-list class="navigation" color="#193B3B">
    <v-list-item v-if="type === 'drawer'" @click="toggleDrawer">
      <v-btn icon class="white--text ml-auto">
       <v-icon>mdi-close</v-icon>
      </v-btn>
     </v-list-item>
    <v-list-item @click="navigateTo('home')">
      <v-list-item-title class="white--text navigation__item">Home</v-list-item-title>
    </v-list-item>
    <v-list-item @click="navigateTo('about')">
      <v-list-item-title class="white--text navigation__item">About</v-list-item-title>
    </v-list-item>
    <v-list-item @click="navigateTo('collections')">
      <v-list-item-title class="white--text navigation__item">Collections</v-list-item-title>
    </v-list-item>
    <!-- <v-list-item @click="navigateTo('saved')" v-if="isLoggedIn">
      <v-list-item-title class="white--text navigation__item">My Collections</v-list-item-title>
    </v-list-item> -->
    <!-- <v-list-item v-if="type !== 'footer'">
      <v-btn type="button" v-if="!isLoggedIn" @click="login" color="white--text navigation__btn">
        Login
      </v-btn>
      <v-btn type="button" v-else @click="logout" color="white--text navigation__btn">Logout</v-btn>
    </v-list-item> -->
  </v-list>
</template>

<script>
export default {
  name: 'NavigationVue',
  data() {
    return {
      isLoggedIn: false,
    };
  },
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
    navigateTo(page) {
      if (this.$route.name !== `${page}`) {
        this.$router.push({ name: page });
      }
      this.drawer = false;
    },
    toggleDrawer() {
      this.$emit('toggleDrawer');
    },
  },
};
</script>

<style scoped>
.navigation {
  display: flex;
  position: relative;
}

.navigation__item::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #fff;
  bottom: 5px;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

.navigation__item:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

.v-btn.navigation__btn {
  background-color: #4CAF50 !important;
  transition: all 0.5 ease;
}

.v-btn.navigation__btn:hover {
  background-color: #388E3C !important;
}

@media only screen and (max-width: 600px) {
  .navigation {
    flex-direction: column;
  }
}
</style>
