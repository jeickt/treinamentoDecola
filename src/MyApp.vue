<template>
  <v-app>
    <v-main>
      <v-container>
          <router-view></router-view>
          <ListaPaises/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ListaPaises from './views/ListaPaises.vue' 

export default {
  name: "App",
  data: () => ({
    //
  }),
  components:{
    ListaPaises
  }
};
</script>
