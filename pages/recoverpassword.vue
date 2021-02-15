<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <v-card>
      <v-card-title>
        <span>Olvidaste tu contraseña</span>
      </v-card-title>
      <v-card-text>
        Te enviaremos un correo electrónico con un enlace privado para que
        reasignes tu contraseña. Este enlace será válido por una hora.
        <v-form ref="form" lazy-validation>
          <v-row>
            <v-col cols="10" md="6" lg="12" xl="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Correo"
                outlined
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="validate">
          Enviar enlace
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="success" outlined @click="redirectLogin">
          Iniciar sesión
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      valid: false,
      login: false,
      dialog: false,
      email: "",
      emailRules: [
        (v) => !!v || "El correo es necesario.",
        (v) => /.+@.+\..+/.test(v) || "El correo debe de ser valido.",
      ],
    };
  },
  methods: {
    validate() {
      console.log(this.$refs.form.validate());
    },
    redirectLogin() {
      this.dialog = false
    },
  },
};
</script>
<style scoped>
.title-container {
  color: #42a5f5;
}
.container-recover {
  background-color: white;
  border-radius: 5px;
}
</style>
