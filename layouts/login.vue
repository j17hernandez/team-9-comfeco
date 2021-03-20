<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      v-if="!setMobile"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="white" app height="100">
      <v-toolbar-title>
        <NuxtLink to="/paginas">
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
        <v-btn text><a class="items" href="/paginas">Inicio</a></v-btn>
        <v-btn text><a class="items" href="#">Comunidades</a></v-btn>
        <v-btn text><a class="items" href="#">Talleres</a></v-btn>
        <v-btn text><a class="items" href="#">Creadores de contenido</a></v-btn>
      </v-toolbar-items>
      <v-col cols="2" class="user-toggle brandsecondary">
      <v-container style="width: 220px">
      <v-avatar>
        <v-img :src="urlPhoto"></v-img>
      </v-avatar>
      <span> {{ nickname }}</span>
    <div class="text-center float-right">
      <v-menu :nudge-width="200" transition="scale-transition" origin="right top">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" icon v-bind="attrs">
            <!-- <v-icon large color="white">mdi-cog</v-icon> -->
            <v-icon color="white">mdi-chevron-down</v-icon>
          </v-btn>
          <!-- <v-avatar v-on="on" v-bind="attrs" color="primary" size="56">
            <span>{{ user.email.substr("0", "2") }}</span>
          </v-avatar> -->
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn v-if="isAuthenticated === true" to="user/" >My Profile</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn v-if="isAuthenticated === true" @click="cerrarSesion()"
                >Cerrar sesion</v-btn
              >
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-container>
      </v-col>
      <!--d-flex .d-sm-none hidden-xs-and-up-->
      <v-app-bar-nav-icon v-show="!setMobile" @click.stop="drawer = !drawer" />
      <v-menu class="d-flex d-sm-none">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon
        ><!--boton de hamburguesa-->
      </v-menu>
    </v-app-bar>
    <v-main>
      <!-- <v-container fluid class="fill-height"> -->
      <nuxt />
      <!-- </v-container> -->
    </v-main>
    <v-footer padless>
      <v-col class="text-center py-6" cols="12">
        Copyright &copy; {{ new Date().getFullYear() }} Team-Vue-9-Comfeco
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import basic from "@/mixins/basic";
export default {
  mixins: [basic],
  data() {
    return {
      drawer: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-login",
          title: "Login",
          to: "/"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      isAuthenticated: false,
      usuario: {},
      is_mobile: false,
      urlPhoto: 'https://cdn.vuetifyjs.com/images/john.jpg',
      nickname: ''
    };
  },
  mounted() {
    this.getUserLogged()
  },
  computed: {
    setMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false;
        case "sm":
          return false;
        case "md":
          return true;
        case "lg":
          return true;
        case "xl":
          return true;
      }
    }
  },
  methods: {
    getUser() {
      this._obtenerUsuario();
    },
    cerrarSesion() {
      this.logout();
    },
    async getUserLogged() {
      const user = JSON.parse(localStorage.getItem('InfoUser'))
      if (user.photo) {
        this.urlPhoto = user.photo
      }
      if (user.displayName) {
        this.nickname = user.displayName.substring(0,10)
      }
      const url = this.$fire.firestore.collection('usuarios').where(`${user.id}`, '==', true)
      await url.get().then((resp) => {
        console.log('Response', resp)
      })
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
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0px !important;
}
</style>
