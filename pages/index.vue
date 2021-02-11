<template>
  <v-row justify="center" align="center" class="">
    <v-col cols="12" sm="8" md="6">
      <v-tabs v-model="tab" align-with-title>
        <v-tabs-slider color="primary"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card elevation="9">
            <Login ref="login" />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card elevation="9">
            <Register ref="register" />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>
import Login from '@/pages/login.vue'
import Register from '@/pages/register.vue'
export default {
  components: { Login, Register },
  data() {
    return {
      tab: true,
      items: ['Inicia sesión', 'Registrar'],
    }
  },
}
</script>