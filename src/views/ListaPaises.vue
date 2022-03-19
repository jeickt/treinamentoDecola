<template>
    <v-container>
        <h1>Lista de paises</h1>
        <v-pagination
              v-model="page"
              class="my-4"
              :length="15"
              :total-visible="6"
              :lenght="25"
            ></v-pagination>
        <div v-for="(pais, index) of listaPaises" :key="pais.name.common">
            <v-card v-if="((index < page * 10) &&(index > page * 10 - 11))"
                class="mx-auto mt-5 blue-grey lighten-5 pa-md-4 mx-lg-auto"
                max-width="344"
                
            >
                <v-img
                :src="pais.flags.png"
                height="200px"
                ></v-img>

                <v-card-title>
                {{ pais.name.common }}
                </v-card-title>

                <v-card-subtitle class="pt-1 pb-1">
                Capital: {{ pais.capital ? pais.capital[0] : "Não possui"}}
                </v-card-subtitle>

                <v-card-subtitle class="pt-1 pb-1">
                População: {{ pais.population }}
                </v-card-subtitle>

                <v-card-actions>
                <v-btn
                    color="orange lighten-2"
                    text
                >
                    <a :href="pais.maps.googleMaps" target="_blank">Google Maps</a>
                </v-btn>

                <v-spacer></v-spacer>

                <!-- <v-btn
                    icon
                    @click="show = !show"
                >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn> -->
                </v-card-actions>

                <!-- <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
                </v-expand-transition> -->
            </v-card>
        </div>
    </v-container>

    
</template>

<script>
export default {
    name: 'ListaPaises',
    data(){
        return{
            listaPaises: [],
            show: false,
            page: 1,
            maxPages: 0
        }
    },
    created(){
        fetch('https://restcountries.com/v3.1/all')
            .then(resposta => resposta.json())
            .then(json => {
                this.listaPaises = json
                console.log(this.listaPaises)
                this.maxPages = Math.ceil(this.listaPaises.length / 10)
            })
            console.log(this.maxPages)
    },
}
</script>

<style>
a{
    text-decoration: none;
}
</style>