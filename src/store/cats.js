import axios from 'axios';

const state = () => ({
  catImages: [],
  loading: false,
  progress: 0,
});

const mutations = {
  setCatImages(state, catData) {
    state.catImages = catData;
  },
  setLoading(state, isLoading) {
    state.loading = isLoading;
  },
  setProgress(state, progress) {
    state.progress = progress;
  },
};

const actions = {
  async fetchCatImages({ commit }) {
    try {
      commit('setLoading', true);
      const baseUrl = process.env.VUE_APP_API_CAT_BASE_URL;
      const apiKey = process.env.VUE_APP_API_CAT_KEY;
      const response = await axios.get(`${baseUrl}/images/search?limit=5`, {
        headers: {
          'X-API-KEY': apiKey,
        },
      });

      const descriptions = [
        'This website is perfect for those who have a strong affinity for cats or anyone interested in learning more about them.',
        'Embark on an enchanting journey to explore the mesmerizing world of our beloved feline companions, where every whisker and purr tells a unique tale of charm and wonder.',
        'Dive deep into the enchanting realm of adorable cats, where their endearing quirks and playful antics will warm your heart and captivate your soul.',
        'Experience the pure joy of connecting with these captivating creatures, and let their gentle presence bring comfort, laughter, and endless delight into your life.',
        'Immerse yourself in the intriguing lives of cats, where every paw step is an adventure, and every whisker twitch is a story waiting to be told.',
      ];

      const titles = [
        'Learn, Explore, Value the World of Cats',
        'Discover the Feline Wonders',
        'Explore the Cat Kingdom',
        'Admire the Beauty of Cats',
        'Unlock the Secrets of Cats',
      ];

      const funfact = [
        'Has 230 Bones',
        'Has Hearing up to 65 kHz',
        'Eyes can see up to an angle of 200 degrees',
        'There are 500 Million Cats',
        'Average lifespan is 12 to 15 years',
      ];

      const catData = response.data.map((cat, index) => ({
        url: cat.url,
        title: titles[index],
        description: descriptions[index],
        funfact: funfact[index],
      }));

      let currentProgress = 0;
      const interval = setInterval(() => {
        if (currentProgress >= 100) {
          clearInterval(interval);
          commit('setCatImages', catData);
          commit('setLoading', false);
        }
        commit('setProgress', currentProgress);
        currentProgress += 1;
      }, 50);
    } catch (error) {
      console.error('Error fetching cat data:', error);
      commit('setLoading', false);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
