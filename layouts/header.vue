<template>
  <v-container style="width: 220px">
    <v-avatar>
      <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
    </v-avatar>
    <span>Nickname</span>
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
              <v-btn v-if="isAuthenticated === true" @click="cerrarSesion()"
                >Cerrar sesion</v-btn
              >
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-container>
</template>
<script>
import basic from '@/mixins/basic'
export default {
  mixins: [basic],
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {
      isAuthenticated: false
    }
  },
  methods: {
    cerrarSesion() {
      this.logout();
    }
  }
}
</script>
