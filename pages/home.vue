<template>
    <v-container>
        <v-container>
            <h1>Bienvenidos a Community Fest and Code</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat soluta dolor sapiente qui nulla aspernatur consequuntur similique adipisci, quaerat reiciendis quidem ab rerum consectetur quibusdam voluptate officia molestiae quod quia?</p>
        </v-container><!--subheader home-->
        <v-row>
            <v-col>
                <v-card>
                    <v-row>
                        <v-col>Comunidades</v-col>
                        <v-col><a href="">Ver más</a></v-col>
                    </v-row>
                    <template
                        v-for="(folder, index) in folders"
                    >
                        <v-list-item
                            :key="folder.title"
                        >
                            <v-list-item-avatar>
                                <v-icon
                                    class="grey lighten-1"
                                    dark
                                >
                                    mdi-folder
                                </v-icon>
                            </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title v-text="folder.title"></v-list-item-title>

                                    <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
                                </v-list-item-content>

                            <v-list-item-action>
                                <v-btn depressed elevation="0">
                                    Unirme
                                </v-btn>
                            </v-list-item-action>
                            
                        </v-list-item>
                        <v-divider
                            :key="index"
                        ></v-divider>
                    </template>
                </v-card>
            </v-col><!--comunidades-->
            <v-col>
                <v-container>
                    reloj: horas
                </v-container>
            </v-col><!--main-->
            <v-col>
                <v-card>
                    <v-row>
                        <v-col>Talleres</v-col>
                        <v-col><a href="">Ver más</a></v-col>
                    </v-row>
                    <v-container>
                        <v-select
                            :items="items"
                            label="Test"
                            dense
                            outlined
                        >

                        </v-select>
                    </v-container><!--Select courses-->
                    <template
                        v-for="(course, index) in courses"
                    >
                        <v-list-item
                            :key="index"
                        >
                            <v-list-item-avatar>
                                <v-icon>{{course.icon}}</v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title v-text="course.title"></v-list-item-title>
                                <v-list-item-subtitle v-text="(course.hour+' '+course.schedule)"></v-list-item-subtitle>
                                <p>By <a :href="course.linkAuthor" target="_blank">{{course.author}}</a></p>
                            </v-list-item-content>
                        </v-list-item>
                    </template>

                </v-card>
            </v-col><!--talleres-->
        </v-row>
    </v-container><!--container principal-->
</template>
<script>
    export default {
        layout: 'login',
        mounted(){
            
        },
        data(){
            return {
                timeEvent : 2,
                setTimes : {
                    days : 2,
                    hours : 24,
                    minutes : 60,
                    seconds : 60
                },
                folders : [
                    {
                        title : 'adios',
                        subtitle : 'texto de prueba',
                        
                    },
                    {
                        title : 'algos',
                        subtitle : 'texto de prueba',
                    },
                    {
                        title : 'algoss',
                        subtitle : 'texto de prueba',
                    },
                    {
                        title : 'algoa',
                        subtitle : 'texto de prueba',
                    },
                ],
                items : [
                    'State of JavaScript', 'IA', 'Flutter'
                ],
                courses : [
                    {
                        id : 1,
                        title: 'State of JavaScript',
                        hour : '16:00',
                        schedule : 'PM',
                        author : 'Fernando Herrera',
                        linkAuthor : 'https://google.com',
                        icon : ' mdi-checkbox-marked-circle'
                    },
                    {
                        id : 2,
                        title: 'State of JavaScript',
                        hour : '13:00',
                        schedule : 'PM',
                        author : 'Fernando Herrera',
                        linkAuthor : 'https://google.com',
                        icon : 'mdi-more'
                    },
                    {
                        id : 3,
                        title: 'State of JavaScript',
                        hour : '15:00',
                        schedule : 'PM',
                        author : 'Fernando Herrera',
                        linkAuthor : 'https://google.com',
                        icon : ' mdi-checkbox-marked-circle'
                    },
                ],

            };
        },
        methods : {
            clock : function(){
                const este = this;
                if(this.setTimes.seconds!==0){
                    setTimeout(() => {
                        este.setTimes.seconds = este.setTimes.seconds-1;
                    }, 500);
                }

                if(this.setTimes.days!==0){
                    this.setTimes.minutes = this.setTimes.seconds===0?this.setTimes.minutes-1:this.setTimes.minutes;
                    this.setTimes.hours = this.setTimes.minutes===0?this.setTimes.hours-1:this.setTimes.hours;
                    this.setTimes.days = this.setTimes.hours===0?this.setTimes.days-1:this.setTimes.days;

                    this.setTimes.seconds = this.setTimes.seconds===0?60:this.setTimes.seconds;
                    this.setTimes.minutes = this.setTimes.minutes===0?60:this.setTimes.minutes;
                    this.setTimes.hours = this.setTimes.hours===0?24:this.setTimes.hours;
                    this.setTimes.days = this.setTimes.days===0?0:this.setTimes.days;
                }else if(this.setTimes.days === 0){
                    alert('Se acabo el contador');
                }
                
                return `datys : ${this.setTimes.days} hours : ${this.setTimes.hours} minutes : ${this.setTimes.minutes} seconds : ${this.setTimes.seconds}`;
            }
        }
    }
</script>
<style scoped>

</style>