<template lang="pug">
  .login-app
    .container
      form.form-login(@submit.prevent='login')
        h2 Авторизация
        app-input(icon="user" title="Логин" v-model='user.name')
        app-input(icon="key" title="Пароль" v-model='user.password')
        appButton(title="Отправить")

</template>

<script>

import appInput from "../input/input.vue";
import appButton from "../button/button";
import $axions from "../../requests";


export default {
  components:{
    appInput,appButton
  },
  data(){
    return {
      user:{
        name:'',
        password:''
      }
    }
  },
  methods:{
    async login(){

      const response =await $axions.post('/login', {name: this.user.name,password: this.user.password});

        const token=response.data.token;
        localStorage.setItem('token',token);
        $axions.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        this.$router.push('/admin/');

    }
  }
}
</script>

<style lang="postcss" scoped src="./login.pcss"></style>