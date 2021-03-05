<template>
  <v-app light>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      clipped
      fixed
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
    </v-navigation-drawer> -->
    <v-app-bar
      clipped-left
      fixed
      app
      color="white"
      class="px-12"
      width="100%"
      height="92"
    >
      <NuxtLink to="/">
        <img
          src="@/assets/img/svg/logo.svg"
          class="my-3"
          alt="Logo"
          width="225"
          height="60"
        />
      </NuxtLink>
    <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
    </v-app-bar>
    <v-main>
      <v-container fluid class="fill-height">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer padless>
      <v-col class="text-center py-6" cols="6">
        Copyright &copy; {{ new Date().getFullYear() }} Team-Vue-9-Comfeco
      </v-col>
      <v-col cols="6">
        <p>Síguenos en las redes</p>
        <v-btn icon v-for="(icon, index) in icons" :key="index" :href="icons[index].link" target="_blank">
          <!-- <v-icon large>{{ icons[index].icon }}</v-icon> -->
          <v-img :src="require(`~/assets/img/svg/${icons[index].icon}`)" width="35" height="35" />
        </v-btn>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import basic from '@/mixins/basic'
import Header from '@/layouts/header.vue'
export default {
  // mixins: [basic],
  components: {
    Header
  },
  data() {
    return {
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
      usuario: this.usuario,
      icons: [
        {
          icon: 'facebook.svg',
          link: 'https://www.facebook.com/groups/2637132626546045'
        },
        {
          icon: 'discord.svg',
          link: 'https://discord.com/invite/5Bb5yvzNPr'
        },
        {
          icon: 'youtube-icon.svg',
          link: 'https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew'
        }
      ]
    }
  }
}
</script>
