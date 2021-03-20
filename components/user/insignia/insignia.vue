<template>
    <v-container>
        <v-container><h3>Mis insignias</h3></v-container>
        <v-container>
            <v-row>
                <v-col
                    cols="3"
                    v-for="insignia in insignias"
                    :key="insignia.title"
                >
                    <v-card>
                        <div class="py-3"></div>
                        <v-img
                            width="100"
                            height="100"
                            
                            class="mx-auto my-3 rounded-circle"
                            src="https://www.vhv.rs/dpng/d/355-3559006_user-flat-icon-png-transparent-png.png"
                        >
                        </v-img>
                        
                        <v-card-title>
                            {{insignia.title}}
                        </v-card-title>
                        <v-container><h4>Description</h4></v-container>

                        <v-card-text>{{insignia.description}}</v-card-text>
                        <v-divider></v-divider>
                        <v-container><h4>¿Como ganarla?</h4></v-container>

                        <v-card-text>{{insignia.bounty}}</v-card-text>
                    </v-card><!--card-->
                </v-col><!--card col-->
            </v-row><!--cards-->
        </v-container><!--Main-->
    </v-container>
</template>

<script>
export default {
    props : {

    },
    data(){
        return {
            testArray : [
                0,1,2,4
            ],
            insignias : [
                {
                    'title' : 'Sociable',
                    'description' : 'Esta insignia es porque has completado todo tu perfil, ¡Felicidades!.',
                    'bounty' : 'Esta insignia se gana completando todo tu perfil.'
                },
                {
                    'title' : 'Bronce',
                    'description' : 'Esta insignia es porque has visitado algun link',
                    'bounty' : 'Esta insignia se gana por dar click a algun link del evento'
                },
                {
                    'title' : 'Diamante',
                    'description' : '¡Felicidades por concluir dos cursos!',
                    'bounty' : 'Esta insignia se gana completando dos cursos'
                },
                {
                    'title' : 'Predator',
                    'description' : '¡VAYA! Mas de cinco cursos',
                    'bounty' : 'Esta insignia se gana completando mas de cinco cursos'
                },
            ],
        };
    },

}
</script>

<style>

</style>