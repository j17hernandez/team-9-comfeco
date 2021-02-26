<template>
  <v-container>
    <v-carousel
      :cycle="cycle"
      height="200px"
      width="100%"
<<<<<<< HEAD
      :hide-delimiter-background="hide_delimiter"
      show-arrows-on-hover
=======
      :hide-delimiter-background="hide_delimiterBg"
      show-arrows-on-hover
      :hide-delimiters="hide_delimiters"
>>>>>>> a7b82a8a012c1d2a9361f8529b1338f85537b7ed
      :show-arrows="arrows"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        style="background-size: contain !important;"
        :src="items[i].image"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      <v-row class="fill-height" justify="center" style="align-items: flex-end; margin-top: -2em;">
        <div class="text-center">
          <v-icon v-if="icon===true && items[i].icon != ''" :color="items[i].color" large> {{items[i].icon }} </v-icon>
          <img src="@/assets/img/png/svelte.png" width="40" height="40" v-else >
          <v-spacer></v-spacer>
          <div>
            <h2 :style="`color: ${colorText}; background: #69156A`">{{ items[i].name }}</h2>
          </div>
        </div>
      </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>
<script>
export default {
  layout: 'login',
  props: {
    arrows: {
      type: Boolean    
    },
    items: {
      type: Array
    },
    icon: {
      type: Boolean,
      default: true
    },
    hide_delimiterBg: {
      type: Boolean
    },
    hide_delimiters: {
      type: Boolean,
      default: false
    },
    cycle: {
      type: Boolean
    },
    colorText: {
      type: String,
      default: 'white'
    }
  },
  data() {
    return {}
  }
}
</script>
<style>
.v-image__image--cover {
  background-size: contain !important;
}
</style>