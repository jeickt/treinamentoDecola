<template>
  <div class="apresentacao-projeto">
    <h1 class="text-h5 text-center mb-3 mt-5">Welcome to the world!</h1>
    <img
      src="https://www.objetivojuazeiro.com.br/robots/wp-content/themes/robots2020/images/modalidades/earth.gif"
    />
    <p>
      O presente projeto visa O presente projeto visa O presente projeto visa O
      presente projeto visa O presente projeto visa O presente projeto visa O
      presente projeto visa O presente projeto visa O presente projeto visa
    </p>
    <div class="botoes">
      <v-btn
        @click="delay"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
      >
        Cadastrar-se</v-btn
      >
      <v-btn
        @click="nologin"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
        >Login</v-btn
      >
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
    nologin: function () {
      alert("Você não tem login conosco, clique em CADASTRAR-SE");
    },
    delay() {
      setTimeout(() => {
        this.$router.push("/telacadastro");
      }, 100);
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
  justify-content: space-between;
  row-gap: 6px;
}
</style>



