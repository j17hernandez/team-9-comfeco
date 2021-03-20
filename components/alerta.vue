<template>
  <v-dialog v-model="dialogAlert" persistent max-width="500">
    <v-card>
      <v-card-title>
        <div style="display: inline-grid;">
          <!-- <v-icon x-large :color="colorIcon" class="text-center">{{ icon }}</v-icon> -->
        </div>
        <v-spacer></v-spacer>
        <h4>
          {{ title }}
        </h4>
      </v-card-title>
      <v-card-text>
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="btnCancelar" outlined color="red" @click="dialogAlert = false" >Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="btnAceptar" outlined color="success" @click="dialogAlert = false">Aceptar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    btnAceptar: {
      type: Boolean,
      default: true
    },
    btnCancelar: {
      type: Boolean,
      default: false
    },
    colorIcon: {
      type: String,
      default: 'info'
    },
    icon: {
      type: String,
      default: 'mdi-information-outline'
    }
  },
  data() {
    return {
      dialogAlert: false
    }
  }
}
</script>