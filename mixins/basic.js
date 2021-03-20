import firebase from 'firebase/app'
import 'firebase/auth'

const basic = {
  watch: {
    isAuthenticated(val) {
      // if(!val){
      //   this.$router.push('/');
      // }
      if (val) {
        if (this.$route.path.includes('paginas/home/')) {
          // console.log('ya estoy')
        } else {
          this.$router.push('paginas/home/')
        }
      } else {
        this.$router.push('/')
      }
      // if (val) {
      //   if (this.$route.path.includes('paginas/home/')) {
      //     // console.log('ya estoy')
      //   } else {
      //     this.$router.push('paginas/home/')
      //   }
      // } else {
      //   this.$router.push('/')
      // }
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
        if (user) {
          this.isAuthenticated = true
          // this.usuario = user
          // var uid = user.uid
        } else {
          this.isAuthenticated = false
          this.$router.push('/')
        }
      })
    }
  }
}

export default basic