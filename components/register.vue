<template>
  <v-container style="max-width: 500px" class="bg-card">
  <ValidationObserver ref="observerRegister" v-slot="{ validate, reset }">
    <form>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12">
        <ValidationProvider v-slot="{ errors }" name="Nombre de usuario" rules="required">
          <v-text-field
            v-model="username"
            outlined
            type="text"
            :error-messages="errors"
            label="Nombre de usuario"
            required
          ></v-text-field>
        </ValidationProvider>
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
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            :error-messages="errors"
            label="Contraseña"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="Confirmar" rules="required">
          <v-text-field
            v-model="confirmar"
            outlined
            :type="show2 ? 'text' : 'password'"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show2 = !show2"
            :error-messages="errors"
            label="Confirmar Contraseña"
            required
          ></v-text-field>
        </ValidationProvider>
      </v-col>
      <v-col cols="12"  class="px-0">
        <v-btn class="py-6" block color="brand" dark @click="createUser()">
          Registrarse
        </v-btn>
      </v-col>
      <v-col cols="12" justify="center" align="center">
        <h5> O registrate usando </h5>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12">
        <LoginSocial :observador="observador" :firebase="firebase" />
      </v-col>
      <v-col cols="12">
        <span>
          Al registrarte estas aceptando los
          <a>Términos y condiciones</a>, y la <a href="politicas/" target="_blank">Política de privacidad</a> y
          protección de datos de COMFECO
        </span>
      </v-col>
      <v-col>
        <Alerta ref="alerta" :icon="icon" :colorIcon="colorIcon" :title="title"  />
      </v-col>
    </v-row>
  </form>
</ValidationObserver>
  </v-container>
</template>
<script>
import firebase from 'firebase/app'
import LoginSocial from '@/components/loginSocial'
import Alerta from '@/components/alerta'
import Swal from 'sweetalert2'
export default {
  components: {
    LoginSocial,
    Alerta
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmar: '',
      firebase: firebase,
      title: '',
      icon: '',
      show1: false,
      show2: false,
      colorIcon: 'info'
    }
  },
  mounted() {
    // this.$refs.alerta.dialogAlert = true
  },
  methods: {
    createUser() {
      this.$refs.observerRegister.validate().then( (valid) => {
        if (valid) {
          const email = this.email
          const password = this.password
          const username = this.username
          const confirmar = this.confirmar
          if (password === confirmar) {
            try {
              this.$fire.auth.createUserWithEmailAndPassword(
                email,
                password
              ).then( (user) => {
                this.verificar()
                this.$fire.firestore.collection('usuarios').doc(`${user.user.uid}`).set({
                  email: email,
                  nickname: username
                })
              }, (error) => {
                Swal.fire('Oups!', 'Se produjo un error al crear el usuario', 'error')
              })
            } catch (e) {
              Swal.fire('Error en el proceso de registro', 'error')
            }
          } else {
             Swal.fire('Oups!', 'Las contraseñas no coinciden', 'error')
          }
        } else {
           Swal.fire('Oups!', 'Asegurate de llenar todos los campos', 'error')
        }
      })
    },
    observador () {
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          if (user.emailVerified === true) {
            this.isAuthenticated = true
            this.$router.push('paginas/')
            // var uid = user.uid
          }
        
        } else {
          this.$router.push('/')
          this.isAuthenticated = false
        }
      })
    },
    verificar () {
      const user = firebase.auth().currentUser
      user.sendEmailVerification().then(() => {
        Swal.fire('Excelente',`Se ha enviado un correo electrónico a ${user.email}, debes acceder a tu correo para activar tu cuenta, no te olvides de revisar la carpeta de spam o correos no deseados en caso de no encontrarlo`, 'success')
      }, (error) => {
        console.log('error', error)
        Swal.fire('Oops Ocurrio un error al enviar el correo', 'error')
      })
      this.$refs.observerRegister.reset()
    }
  }
}
</script>
