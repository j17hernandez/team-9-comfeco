<template>
    <v-container>
        <v-container><h3>Mis insignias</h3></v-container>
        <v-container>
            <v-row>
                <v-col
                    cols="3"
                    v-for="valor in testArray"
                    :key="valor"
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
                            Insignia title
                        </v-card-title>
                        <v-container><h4>Description</h4></v-container>

                        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestiae blanditiis facilis odit veritatis harum, quaerat voluptatibus ducimus voluptas est animi, id, eius alias quisquam omnis recusandae suscipit exercitationem dolore.</v-card-text>
                        <v-divider></v-divider>
                        <v-container><h4>Description</h4></v-container>

                        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestiae blanditiis facilis odit veritatis harum, quaerat voluptatibus ducimus voluptas est animi, id, eius alias quisquam omnis recusandae suscipit exercitationem dolore.</v-card-text>
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
            ]
        };
    },

}
</script>

<style>

</style>