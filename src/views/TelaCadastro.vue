<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <h2>Cadastro</h2>
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|max:45"
      >
        <v-text-field
          class="mt-9"
          v-model="name"
          :counter="45"
          :error-messages="errors"
          label="Nome"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        class="mt-6"
        v-slot="{ errors }"
        name="phoneNumber"
        :rules="{
          required: true,
          digits: 11,
        }"
      >
        <v-text-field
          class="mt-6"
          v-model.number="phoneNumber"
          :counter="11"
          :error-messages="errors"
          label="Telefone celular"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        class="mt-6"
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          class="mt-6"
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
      </validation-provider>

      <v-btn class="mr-4" type="submit" :disabled="invalid"> Submeter </v-btn>
      <v-btn @click="clear"> Limpar </v-btn>
    </form>
  </validation-observer>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.$refs.observer.reset();
    },
  },
};
</script>