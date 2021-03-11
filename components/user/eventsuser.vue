<template>
    <v-col
        cols="3"
    >
        <v-container>
            <div>
                <div><p>Eventos de tu interes</p></div>
                <div><a href="#">Ver mas</a></div>
            </div>
            <div
                v-for="option in subMenuOptions"
                :key="option.title"
            >
                <v-img
                    contain
                    src="https://picsum.photos/id/11/500/300"
                >
                </v-img>
                <p>Community Fest and Code</p>
                <v-btn>Mas informacion</v-btn>
            </div>
        </v-container>
    </v-col><!--aside eventos-->
</template>

<script>
export default {
    props : {
        subMenuOptions : {
            type : Array,
            default : []
        }
    },
     data(){
        return{};
    }
}
</script>

<style>

</style>