<template>
  <v-app>
    <AppTopBar/>
    <v-main>
      
      <v-container>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import AppTopBar from "./components/AppTopBar.vue";

export default {
  name: "App",
  components: {
    AppTopBar,
  }
  // data: () => ({
    //
  // }),
};
</script>
