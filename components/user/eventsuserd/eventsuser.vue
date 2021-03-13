<template>
    <v-container>
        <v-container>
            <h2>Eventos Activos</h2>
        </v-container><!--Title-->
        <v-container>
            <v-row>
                <v-col
                    cols="4"
                    v-for="test in testArray"
                    :key="test"
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
                        <v-card-text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum fugiat totam aut perspiciatis impedit, eius quia distinctio officia, iusto libero omnis, dolore nostrum temporibus vel voluptate placeat corrupti! Hic, officia?
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
                                outlined
                                rounded
                                text
                            >
                                Unirse
                            </v-btn>  
                        </v-container>
                                                      
                        </v-card>
                </v-col>
            </v-row>
        </v-container><!--Main-->
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            testArray : [0,1,2,3,4,5,6,7,8]
        };
    },
}
</script>

<style>

</style>