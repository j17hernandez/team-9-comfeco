<template>
  <v-app light>
    <v-app-bar :clipped-left="clipped" fixed app color="white" class="px-12" height="92">
      <NuxtLink to="/">
        <img src="@/assets/img/svg/logo.svg" class="my-3" alt="Logo" width="225" height="60">
      </NuxtLink>
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