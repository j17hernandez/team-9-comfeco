import firebase from 'firebase/app'
import 'firebase/auth'
import Swal from 'sweetalert2'

const basic = {
  watch: {
    isAuthenticated(val) {
      if (val) {
        if (this.$route.path.includes('paginas/')) {
        } else {
          this.$router.push('paginas/')
        }
      } else {
        this.$router.push('/')
      }
    }
  },
  data () {
    return {
      firebase: firebase,
      usuario: {},
      isAuthenticated: false,
    }
  },
  mounted () {
    this._obtenerUsuario()
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.isAuthenticated = false
        localStorage.setItem('InfoUser', JSON.stringify({}))
      }).catch((error) => {
        console.log(error)
        // An error happened.
      })
    },
    _obtenerUsuario () {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const obj = {
            id: user.uid,
            email: user.email,
            photo: user.photoURL,
            displayName: user.displayName
          }
          localStorage.setItem('InfoUser', JSON.stringify(obj))
          // this.$store.commit('setIdUserLogged', user.uid)
            // console.log('user', user)
            this.isAuthenticated = true
          // this.usuario = user
        } else {
          this.isAuthenticated = false
          // Swal.fire('Advertencia', 'Este usuario no está autenticado, revisa tu correo y activa tu usuario', 'info')
          this.$router.push('/')
        }
      })
    }
  }
}

export default basic