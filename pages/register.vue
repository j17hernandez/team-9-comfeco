<template>
  <v-container style="max-width: 500px" class="bg-card">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12">
        <v-text-field
          v-model="username"
          outlined
          :rules="[() => !!username || 'Este campo es requerido']"
          label="Nick Name"
          required
        ></v-text-field>
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
        <v-text-field
          v-model="confirmar"
          outlined
          type="password"
          :rules="[() => !!confirmar || 'Este campo es requerido']"
          label="Confirmar Contraseña"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12"  class="px-0">
        <v-btn class="py-6" block color="brand" dark @click="createUser()">
          Registrarse
        </v-btn>
      </v-col>
      <v-col class="my-6" cols="12" justify="center" align="center">
        <h5> O registrate usando </h5>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12">
        <LoginSocial :observador="observador" :firebase="firebase" />
      </v-col>
      <v-col class="my-4">
        <span>
          Al registrarte estas aceptando los
          <a>Términos y condiciones</a>, y la <a>Política de privacidad</a> y
          protección de datos de COMFECO
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import firebase from 'firebase/app'
import LoginSocial from '@/components/loginSocial'
export default {
  components: {
    LoginSocial
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmar: '',
      firebase: firebase
    }
  },
  methods: {
    async createUser() {
      const email = this.email
      const password = this.password
      const username = this.username
      const confirmar = this.confirmar
      if (password === confirmar) {
        try {
          await this.$fire.auth.createUserWithEmailAndPassword(
            email,
            password
          ).then( function (user) {
            alert('User created', user)
          }, function (error) {
            alert('Error ocurred while was creating user', error)
          })

          // await this.$fire.auth.onAuthStateChanged(function(user) {
          //   user.updateProfile({
          //     displayName: username
          //   }).then(function() {
          //     alert('User created')
          //   }, function(error) {
          //     alert('Error ocurred, add displayname fail')
          //   });
          // })
          await this.$fire.firestore.collection('usuarios').add({
            email: email,
            nickname: username
          })
          // this.$router.replace('/login')
        } catch (e) {
          console.log(e)
          alert('Error register process fail')
        }
      }
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
    }
  }
}
</script>
