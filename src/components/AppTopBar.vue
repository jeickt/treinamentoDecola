<template>
    <div class="app-top-bar">
        <v-app-bar color="teal darken-2" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="cor"> Para onde você quer ir? <v-icon>mdi-flag-variant</v-icon></v-toolbar-title>

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
          active-class="teal lighten-3 text--accent-4"
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
  .cor{font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;}

</style>