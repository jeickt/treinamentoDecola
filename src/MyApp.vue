<template>
  <v-app>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <AppBottom />
  </v-app>
</template>

<script>
import AppBottom from "./components/AppBottom.vue";

export default {
  name: "App",
  components: { AppBottom },
  data: () => ({
    //
  }),
};
</script>
