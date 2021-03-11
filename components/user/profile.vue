<template>
    <v-col
        cols="3"
    >
        <v-card>
            <v-toolbar
                elevation="1"    
            >
                <v-spacer></v-spacer>
                <div class="mx-2">
                    <a href="#">Editar perfil</a>
                </div>
            </v-toolbar>
            <v-img
                width="100"
                height="100"
                
                class="mx-auto my-4 rounded-circle"
                src="https://www.vhv.rs/dpng/d/355-3559006_user-flat-icon-png-transparent-png.png"
            >
            </v-img>
            <!-- <v-list-item-avatar
                size="100"
                class="center-margin"
            >
            </v-list-item-avatar> -->
            <v-card-title>NickName</v-card-title>
            <v-card-subtitle>Skill plus</v-card-subtitle>
            <v-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorem officiis quia numquam architecto repellendus dolores magnam, rem excepturi autem nihil impedit dolore nemo! Repudiandae voluptas perferendis deleniti dolor doloremque!
            </v-card-text>
            <v-divider></v-divider>
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
        </v-card>
    </v-col><!--Description user-->
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
    a{
        text-decoration: none;   
    }
    .center-margin{
        margin: 0 30%;
        
    }
</style>