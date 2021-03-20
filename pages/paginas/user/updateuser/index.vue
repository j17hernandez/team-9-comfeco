<template>
    <v-container>
       <form action="">
           <v-container>
               <v-row>
                   <v-col>
                       <v-container class="my-4">
                           <v-avatar>
                               <v-img
                                    class="rounded-circle"
                                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                                >
                                </v-img>
                           </v-avatar>
                            <v-file-input
                                prepend-inner-icon="mdi-camera"
                                prepend-icon=""
                            >
                            </v-file-input>
                    </v-container>
                   </v-col>
               </v-row>
           </v-container>
            <v-container>
               <v-row>
                   <v-col>
                       <v-text-field
                            label="NickName"
                            outlined
                       >
                       </v-text-field>
                    </v-col>
                   <v-col>
                        <v-text-field
                            label="Email"
                            outlined
                        >
                        </v-text-field>
                   </v-col>
               </v-row>
            </v-container><!--nick and mail-->
            <v-container>
               <v-row>
                   <v-col>
                       <v-text-field
                        label="Genero"
                        outlined
                       >
                       </v-text-field>
                    </v-col>
                   <v-col>
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="date"
                                    label="Fecha de nacimiento"
                                    append-icon="mdi-calendar"
                                    readonly
                                    outlined
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                ref="picker"
                                v-model="date"
                                :max="new Date().toISOString().substr(0, 10)"
                                min="1950-01-01"
                                @change="save"
                            ></v-date-picker>
                        </v-menu>
                   </v-col>
                   <v-col>
                        <v-text-field
                            label="Pais"
                            outlined
                        >
                        </v-text-field>
                   </v-col>
               </v-row>
           </v-container><!--gender, date and city-->

            <v-container>
               <v-row>
                   <v-col>
                       <v-text-field
                            label="Contraseña"
                            type="password"
                            outlined
                       >
                       </v-text-field>
                    </v-col>
                   <v-col>
                        <v-text-field
                            label="Confirmar contraseña"
                            type="password"
                            outlined
                        >
                        </v-text-field>
                   </v-col>
               </v-row>
            </v-container><!--password-->

            <v-container>
               <v-row>
                   <v-col>
                       <v-text-field
                            label="facebook.com/"
                            prepend-icon="mdi-facebook"
                            outlined
                       >
                       </v-text-field>
                    </v-col>
                   <v-col>
                        <v-text-field
                            label="github.com/"
                            prepend-icon="mdi-github"
                            outlined
                        >
                        </v-text-field>
                   </v-col>
               </v-row>
               <v-row>
                   <v-col>
                       <v-text-field
                            label="linkedin.com/"
                            prepend-icon="mdi-linkedin"
                            outlined
                       >
                       </v-text-field>
                    </v-col>
                   <v-col>
                        <v-text-field
                            label="twitter.com/"
                            prepend-icon="mdi-twitter"
                            outlined
                        >
                        </v-text-field>
                   </v-col>
               </v-row>
            </v-container><!--social networks-->
            <v-container>
                <v-textarea
                    outlined
                    name="input-7-4"
                    label="Biografia"
                ></v-textarea>
            </v-container><!--bio-->

       </form>
    </v-container><!--Main form-->
</template>
<script>
export default {
    layout : 'login',
    data(){
        return{
            date: null,
            menu: false,
        };
    },//Data
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },
}
</script>
<style scoped>
a{
    text-decoration: none;
}
.spaceAround{
    justify-content: space-around;
}
.colortest{
    background-color: aqua;
}
.select-img{
    height: 30vh;
    width: 30vw;
    border-radius: 100%;
}
</style>