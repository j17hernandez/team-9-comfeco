<template>
  <v-container style="background-color: white">
    <v-row justify="center" align="center">
      <v-col cols="10">
        <v-text-field
          v-model="email"
          outlined
          type="email"
          :rules="[() => !!email || 'Este campo es requerido']"
          label="Correo electronico"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          outlined
          type="password"
          :rules="[() => !!password || 'Este campo es requerido']"
          label="Contraseña"
          required
        ></v-text-field>
      </v-col>
      <v-col xl="6" md="6" sm="12" justify="center" align="center">
        <span>¿Olvidaste tu contraseña?</span>
      </v-col>
      <v-col xl="6" md="6" sm="12">
        <v-checkbox label="Mantener sesion iniciada"></v-checkbox>
      </v-col>
      <v-col cols="12">
        <v-btn block color="green" dark>Ingresar</v-btn>
      </v-col>
      <v-col cols="12" justify="center" align="center">
        <span> También puedes iniciar sesion con tus redes </span>
      </v-col>
      <v-col cols="6">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              class="float-right"
              icon
              color="primary"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon x-large>mdi-facebook</v-icon>
            </v-btn>
          </template>
          <span>Inicia Sesión con Facebook</span>
        </v-tooltip>
      </v-col>
      <v-col cols="6">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              class="float-left"
              icon
              color="red"
              v-bind="attrs"
              v-on="on"
              @click="loginGoogle()"
            >
              <v-icon x-large>mdi-google-plus</v-icon>
            </v-btn>
          </template>
          <span>Inicia Sesión con Google</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    loginGoogle() {
      // console.log(this.$fire.auth)
      try {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            // const obj = {
            //   credential: result.credential,
            //   token: result.credential.accessToken,
            //   user: result.user,
            // }
            console.log('Info de', result)
          })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
