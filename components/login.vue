<template>
  <v-container style="background-color: white; max-width: 500px">
      <v-row no-gutters justify="center" align="center">
        <!-- <v-col cols="12" class="text-center">
          <h1 class="brand--text">Iniciar sesión</h1>
        </v-col> -->
        <v-col cols="12">
        <ValidationObserver ref="observerLogin" v-slot="{ validate, reset }">
        <form>
          <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
          <v-text-field
            v-model="email"
            outlined
            type="email"
            :error-messages="errors"
            label="Correo electronico"
            required
          ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="Contraseña" rules="required">
          <v-text-field
            v-model="password"
            outlined
            :type="show1 ? 'text' : 'password'"
            :error-messages="errors"
            label="Contraseña"
            required
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            @keyup.enter="loginUser()"
          ></v-text-field>
          </ValidationProvider>
          </form>
          </ValidationObserver>
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
        <v-col cols="12">
          <LoginSocial :firebase="firebase" />
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
import RecoverPassword from '@/components/recoverpassword.vue'
import LoginSocial from '@/components/loginSocial.vue'
export default {
  components: {
    RecoverPassword,
    LoginSocial
  },
  data() {
    return {
      email: '',
      password: '',
      exist_error: false,
      menssage: '',
      show1: false,
      firebase: firebase,
    }
  },
  components: {
    RecoverPassword,
    LoginSocial
  },
  mounted () {
    this.observador()
  },
  methods: {
    loginUser() {
      this.$refs.observerLogin.validate().then( (valid) => {
        if (valid) {
          this.$fire.auth.signInWithEmailAndPassword(
            this.email,
            this.password
          ).then((user) => {
            console.log(user)
            this.observador()
          }, (error) => {
            this.exist_error = true
            if(error.code === 'auth/too-many-requests') {
              this.menssage = `
              El acceso a esta cuenta se ha desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede restaurarlo inmediatamente restableciendo su contraseña o puede intentarlo de nuevo más tarde. `
            } else if (error.code === 'auth/wrong-password') {
              this.menssage = 'La contraseña no es válida o el usuario no tiene contraseña.'
            } else if (error.code === 'auth/invalid-email') {
              this.menssage = 'La dirección de correo electrónico tiene un formato incorrecto'
            } else if (error.code === 'auth/user-not-found') {
              this.menssage = 'No hay ningún registro de usuario correspondiente a este identificador. Es posible que el usuario haya sido eliminado'
            }
            console.log(error)
          })
        }
      })
    },
    recoverPassword () {
      this.$refs.recover.dialog = true
    },
    observador () {
      firebase.auth().onAuthStateChanged((user) => {
        if ( user && user.emailVerified === true) {
          this.isAuthenticated = true
          this.$router.push('paginas/')
          // var uid = user.uid
        } else {
          this.$router.push('/')
          this.isAuthenticated = false
        }
      })
    }
  },
}
</script>
