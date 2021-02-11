<template>
  <v-container style="background-color: white">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="10">
        <v-text-field
          v-model="username"
          outlined
          :rules="[() => !!username || 'Este campo es requerido']"
          label="Nick Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          outlined
          type="email"
          :rules="[() => !!email || 'Este campo es requerido']"
          label="Correo electronico"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          outlined
          type="password"
          :rules="[() => !!password || 'Este campo es requerido']"
          label="Contraseña"
          required
        ></v-text-field>
        <v-text-field
          v-model="confirmar"
          outlined
          type="password"
          :rules="[() => !!confirmar || 'Este campo es requerido']"
          label="Confirmar Contraseña"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn block color="green" dark>Registrarse</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" justify="center" align="center">
        <span>o registrate usando</span>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="6">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              slot="activator"
              class="float-right"
              icon
              color="primary"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon x-large>mdi-facebook</v-icon>
            </v-btn>
          </template>
          <span>Registrate con Facebook</span>
        </v-tooltip>
      </v-col>
      <v-col cols="6" class="mt-1">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn color="red" class="float-left" icon v-bind="attrs" v-on="on">
              <v-icon x-large>mdi-google-plus</v-icon>
            </v-btn>
          </template>
          <span>Registrate con Google</span>
        </v-tooltip>
      </v-col>
      <v-col>
        <span>
          Al registrarte estas aceptando los
          <a>Términos y condiciones</a>, y la <a>Política de privacidad</a> y
          protección de datos de COMFECO
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmar: '',
    }
  },
}
</script>
