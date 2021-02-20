<template>
  <v-container style="background-color: white; max-width: 500px">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12" class="text-center">
        <h1 class="brand--text">Iniciar sesión</h1>
      </v-col>
      <v-col cols="12">
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
          :type="show1 ? 'text' : 'password'"
          :rules="[() => !!password || 'Este campo es requerido']"
          label="Contraseña"
          required
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show1 = !show1"
          @keyup.enter="loginUser()"
        ></v-text-field>
      </v-col>
      <v-col cols="12" v-if="exist_error">
        <v-alert type="error">
          <span> {{ menssage }} </span>
        </v-alert>
      </v-col>
      <v-col lg="6" sm="12">
        <v-btn outlined color="brand" block @click="recoverPassword()">
          <h6>¿Olvidaste tu contraseña?</h6>
        </v-btn>
      </v-col>
      <v-col lg="6" md="6" xl="6" offset-sm="12" sm="12" justify="center" align="center">
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
              @click="loginFacebook()"
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
import 'firebase/auth'
import RecoverPassword from '@/pages/recoverpassword.vue'
export default {
  components: {
    RecoverPassword
  },
  data() {
    return {
      email: '',
      password: '',
      exist_error: false,
      menssage: '',
      show1: false
    }
  },
  components: {
    RecoverPassword
  },
  methods: {
    async loginUser() {
      await this.$fire.auth.signInWithEmailAndPassword(
        this.email,
        this.password
      ).then((user) => {
        console.log(user)
        // localStorage.setItem('InfoUser', JSON.stringify(obj))
        this.observador()
      }, (error) => {
        this.exist_error = true
        if(error.code === 'auth/too-many-requests') {
          this.menssage = `
          El acceso a esta cuenta se ha desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede restaurarlo inmediatamente restableciendo su contraseña o puede intentarlo de nuevo más tarde. `
        } else if (error.code === 'auth/wrong-password') {
          this.menssage = 'La contraseña no es válida o el usuario no tiene contraseña.'
        }
        console.log(error)
      })
    },
    loginGoogle() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            const obj = {
              credential: result.credential,
              token: result.credential.accessToken,
              user: result.user,
            }
            localStorage.setItem('InfoUser', JSON.stringify(obj))
            this.observador()
          })
      } catch (error) {
        console.log(error)
      }
    },
    recoverPassword () {
      this.$refs.recover.dialog = true
    },
    observador () {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.isAuthenticated = true
          this.$router.push('paginas/')
          // var uid = user.uid
        } else {
          this.$router.push('/')
          this.isAuthenticated = false
        }
      })
    },
    loginFacebook () {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const obj = {
          credential: result.credential,
          user: result.user,
          accessToken: credential.accessToken
        }
        console.log('Info user', obj)
      })
      .catch((error) => {
        let errorCode = error.code
        let errorMessage = error.message
        // var email = error.email
        // var credential = error.credential
        console.log('Error', errorCode, errorMessage)
      })
    }
  },
}
</script>
