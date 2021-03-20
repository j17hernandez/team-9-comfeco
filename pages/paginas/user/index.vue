<template>
    <v-container >
        <v-container >
            <v-tabs v-model="tab" align-with-title grow>
                <v-tabs-slider color="brandsecondary"></v-tabs-slider>
                <v-tab
                    v-for="(option, index) in subMenuOptions"
                    :key="index"
                >
                    <h3>{{option.title}}</h3>
                </v-tab>
            </v-tabs>
            <!-- <v-row
                justify="space-between"
            >
                <v-col
                    v-for="option in subMenuOptions"
                    :key="option.title"
                    cols="2"
                    align-self="center"
                    class="colortest"
                >
                    <a :href="option.route">
                        <v-container>{{option.title}}</v-container>
                    </a>
                </v-col>
            </v-row> -->
        </v-container><!--submenu-->
        <v-tabs-items v-model="tab">
            <v-tab-item>
                <v-row
                    class="my-2"
                >
                    
                    <Profile
                        ref="profile"
                        :circlesProfile="circlesProfile"
                    /><!--Aside profile-->
                    <Maininfo
                        ref="maininfo"
                        :circlesProfile="circlesProfile"
                    /><!--Info del main-->
                    <Eventsuser
                        ref="eventsuser"
                        :subMenuOptions="subMenuOptions"
                    /><!--aside avents-->
                
                </v-row>
            </v-tab-item><!--main-->
            <v-tab-item>
                <Insignia ref="insignia"/>
            </v-tab-item><!--insignia-->
            <v-tab-item>
                <Group ref="group" />
            </v-tab-item>
            <v-tab-item>
                <Eventsusertab ref="eventsuser" />
            </v-tab-item>
        </v-tabs-items>
            
        <v-container>

        </v-container><!--Content-->
    </v-container><!--Main-->
</template>
<script>
import firebase from 'firebase';
import Profile from '@/components/user/profile.vue';
import Maininfo from '@/components/user/maininfo.vue';
import Eventsuser from '@/components/user/eventsuser.vue';
import Insignia from '@/components/user/insignia/insignia.vue';
import Group from '@/components/user/group/group.vue';
import Eventsusertab from '@/components/user/eventsuserd/eventsuserd.vue';

export default {
    layout : 'login',
    components : {
        Profile,
        Maininfo,
        Eventsuser,
        Insignia,
        Group,
        Eventsusertab,
    },
    created(){
        this.testFireStore();
    },
    mounted(){
        this.variablesGlobales();
    },
    data(){
        return{
            tab: true,
            subMenuOptions : [
                {
                    title : 'Mi perfil',
                    route : 'https://www.google.com',
                    icon  : ''
                },
                {
                    title : 'Insignias',
                    route : 'https://www.google.com',
                    icon  : ''
                },
                {
                    title : 'Grupos',
                    route : 'https://www.google.com',
                    icon  : ''
                },
                {
                    title : 'Eventos',
                    route : 'https://www.google.com',
                    icon  : ''
                }
            ],
            circlesProfile : [
                {
                    title : 't-1'
                },
                {
                    title : 't-2'
                },
                {
                    title : 't-3'
                },
                {
                    title : 't-4'
                },
                {
                    title : 't-5'
                },

            ]
        };
    },//Data
    methods : {
        testFireStore(){
            const keyFire = {
                apiKey: "AIzaSyCw9kRIAtojtsFII3NUgcuZMd7BQoQxCug",
                appId: "1:288922534401:web:e4ebaa5664bc1396ae3600",
                authDomain: "team-vue-9-comfeco.firebaseapp.com",
                databaseURL: "https://team-vue-9-comfeco-default-rtdb.firebaseio.com",
                measurementId: "G-DNBS9RPX82",
                messagingSenderId: "288922534401",
                projectId: "team-vue-9-comfeco",
                storageBucket: "team-vue-9-comfeco.appspot.com",
            };
            // console.log('Firestore');
            // console.log(firebase);
            firebase.app();
            // console.log('firestore app');
            // console.log(firebase.firestore().app);
            const db = firebase.firestore();
            // console.log('DB Collection');
            // console.log(db);
            db.collection('usuarios')
                .get()
                .then(res=>{
                    // res.forEach(obj=>{
                    //     console.log(obj.data());
                    // });
                })
                .catch(err=>{
                    console.log('Error');
                    console.log(err);
                });


        },
        variablesGlobales(){
            localStorage.setItem("storageGrupo", {
                'grupoUnido' : false,
                'nombreGrupo' : 'Aun no estas en ningun grupo',
                'techsGrupoStore' : []
            });
            localStorage.setItem("eventoAgregadoLocal", {
                title : ''
            });
        }
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
.center-custom{    
}
</style>