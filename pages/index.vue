<template>
  <v-row justify="center" align="center" class="">
    <v-col cols="12" sm="4" md="6" justify="center" align="center" class="d-none d-sm-block">
      <img v-if="tabSelected" src="@/assets/img/svg/terminal_useradd.svg" style="width: 80%">
      <img v-else src="@/assets/img/svg/terminal_userswitch.svg" style="width: 80%">
    </v-col>

    <v-col cols="12" sm="8" md="4">
      <v-tabs v-model="tab">
        <v-tabs-slider color="brandsecondary"></v-tabs-slider>
        <v-tab v-for="(item, index) in items" :key="index" @click="index === 1 ? tabSelected=true:tabSelected=false">
          <h3 class="brand--text">{{ item }}</h3>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card elevation="9" class="py-10">
            <Login ref="login" />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card elevation="9" class="py-10">
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
      tabSelected: false
    }
  },
}
</script>