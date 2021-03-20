<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-container>
                    <v-container>
                        <v-row>
                            <v-col><h3>Mi grupo</h3></v-col>
                            <v-col><a href="">Ir al grupo</a></v-col>
                        </v-row>
                    </v-container>
                    <v-container class="px-5 colortest">
                        <v-row>
                            <v-col><h4>{{nombreGrupo}}</h4></v-col>
                            <v-col>
                                <v-avatar
                                    size="30"
                                >
                                    <v-img
                                        src="data:image/png;base64,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"
                                    ></v-img>
                                </v-avatar>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-list>
                        <template v-for="(tech, index) in techsDelGrupo[0]">
                                <v-list-item
                                    :key="tech.name"
                                >
                                    <v-list-item-avatar>
                                        <v-img
                                            src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                                        ></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="tech.name"></v-list-item-title>
                                        <v-list-item-subtitle v-text="tech.level"></v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <p>{{tech.puesto}}</p>
                                    </v-list-item-action>
                                </v-list-item>
                                
                            
                            <v-divider
                                v-if="index < techs.length - 1"
                                :key="index"
                            ></v-divider>
                        </template>
                    </v-list>
                </v-container>
            </v-col><!--aside-->
            <v-col cols="8">
                <v-container>
                    <form action="">
                        <v-row>
                            <v-col>
                                <v-select
                                    :items="testArray"
                                    label="Filtrar por lenguaje"
                                    outlined
                                >
                                </v-select>
                            </v-col>
                            <v-col>
                                <v-text-field
                                    outlined
                                    placeholder="Buscar grupo"
                                    append-icon="mdi-circle"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </form>
                </v-container>
                <v-row>
                    <v-col
                        cols="3"
                        v-for="(group, index) in groups"
                        :key="group.nombreGrupo"
                    >
                        <v-card>
                            <v-img
                                src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                            >
                                <v-app-bar
                                    flat
                                    color="rgba(0, 0, 0, 0)"
                                >
                                    <v-spacer>
                                    </v-spacer>
                                    <v-btn
                                        icon
                                        class="mr-3"
                                        color="white"
                                    >
                                        <v-icon>mdi-share-variant</v-icon>
                                    </v-btn>
                                </v-app-bar>
                            </v-img>
                            <v-container class="colortest my-3">
                                <div>
                                    <h4>{{group.language}}</h4>
                                </div>
                            </v-container>
                            <v-container>
                                <h4>
                                    {{group.nombreGrupo}}
                                </h4>
                            </v-container>
                            <v-card-text>
                                {{group.descriptionGroup}}
                            </v-card-text>
                            <v-container>
                                <v-btn
                                    outlined
                                    rounded
                                    color="success"
                                    v-if="!group.unido"
                                    @click="unirAlGrupo(index)"
                                >
                                    Unirse
                                </v-btn>
                                <v-btn
                                    outlined
                                    rounded
                                    color="error"
                                    v-else
                                    @click="salirDelGrupo(index)"
                                >
                                    Salir
                                </v-btn>
                            </v-container>
                                                      
                        </v-card>
                    </v-col>
                </v-row>
            </v-col><!--main-->
        </v-row>
    </v-container><!--aside & main-->
</template>

<script>

import firebase from 'firebase';
import Swal from 'sweetalert2';


export default {
    props : {

    },
    async mounted(){
        
        await this.allGroups();
        
    },
    data(){
        return{
            testArray : [
                'JavaScript',
                'Node',
                'Laravel',
                'Java',
                'TypeScript',
                'React',
                'Vue',
                'Svelte'
            ],
            techs : [
                {
                    name : 'JuanSecu',
                    level : 'Novato',
                    position : 'Integrante'
                },
                {
                    name : 'JuanSecus',
                    level : 'Novato',
                    position : 'Integrante'
                },
                {
                    name : 'JuanJo',
                    level : 'Medio',
                    position : 'Integrante'
                },
                {
                    name : 'LuisLiraC',
                    level : 'Avanzado',
                    position : 'Lider'
                },
                {
                    name : 'JCruz',
                    level : 'Novato',
                    position : 'Integrante'
                },
                {
                    name : 'Fede',
                    level : 'Apenas aprendiendo',
                    position : 'Integrante'
                },
            ],
            groups : [],
            techsDelGrupo : [],
            unido : false,
            nombreGrupo : 'Aun no estas en ningun grupo',
        };
    },
    methods : {
        async allGroups(){
            const promiseFirebase = await fetch('https://team-vue-9-comfeco-default-rtdb.firebaseio.com/grupos.json');
            const data = await promiseFirebase.json();
            if(data){
                const grupos = data['grupo'];
                this.groups = [];
                for(const key in grupos) this.groups.push(grupos[key]);
            }
            
        },
        unirAlGrupo(index=null){
            let updates = {};

            if(index!==null){
                if(!this.groups[index]["unido"] && !this.unido){
                    updates[`grupos/grupo/${index}/unido`] = true;
                    firebase.database().ref().update(updates, (error)=>{
                        if(error){
                            Swal.fire(
                                '¡Error!',
                                'Vaya algo salio mal &#128532',
                                'error'
                            );
                        }else{
                            this.techsDelGrupo.push(this.groups[index]["organizadores"]);
                            console.log(this.techsDelGrupo);
                            this.allGroups();
                            this.unido = true;
                            this.nombreGrupo = this.groups[index]["nombreGrupo"];
                            localStorage.setItem("storageEvento", {
                                'grupoUnido' : this.unido,
                                'nombreGrupo' : this.nombreGrupo,
                                'techsGrupoStore' : this.techsDelGrupo
                            });
                            Swal.fire(
                                'Listo!',
                                'Te has unido a este grupo &#128512',
                                'success'
                            );
                        }
                    });
                }else{
                    Swal.fire(
                        'Listo!',
                        'Ya te has unido a un grupo &#128512',
                        'success'
                    );
                }
            }else{
                console.error("Error: Algo salio mal en firebase");
                Swal.fire(
                    '¡Error!',
                    'Vaya algo salio mal :(',
                    'error'
                );
            }
        },
        salirDelGrupo(index=null){
            if(index!==null){
                Swal.fire({
                    title: 'Salir',
                    text: "¿Esta seguro de que quieres abandonar el grupo?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    cancelButtonText : 'No',
                    confirmButtonText: 'Si, salir'
                }).then((result) => {
                    if (result.isConfirmed) {
                        let updates = {};
                        updates[`grupos/grupo/${index}/unido`] = false;
                        firebase.database().ref().update(updates, (error)=>{
                            if(error){
                                console.error("Error al actualizar");
                                console.error(error);
                                Swal.fire(
                                    '¡Error!',
                                    'Algo salio mal, intentalo mas tarde.',
                                    'error'
                                );
                            }else{
                                console.log("Exito al guardar");
                                this.allGroups();
                                this.unido = false;
                                this.nombreGrupo = 'Aun no estas en ningun grupo';
                                this.techsDelGrupo = [];
                                localStorage.setItem("storageGrupo", {
                                    'grupoUnido' : false,
                                    'nombreGrupo' : 'Aun no estas en ningun grupo',
                                    'techsGrupoStore' : []
                                });
                                Swal.fire(
                                    'Listo',
                                    'Abandonaste el grupo.',
                                    'success'
                                );
                            }
                        });
                        
                    }
            });
            }else{
                 Swal.fire(
                    '¡Error!',
                    'Vaya algo salio mal :(',
                    'error'
                );
            }
        }
    }
}
</script>

<style>
    .colortest{
        background-color: aquamarine;
    }
    .colorgray{
        background-color: gray;
    }
</style>