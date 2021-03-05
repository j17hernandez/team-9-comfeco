<template>
  <v-app>
    <v-app-bar color="white" app height="100">
      
          <v-toolbar-title>
            <NuxtLink to="/">
              <img
                src="@/assets/img/svg/logo.svg"
                class="my-3"
                alt="Logo"
                width="225"
                height="60"
              />
            </NuxtLink>
          </v-toolbar-title>
          <v-spacer></v-spacer>
            
          <v-toolbar-items class="hidden-sm-and-down">
            
            <v-btn text><a class="items" href="#">Inicio</a></v-btn>
            <v-btn text><a class="items" href="#">Comunidades</a></v-btn>
            <v-btn text><a class="items" href="#">Talleres</a></v-btn>
            <v-btn text><a class="items" href="#">Creadores de contenido</a></v-btn>
            <!-- <Header ref="header" :user="usuario" v-if="isAuthenticated === true" /> -->
            <v-col cols="2" class="user-toggle brandsecondary">
                <Header ref="header" :user="usuario" v-if="isAuthenticated === true" />
              </v-col>
          </v-toolbar-items>
          <!--d-flex .d-sm-none hidden-xs-and-up-->
          <v-menu class="d-flex d-sm-none">
              <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon><!--boton de hamburguesa-->
          </v-menu>
        <!-- <v-navigation-drawer
        v-model="drawer"
            absolute
            temporary
          >
              <v-btn text><a class="items" href="#">Inicio</a></v-btn>
              <v-btn text><a class="items" href="#">Comunidades</a></v-btn>
              <v-btn text><a class="items" href="#">Talleres</a></v-btn>
              <v-btn text><a class="items" href="#">Creadores de contenido</a></v-btn>
              
              <v-col cols="2" class="user-toggle brandsecondary">
                <Header ref="header" :user="usuario" v-if="isAuthenticated === true" />
              </v-col>
          </v-navigation-drawer> -->
       
    </v-app-bar>
    <v-main>
      <v-container fluid class="fill-height">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer padless>
      <v-col class="text-center py-6" cols="12">
        Copyright &copy; {{ new Date().getFullYear() }} Team-Vue-9-Comfeco
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import basic from '@/mixins/basic'
import Header from '@/layouts/header.vue'
export default {
  mixins: [basic],
  components: {
    Header
  },
  mounted () {
    // this.getUser()
  },
  data() {
    return {
      drawer : false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-login',
          title: 'Login',
          to: '/'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      isAuthenticated: false,
      usuario: {},
      is_mobile: false
    }
  },
  computed: {
    setMobile () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return false
        case 'sm': return false
        case 'md': return true
        case 'lg': return true
        case 'xl': return true
      }
    }
  },
  methods: {
    getUser () {
      this._obtenerUsuario()
    }
  }
}
</script>
<style>
a.items {
  color: black;
  text-decoration: none;
}
.user-toggle {
  /* background-color: cornflowerblue; */
  height: min-content;
  border-radius: 40px 0 0 40px;
  line-height: 60px;
}
.v-toolbar__content, .v-toolbar__extension {
  padding: 0px !important;
}
</style>
