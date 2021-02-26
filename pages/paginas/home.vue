<template>
  <v-container style="margin: 20px">
    <v-container>
      <h1 class="text-center">Bienvenidos a Community Fest and Code</h1>
      <h3 class="text-center">¡Conoce gente, aprende y gana!</h3>
      <br>
      <p class="text-justify">
        La próxima edición regresa el 2022, en la cual se planea involucrar a todos los programadores independientemente
        del area de conocimiento que se encuentren, todo con un mismo proposito, aprender en comunidad
      </p> </v-container>
    <v-row>
      <v-col md="3" lg="3" sm="12">
        <v-card>
          <v-row>
            <v-col>Comunidades</v-col>
            <v-col><a href=''>Ver más</a></v-col>
          </v-row>
          <template v-for="(folder, index) in folders">
            <v-list-item :key="folder.title">
              <v-list-item-avatar>
                <v-icon class="grey lighten-1" dark>
                  mdi-folder
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="folder.title"></v-list-item-title>

                <v-list-item-subtitle
                  v-text="folder.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn depressed elevation="0">
                  Unirme
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-divider :key="index"></v-divider>
          </template>
        </v-card>
      </v-col>
      <!--comunidades-->
      <v-col md="6" lg="6" sm="12">
          <Carrusel :arrows="true" :hide_delimiter="true" :hide_delimiters="true" :cycle="true" :items="itemsLeaders" :colorText="'white'" />
          <Carrusel :arrows="false" :hide_delimiter="false" :cycle="false" :items="itemsSponsor" :colorText="'white'" />
        <v-container>
          reloj: horas
        </v-container>
        </v-col>
      <!--main-->
      <v-col md="3" lg="3" sm="12">
        <v-card>
          <v-row>
            <v-col>Talleres</v-col>
            <v-col><a href="">Ver más</a></v-col>
          </v-row>
          <v-container>
            <v-select :items="items" label="Test" dense outlined></v-select>
          </v-container>
          <!--Select courses-->
          <template v-for="(course, index) in courses">
            <v-list-item :key="index">
              <v-list-item-avatar>
                <v-icon>{{ course.icon }}</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="course.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="course.hour + ' ' + course.schedule"
                ></v-list-item-subtitle>
                <p>
                  By
                  <a :href="course.linkAuthor" target="_blank">{{
                    course.author
                  }}</a>
                </p>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-card>
      </v-col>
    <!--talleres-->
    </v-row>
    </v-container>
    <!--container principal-->
</template>
<script>
import basic from '@/mixins/basic.js'
import Carrusel from '@/components/carrusel.vue'

// Leaders
import Cristopher from '@/assets/img/team_Leaders/vue/cristopher_Paniagua.jpeg'
import Fernando from '@/assets/img/team_Leaders/vue/fernando_de_la_rosa.jpg'
import Ignacio from '@/assets/img/team_Leaders/vue/ignacioAnaya.jpeg'
import Manuel from '@/assets/img/team_Leaders/vue/manuelOjeda.jpg'
import Noemi from '@/assets/img/team_Leaders/vue/noemiLeon.jpg'
import Anartz from '@/assets/img/team_Leaders/angular/anartzMugikaLedo.jpg'
import Bezael from '@/assets/img/team_Leaders/angular/bezaelPerez.jpeg'
import Diego from '@/assets/img/team_Leaders/angular/diegoMontoya.jpg'
import Mayra from '@/assets/img/team_Leaders/angular/mayraRodríguez.jpg'
import Nicolas from '@/assets/img/team_Leaders/angular/nicolasMolina.jpg'
import Alejandro from '@/assets/img/team_Leaders/react/alejandroOrtiz.jpg'
import DiegoReact from '@/assets/img/team_Leaders/react/diegoPlascencia.jpg'
import LaraDiaz from '@/assets/img/team_Leaders/react/laraDiaz.jpg'
import Lina from '@/assets/img/team_Leaders/react/linaMaria.jpg'
import Vanessa from '@/assets/img/team_Leaders/react/vanessaMarely.jpg'
import ManuelMuñoz from '@/assets/img/team_Leaders/svelte/manuelMuñoz.png'
import Marcos from '@/assets/img/team_Leaders/svelte/marcosRivas.jpg'
import Oscar from '@/assets/img/team_Leaders/svelte/oscarBarajas.jpg'
import Silvestre from '@/assets/img/team_Leaders/svelte/silvestreVivo.jpeg'
// Sponsors
import Huawei from '@/assets/img/sponsors/huawei.png'
import FernandoSponsor from '@/assets/img/sponsors/fernandoHerrera.jpg'
import Leonidas from '@/assets/img/sponsors/leonidasEsteban.jpg'
import Stackly from '@/assets/img/sponsors/stackly.png'
import Jose from '@/assets/img/sponsors/joseDimas.jpg'
import Domini from '@/assets/img/sponsors/dominiCode.jpg'
import Tekki from '@/assets/img/sponsors/tekki_sin_fondo.png'
import Codelytv from '@/assets/img/sponsors/codelyTv.png'
import CodigoFacilito from '@/assets/img/sponsors/codigofacilito.webp'
import LatamDev from '@/assets/img/sponsors/latamDev.jpg'
import Egghead from '@/assets/img/sponsors/Egghead.jpg'

export default {
  layout: 'login',
  mixins: [basic],
  components: {
    Carrusel
  },
  data() {
    return {
      timeEvent: 2,
      setTimes: {
        days: 3,
        hours: 24,
        minutes: 60,
        seconds: 60
      },
      isAuthenticated: false,
      usuario: {},
      folders: [
        {
          title: 'adios',
          subtitle: 'texto de prueba'
        },
        {
          title: 'algos',
          subtitle: 'texto de prueba'
        },
        {
          title: 'algoss',
          subtitle: 'texto de prueba'
        },
        {
          title: 'algoa',
          subtitle: 'texto de prueba'
        }
      ],
      items: ['State of JavaScript', 'IA', 'Flutter'],
      courses: [
        {
          id: 1,
          title: 'State of JavaScript',
          hour: '16:00',
          schedule: 'PM',
          author: 'Fernando Herrera',
          linkAuthor: 'https://google.com',
          icon: ' mdi-checkbox-marked-circle'
        },
        {
          id: 2,
          title: 'State of JavaScript',
          hour: '13:00',
          schedule: 'PM',
          author: 'Fernando Herrera',
          linkAuthor: 'https://google.com',
          icon: 'mdi-more'
        },
        {
          id: 3,
          title: 'State of JavaScript',
          hour: '15:00',
          schedule: 'PM',
          author: 'Fernando Herrera',
          linkAuthor: 'https://google.com',
          icon: ' mdi-checkbox-marked-circle'
        }
      ],
      itemsLeaders: [
        {
          color: 'green',
          icon: 'mdi-vuejs',
          name: 'Cristopher Paniagua',
          image: Cristopher
        },
        {
          color: 'green',
          icon: 'mdi-vuejs',
          name: 'Fernando de la Rosa',
          image: Fernando
        },
        {
          color: 'green',
          icon: 'mdi-vuejs',
          name: 'Ignacio Anaya',
          image: Ignacio
        },
        {
          color: 'green',
          icon: 'mdi-vuejs',
          name: 'Manuel Ojeda',
          image: Manuel
        },
        {
          color: 'green',
          icon: 'mdi-vuejs',
          name: 'Noemi Leon',
          image: Noemi
        },
        {
          color: 'red',
          icon: 'mdi-angularjs',
          name: 'Anartz Mugika Ledo',
          image: Anartz
        },
        {
          color: 'red',
          icon: 'mdi-angularjs',
          name: 'Bezael Perez',
          image: Bezael
        },
        {
          color: 'red',
          icon: 'mdi-angularjs',
          name: 'Diego Montoya',
          image: Diego
        },
        {
          color: 'red',
          icon: 'mdi-angularjs',
          name: 'Mayra Rodríguez',
          image: Mayra
        },
        {
          color: 'red',
          icon: 'mdi-angularjs',
          name: 'Nicolas Molina',
          image: Nicolas
        },
        {
          color: 'blue_react',
          icon: 'mdi-react',
          name: 'Alejandro Ñáñez Ortiz',
          image: Alejandro
        },
        {
          color: 'blue_react',
          icon: 'mdi-react',
          name: 'Diego Plascencia',
          image: DiegoReact
        },
        {
          color: 'blue_react',
          icon: 'mdi-react',
          name: 'Lara Diaz',
          image: LaraDiaz
        },
        {
          color: 'blue_react',
          icon: 'mdi-react',
          name: 'Lina María Montaño',
          image: Lina
        },
        {
          color: 'blue_react',
          icon: 'mdi-react',
          name: 'Vanessa Marely',
          image: Vanessa
        },
        {
          color: 'red',
          icon: '',
          name: 'Manuel Muñoz',
          image: ManuelMuñoz
        },
        {
          color: 'red',
          icon: '',
          name: 'Marcos Rivas',
          image: Marcos
        },
        {
          color: 'red',
          icon: '',
          name: 'Oscar Barajas',
          image: Oscar
        },
        {
          color: 'red',
          icon: '',
          name: 'Silvestre Vivo',
          image: Silvestre
        },
      ],
      itemsSponsor: [
        {
          color: 'red',
          name: 'Huawei',
          image: Huawei
        },
        {
          color: 'red',
          name: 'Fernando Herrera',
          image: FernandoSponsor
        },
        {
          color: 'red',
          name: 'Leonidas Esteban',
          image: Leonidas
        },
        {
          color: 'red',
          name: 'Stackly Code',
          image: Stackly
        },
        {
          color: 'red',
          name: 'José Dimas Luján',
          image: Jose
        },
        {
          color: 'red',
          name: 'Domini Code',
          image: Domini
        },
        {
          color: 'red',
          name: 'Tekki Tv',
          image: Tekki
        },
        {
          color: 'red',
          name: 'CodelyTV',
          image: Codelytv
        },
        {
          color: 'red',
          name: 'LatamDEV',
          image: LatamDev
        },
        {
          color: 'red',
          name: 'Código facilito',
          image: CodigoFacilito
        },
        {
          color: 'red',
          name: 'EggHead',
          image: Egghead
        }
      ]
    }
  },
  mounted () {
    //  this.obtenerUser()
  },
  methods: {
    clock: function() {
      const este = this
      if (this.setTimes.seconds !== 0) {
        setTimeout(() => {
          este.setTimes.seconds = este.setTimes.seconds - 1
        }, 500)
      }

      if (this.setTimes.days !== 0) {
        this.setTimes.minutes =
          this.setTimes.seconds === 0
            ? this.setTimes.minutes - 1
            : this.setTimes.minutes
        this.setTimes.hours =
          this.setTimes.minutes === 0
            ? this.setTimes.hours - 1
            : this.setTimes.hours
        this.setTimes.days =
          this.setTimes.hours === 0
            ? this.setTimes.days - 1
            : this.setTimes.days

        this.setTimes.seconds =
          this.setTimes.seconds === 0 ? 60 : this.setTimes.seconds
        this.setTimes.minutes =
          this.setTimes.minutes === 0 ? 60 : this.setTimes.minutes
        this.setTimes.hours =
          this.setTimes.hours === 0 ? 24 : this.setTimes.hours
        this.setTimes.days = this.setTimes.days === 0 ? 0 : this.setTimes.days
      } else if (this.setTimes.days === 0) {
        alert('Se acabo el contador')
      }

      return `days : ${this.setTimes.days} hours : ${this.setTimes.hours} minutes : ${this.setTimes.minutes} seconds : ${this.setTimes.seconds}`
    },
    obtenerUser() {
      this._obtenerUsuario()
    }
  }
}
</script>
<style scoped></style>
