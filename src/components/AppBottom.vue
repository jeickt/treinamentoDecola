<template>
  <v-card class="appBottom" color="grey lighten-4" flat height="60px" tile>
    <v-toolbar>
      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="//ListaPaises">
        <v-btn icon>
          <v-icon>mdi-earth</v-icon>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn icon v-if="dark" color="white" @click="darkMode">
        <v-icon class="mr-3">mdi-moon-waxing-crescent</v-icon>
      </v-btn>

      <v-btn icon v-if="!dark" color="gray" @click="darkMode">
        <v-icon class="mr-3">mdi-white-balance-sunny</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data: function () {
    return {
      dark: false,
    };
  },
  created() {
    this.dark = JSON.parse(localStorage.getItem("dark")) || false;
    this.dark && this.initializeDarkMode();
  },
  methods: {
    darkMode() {
      this.dark = !this.dark;
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    initializeDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  watch: {
    dark() {
      localStorage.setItem("dark", JSON.stringify(this.dark));
    },
  },
};
</script>

<style scoped>
.appBottom {
  position: absolute;
  height: 50px;
  width: 100vw;
  bottom: 0;
}
</style>