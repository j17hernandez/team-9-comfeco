<template>
  <v-app light>
    <v-app-bar :clipped-left="clipped" fixed app color="white" class="px-12" height="92">
    <v-row justify-xl="space-around">
        <v-col>
            <NuxtLink to="/">
                <img src="@/assets/img/svg/logo.svg" class="my-3" alt="Logo" width="225" height="60">
            </NuxtLink>
        </v-col>
        <v-col>
            <v-container>
                <v-row align-content="space-between">
                    <v-col><a class="items" href="#">Inicio</a></v-col>
                    <v-col><a class="items" href="#">Comunidades</a></v-col>
                    <v-col><a class="items" href="#">Talleres</a></v-col>
                    <v-col><a class="items" href="#">Creadores de contenido</a></v-col>
                </v-row>
            </v-container>
        </v-col>
        <v-col>
            <v-container class="user-toggle">
                <v-row justify="center">
                    <v-col cols="3">
                        <v-btn elevation="0"><v-icon dark > mdi-alarm </v-icon></v-btn>
                    </v-col>
                    <v-col>
                        <v-container>
                            <v-row>
                                <v-col cols="4">
                                    <v-avatar>
                                        <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                        >
                                    </v-avatar>
                                </v-col>
                                <v-col cols="4">
                                    <p>name</p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
      
      
      
    </v-app-bar>
    <v-main>
      <v-container fluid class="fill-height">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer padless>
      <v-col
        class="text-center py-6"
        cols="12"
      >
       Copyright &copy; {{ new Date().getFullYear() }} Team-Vue-9-Comfeco
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-login',
          title: 'Login',
          to: '/',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
}
</script>
<style scoped>
    a.items{
        color: black;
        text-decoration: none;
    }
    .user-toggle{
        background-color: cornflowerblue;
        border-radius: 40px 0 0 40px;
    }
</style>