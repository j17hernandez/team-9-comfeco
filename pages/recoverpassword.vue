<template>
<v-container class="container-recover">
    <v-container>
        <h1 class="
            title-container
            text-h4
            text-md-h2
            text-lg-h1
            text-xl-h1 
            "
        >
            Olvidaste tu contraseña
        </h1>
    </v-container><!--Title recover-->
    <v-container>
        <p
            class="
                text--secondary 
                text-caption 
                text-sm-body-2 
                text-md-body-1 
                text-lg-body-1 
                text-xl-body-1 
                text-justify
            "
        >
            Te enviaremos un correo electrónico con un enlace privado para que reasignes tu contraseña. Este enlace será válido por una hora.
        </p>
    </v-container><!--description-->
    <v-form
        ref="form"
        lazy-validation    
    >
        <v-col cols="12" md="6" lg="12" xl="12">
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Correo"
                required
            ></v-text-field>
        </v-col>
        <v-container
            class="my-4"
        >
            <v-row
                justify="space-between"
                
            >
                <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                >
                    Enviar enlace
                </v-btn>
                <v-btn
                    :disabled="login"
                    class="ma-1"
                    color="grey"
                    plain
                    @click="redirectLogin"
                >
                    Iniciar sesión
                </v-btn>
            </v-row>
        </v-container>

    </v-form> 
</v-container>
</template>
<script>
export default {
    data(){
        return {
            valid: true,
            login: false,
            email: '',
            emailRules: [
                v => !!v || 'El correo es necesario.',
                v => /.+@.+\..+/.test(v) || 'El correo debe de ser valido.',
            ],
        };
    },
    methods: {
      validate () {
        console.log(this.$refs.form.validate());
      },
      redirectLogin(){
          console.log(this.login);
          window.location.href = 'http://localhost:3000/login';
      }
    }
}
</script>
<style scoped>
    .title-container{
        color: #42A5F5;
    }
    .container-recover{
        background-color: #212121;
    }
</style>