<template>
  <div class="apresentacao-projeto">
    <h1 class="text-h5 text-center mb-3 mt-5">Welcome to the world!</h1>
    <img
      src="https://www.objetivojuazeiro.com.br/robots/wp-content/themes/robots2020/images/modalidades/earth.gif"
    />
    <p></p>
    <div class="botoes">
      <v-btn
        @click="push"
        class="botaoInicio"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
        :disabled="loading"
      >
        {{ loading ? "LOADING..." : "Teste" }}
      </v-btn>
      <v-btn
        @click="push"
        class="botaoInicio"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
        :disabled="loading"
      >
        {{ loading ? "LOADING..." : "Botao2" }}
      </v-btn>
      <v-btn
        @click="push"
        class="botaoInicio"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
        :disabled="loading"
      >
        {{ loading ? "LOADING..." : "Botao3" }}
      </v-btn>
      <v-btn
        @click="push"
        class="botaoInicio"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
        :disabled="loading"
      >
        {{ loading ? "LOADING..." : "Botao4" }}
      </v-btn>
      <v-btn
        @click="push"
        class="botaoInicio"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
        :disabled="loading"
      >
        {{ loading ? "LOADING..." : "Botao5" }}
      </v-btn>
      <v-btn
        @click="push"
        class="botaoInicio"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
        :disabled="loading"
      >
        {{ loading ? "LOADING..." : "Botao6" }}
      </v-btn>
      <v-btn
        @click="push"
        class="botaoInicio"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
        :disabled="loading"
      >
        {{ loading ? "LOADING..." : "Botao7" }}
      </v-btn>
      <v-btn
        @click="push"
        class="botaoInicio"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
        :disabled="loading"
      >
        {{ loading ? "LOADING..." : "Botao8" }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHome",
  data() {
    return {};
  },
  methods: {
    push() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.botoes {
  display: flex;
  flex-direction: column;
}
</style>