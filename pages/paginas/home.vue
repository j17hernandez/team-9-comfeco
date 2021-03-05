<template>
  <v-container>
    <v-container>
      <h1>Bienvenidos a Community Fest and Code</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat soluta
        dolor sapiente qui nulla aspernatur consequuntur similique adipisci,
        quaerat reiciendis quidem ab rerum consectetur quibusdam voluptate
        officia molestiae quod quia?
      </p> </v-container
    ><!--subheader home-->
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-row class="mx-4">
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
              </v-list-item-content>

              <v-list-item-action>
                <v-btn depressed elevation="0">
                  Unirme
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-divider :key="index"></v-divider>
          </template>
        </v-card> </v-col
      ><!--comunidades-->
      <v-col cols="5">
        <v-container class="clockContainer">
          <p class="clockStyle">
            {{clock()}}
          </p>
        </v-container><!--clock-->
      </v-col
      ><!--main-->
      <v-col cols="3">
        <v-card>
          <v-row class="mx-4">
            <v-col>Talleres</v-col>
            <v-col><a href="">Ver más</a></v-col>
          </v-row>
          <v-container>
            <v-select :items="items" label="Test" dense outlined>
            </v-select> </v-container
          ><!--Select courses-->
          <template v-for="(course, index) in courses">
            <v-list-item :key="index">
              <v-list-item-avatar>
                <v-icon v-if="isToday(course.hour)">mdi-checkbox-marked-circle</v-icon>
                <v-icon v-else>mdi-more</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="course.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="course.hour"
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
    </v-row> </v-container
  ><!--container principal-->
</template>
<script>
import basic from '@/mixins/basic.js'
export default {
  layout: 'login',
  mixins: [basic],
  mounted(){

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
          title: 'Comunidad de programadores',
          subtitle: 'texto de prueba'
        },
        {
          title: 'Comunidad React.js',
          subtitle: 'texto de prueba'
        },
        {
          title: 'Comunidad DEV',
          subtitle: 'texto de prueba'
        },
        {
          title: 'Comunidad Vue.js',
          subtitle: 'texto de prueba'
        }
      ],
      items: ['State of JavaScript', 'IA', 'Flutter'],
      courses: []
    }
  },
  mounted () {
    //  this.obtenerUser()
    this.allCourses();
  },
  methods: {
    clock: function() {
      const este = this
      if (this.setTimes.seconds !== 0) {
        setTimeout(() => {
          este.setTimes.seconds = este.setTimes.seconds - 1
        }, 1000)
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

      return `Days : ${this.setTimes.days} Hours : ${this.setTimes.hours} Minutes : ${this.setTimes.minutes} Seconds : ${this.setTimes.seconds}`
    },
    obtenerUser() {
      this._obtenerUsuario()
    },
    async allCourses (){
      const promiseFirebase = await fetch('https://team-vue-9-comfeco-default-rtdb.firebaseio.com/talleres.json', {method : 'GET'});
      const data = await promiseFirebase.json();
      for (const key in data) this.courses.push(data[key]);
    },
    isToday(arg){return Number.parseInt(arg)===(new Date().getHours)},
  },
  computed : {
    
  }
}
</script>
<style scoped>

.d-flex-p{
  display: flex;
}

.row-p{
  flex-direction: row;
}

.column-p{
  flex-direction: column;
}

.clockStyle{
  font-size: 1.3em;
  font-weight: bold;
}

.clockContainer{
  background-color: #aaaaaa;
}

</style>
