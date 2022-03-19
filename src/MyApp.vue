<template>
  <v-app>
    <AppTopBar/>
    <v-main>
      
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <AppBottom/>
  </v-app>
</template>

<script>

import AppTopBar from "./components/AppTopBar.vue";
import AppBottom from "./components/AppBottom.vue";

export default {
  name: "App",
  components: {
    AppTopBar,
    AppBottom,
  },

  data: () => ({
    //
   }),
};
</script>
