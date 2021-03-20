<template>
    <v-col
        cols="6"
    >
        <v-container
            class="colortest"
        >
            <v-container>
                <p>Insignias</p>
            </v-container>
            <v-container>
                <v-row>
                    <v-col
                        v-for="circle in circlesProfile"
                        :key="circle.title"
                    >
                        <v-avatar
                            color="primary"
                            size="45"
                        >

                        </v-avatar>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
        <v-container>
            <v-container>
                <p>Actividad reciente</p>
            </v-container>
            <v-container class="colortest">
                <p>Te has unido al evento Community Fest and Code <v-icon>mdi-calendar-check</v-icon></p>
                
            </v-container>
        </v-container>
    </v-col><!--main page-->
</template>

<script>
export default {
    props : {
        circlesProfile : {
            type : Array,
            default : []
        }
    },
     data(){
        return{};
    },
}
</script>

<style>

</style>