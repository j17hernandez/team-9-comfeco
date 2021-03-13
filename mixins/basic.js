import firebase from 'firebase/app'
import 'firebase/auth'
import Swal from 'sweetalert2'

const basic = {
  watch: {
    isAuthenticated(val) {
      // if(!val){
      //   this.$router.push('/');
      // }
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
  mounted() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.isAuthenticated = true
    //     this.usuario = user
    //     // var uid = user.uid
    //   } else {
    //     this.isAuthenticated = false
    //     this.$router.push('/')
    //   }
    // })
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
        console.log('user', user)
        if (user.emailVerified === true) {
            this.isAuthenticated = true
          // this.usuario = user
          // var uid = user.uid
        } else {
          this.isAuthenticated = false
          Swal.fire('Advertencia', 'Este usuario no está autenticado, revisa tu correo y activa tu usuario', 'info')
          this.$router.push('/')
        }
      })
    }
  }
}

export default basic