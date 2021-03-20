<template>
    <v-container>
        <v-container>
            <h2>Eventos Activos</h2>
        </v-container><!--Title-->
        <v-container>
            <v-row>
                <v-col
                    cols="4"
                    v-for="(eventoFire, index) in eventosFire"
                    :key="index"
                >
                    <v-card>
                        <v-img
                            :src="eventoFire.imgRef"
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
                        <v-card-text>
                            {{eventoFire.description}}
                        </v-card-text>
                        <v-container>
                            <v-btn
                                outlined
                                rounded
                                text
                            >
                                Mas informacion
                            </v-btn>
                            <v-btn
                                rounded
                                color="success"
                                v-if="!eventoFire.aplicado"
                                @click="updateEvent(index, true, 1)"
                            >
                                Unirse
                            </v-btn>
                            <v-btn
                                rounded
                                depressed
                                color="error"
                                v-else
                                @click="salirDelEvento(index)"
                            >
                                Salirse
                            </v-btn>
                        </v-container>
                                                      
                        </v-card>
                </v-col>
            </v-row>
        </v-container><!--Main-->
    </v-container>
</template>

<script>
import firebase from 'firebase';
import Swal from 'sweetalert2';
export default {
    props : {

    },
    mounted(){
        this.allEvents();
        console.log(`El lcal storage : `);
        console.log(localStorage.getItem("storageGrupo"));
    },
    data(){
        return {
            testArray : [0,1,2,3,4,5,6,7,8],
            eventosFire : []
        };
    },
    methods : {
        async allEvents(){
            const promiseFirebase = await fetch('https://team-vue-9-comfeco-default-rtdb.firebaseio.com/eventos.json');
            const data  = await promiseFirebase.json();
            if(data){
                const eventos = data['evento'];
                this.eventosFire = [];
                for (const key in eventos) this.eventosFire.push(eventos[key]);
                // for (const key in eventos) this.eventosFire.push(eventos[key]);
            }
        },
        updateEvent(index=null, aplicado=null, vecesAplicado=null){
            const database = firebase.database();
            console.log(`Index : ${index} Aplciado : ${aplicado} VecesAplciado : ${vecesAplicado}`);
            if(index!==null && aplicado && vecesAplicado){
                if(this.eventosFire[index] && this.eventosFire[index]["vecesAplicado"]==0){
                    let updates = {};
                    updates[`eventos/evento/${index}/aplicado`] = aplicado;
                    updates[`eventos/evento/${index}/vecesAplicado`] = vecesAplicado;
                    firebase.database().ref().update(updates, (error)=>{
                        if(error){
                            console.error("Error al actualizar");
                            console.error(error);
                            Swal.fire(
                                '¡Error!',
                                'Vaya algo salio mal :(',
                                'error'
                            );
                        }else{
                            console.log("Exito al guardar");
                            this.allEvents();
                            localStorage.setItem("eventoAgregadoLocal", {
                                title : this.eventosFire[index]['description']
                            });
                            Swal.fire(
                                '¡Listo!',
                                'Te has unido al evento &#128512',
                                'success'
                            );
                        }
                    });
                }else{
                    console.log("Ya aplicaste a este evento");
                    Swal.fire(
                        '¡Ooops!',
                        'Ya no puedes unirte a este evento.',
                        'error'
                    );
                }
            }else{
                Swal.fire(
                    '¡Error!',
                    'Vaya algo salio mal :(',
                    'error'
                );
            }
        },
        salirDelEvento(index=null){
            console.log("Saliste del evento");
            Swal.fire({
                title: 'Salir',
                text: "¿Esta seguro de que quieres abandonar el evento? Ya no podras unirte a este evento nunca mas",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                cancelButtonText : 'No',
                confirmButtonText: 'Si, salir'
            }).then((result) => {
                if (result.isConfirmed) {
                    let updates = {};
                    updates[`eventos/evento/${index}/aplicado`] = false;
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
                            this.allEvents();
                            Swal.fire(
                                'Listo',
                                'Abandonaste este evento.',
                                'success'
                            );
                        }
                    });
                    
                }
            });
        }
    }
}
</script>

<style>

</style>