<template>
  <v-container>
    <h3 v-if="!isAuthenticated">Hola {{ usuario.email }}</h3>
  </v-container>
</template>
<script>

import basic from '@/mixins/basic.js'
export default {
  // layout: 'default',
  mixins: [basic],
  data () {
    return {
      isAuthenticated: false,
      usuario: {}
    }
  },
  mounted () {
    this.obtenerUser()
  },
  methods: {
    obtenerUser() {
      this._obtenerUsuario()
    }
  }
}
</script>
