<template>
  <default-layout>
    <section v-if="!loading">
      <v-container>
        <h1 class="collections-title">Collections</h1>
        <p class="collections-subtitle">All you want to know about cats</p>
        <!-- Pilihan untuk memilih jenis kucing -->
        <v-row justify="center">
          <v-col cols="12" md="6" lg="4">
            <v-select
              :items="breeds"
              item-text="name"
              v-model="selected_breed"
              label="Breeds"
              return-object
              attach
            ></v-select>
          </v-col>
        </v-row>

        <!-- Carousel gambar kucing -->
        <v-row>
          <v-col cols="12">
            <v-carousel>
              <v-carousel-item
                v-for="(item, i) in images"
                :key="i"
                :src="item.url"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>

        <!-- Informasi tentang jenis kucing yang dipilih -->
        <v-row justify="center">
          <v-col cols="12" md="8" md-offset="2">
            <v-card>
              <v-card-title primary-title>
                <div class="text-xs-center">
                  <v-chip>
                    {{ selected_breed.origin }}
                  </v-chip>
                  <v-chip v-if="selected_breed.experimental == 1">Experimental</v-chip>
                  <v-chip v-if="selected_breed.rex == 1">Rex</v-chip>
                  <v-chip v-if="selected_breed.natural == 1">Natural</v-chip>
                  <v-chip v-if="selected_breed.rare == 1">Rare</v-chip>
                  <v-chip v-if="selected_breed.hairless == 1">Hairless</v-chip>
                  <v-chip v-if="selected_breed.suppressed_tail == 1">Suppressed Tail</v-chip>
                  <v-chip v-if="selected_breed.short_legs == 1">Short Legs</v-chip>
                  <v-chip v-if="selected_breed.hypoallergenic == 1">Hypoallergenic</v-chip>
                </div>
                <div>
                  <h3 class="headline mb-0">{{ selected_breed.name }}</h3>
                  <div>{{ selected_breed.description }}</div>
                  <div>---</div>
                  <div><i>{{ selected_breed.temperament }}</i></div>
                </div>
              </v-card-title>

              <!-- Daftar peringkat kucing -->
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Affection Level
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      v-model="selected_breed.affection_level"
                      readonly
                      size="18"
                    ></v-rating>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Adaptability
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      v-model="selected_breed.adaptability"
                      readonly
                      size="18"
                    ></v-rating>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Child Friendly
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      v-model="selected_breed.child_friendly"
                      readonly
                      size="18"
                    ></v-rating>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Dog Friendly
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      v-model="selected_breed.dog_friendly"
                      readonly
                      size="18"
                    ></v-rating>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Energy Level
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      v-model="selected_breed.energy_level"
                      readonly
                      size="18"
                    ></v-rating>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Grooming
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      v-model="selected_breed.grooming"
                      readonly
                      size="18"
                    ></v-rating>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Health Issues
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      v-model="selected_breed.health_issues"
                      readonly
                      size="18"
                    ></v-rating>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Intelligence
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      v-model="selected_breed.intelligence"
                      readonly
                      size="18"
                    ></v-rating>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Shedding Level
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      v-model="selected_breed.shedding_level"
                      readonly
                      size="18"
                    ></v-rating>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Social Needs
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      v-model="selected_breed.social_needs"
                      readonly
                      size="18"
                    ></v-rating>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Stranger Friendly
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      v-model="selected_breed.stranger_friendly"
                      readonly
                      size="18"
                    ></v-rating>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Vocalisation
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      v-model="selected_breed.vocalisation"
                      readonly
                      size="18"
                    ></v-rating>
                  </v-list-item-action>
                </v-list-item>
              </v-list>

              <!-- Tombol Wikipedia -->
              <v-card-actions>
                <v-btn :href="selected_breed.wikipedia_url"
                target="_blank" text color="#193B3B">Wikipedia</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
    </section>

    <!-- Tampilan loading -->
    <v-overlay v-if="loading" :value="loading">
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
  </default-layout>
</template>

<script>
import axios from 'axios';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'CollectionsVue',
  components: {
    DefaultLayout,
  },
  data() {
    return {
      images: [],
      breeds: [],
      selected_breed: {},
      current_image: {},
      loading: false,
      value: 0,
    };
  },
  created() {
    this.getBreeds();
  },
  watch: {
    selected_breed() {
      console.log(this.selected_breed);
      this.getImages();
    },
  },
  methods: {

    async getBreeds() {
      try {
        axios.defaults.headers.common['x-api-key'] = process.env.VUE_APP_API_CAT_KEY;

        const response = await axios.get('https://api.thecatapi.com/v1/breeds/');
        this.breeds = response.data;
        console.log(`-- (${this.breeds.length}) Breeds from TheCatAPI.com`);

        // pick one to display initially
        // eslint-disable-next-line prefer-destructuring
        this.selected_breed = this.breeds[10];
      } catch (err) {
        console.log(err);
      }
    },
    async getImages() {
      try {
        this.loading = true;
        const queryParams = {
          breed_ids: this.selected_breed.id,
          limit: 8,
        };

        const response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: queryParams });

        this.pagination_count = response.headers['pagination-count'];
        // eslint-disable-next-line prefer-destructuring
        this.current_image = this.images[0];
        let currentProgress = 0;
        const interval = setInterval(() => {
          if (currentProgress >= 100) {
            clearInterval(interval);
            this.images = response.data;
            this.loading = false;
          }
          this.value = currentProgress;
          currentProgress += 1;
        }, 50);
      } catch (err) {
        console.log(err);
        this.loading = false;
      }
    },

  },

};
</script>

<style scoped>
.collections-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
.collections-subtitle {
  text-align: center;
  font-size: 16px;
}
</style>
