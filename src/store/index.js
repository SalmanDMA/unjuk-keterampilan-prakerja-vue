import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import cats from './cats';

Vue.use(Vuex);

const persistedstate = createPersistedState({
  paths: ['cats'],
});

export default new Vuex.Store({
  plugins: [persistedstate],
  modules: {
    cats: {
      namespaced: true,
      ...cats,
    },
  },
});
