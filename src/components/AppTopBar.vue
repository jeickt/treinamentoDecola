<template>
    <div class="app-top-bar">
        <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Para onde você quer ir?</v-toolbar-title>

      <v-spacer></v-spacer>

      </v-app-bar>
      
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary>
        

        <v-list
        nav
        dense
      >
      
     
    
    
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Países</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        
    </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "AppTopBar",
    data: () => ({
      drawer: false,
      group: null,
    }),
}
</script>

<style scoped>

</style>