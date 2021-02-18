<template>
  <v-container style="background-color: white; max-width: 500px">
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center">
        <h1 class="brand--text">Iniciar sesión</h1>
      </v-col>
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
      <v-col cols="12" md="6" xl="6" justify="center" align="center">
        <NuxtLink to="/recoverpassword">
          <span>¿Olvidaste tu contraseña?</span>
        </NuxtLink>
      </v-col>
      <v-col cols="12" md="6" xl="6" justify="center" align="center">
        <v-checkbox label="Mantener sesion iniciada"></v-checkbox>
      </v-col>
      <v-col cols="12" class="px-0">
        <v-btn class="py-6" block color="brand" dark @click="loginUser">Ingresar</v-btn>
      </v-col>
      <v-col cols="12" justify="center" align="center">
        <h5> También puedes iniciar sesion con tus redes </h5>
      </v-col>
      <v-col cols="6">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              class="float-right"
              icon
              color="brandsecondary"
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
              color="brandsecondary"
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
      <v-col>
        <RecoverPassword ref="recover" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import firebase from 'firebase/app'
import RecoverPassword from '@/pages/recoverpassword.vue'
import 'firebase/auth'
import RecoverPassword from '@/pages/recoverpassword.vue'

export default {
  components: {
    RecoverPassword
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    RecoverPassword
  },
  methods: {
    async loginUser() {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        ).then( function (user) {
          console.log(user)
          alert('Logged')
        }, function (error) {})
      } catch (e) {
        console.log(e)
          alert('Not logged, error ocurred')
      }
    },
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
    recoverPassword () {
      this.$refs.recover.dialog = true
    }
  },
}
</script>
