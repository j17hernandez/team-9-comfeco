<template>
    <v-container>
      <v-row>
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
      </v-row>
    </v-container>
</template>
<script>
// import firebase from 'firebase/app'
export default {
  props: {
    // observador: {
    //   type: Function
    // },
    firebase: Object
  },
  data(){
    return {
    }
  },
  methods: {
    loginGoogle() {
      try {
        const provider = new this.firebase.auth.GoogleAuthProvider()
        this.firebase
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
    observador () {
      this.firebase.auth().onAuthStateChanged((user) => {
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
      const provider = new this.firebase.auth.FacebookAuthProvider();
      this.firebase
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