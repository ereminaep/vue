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
import axios from 'axios';
import appButton from "../button/button";

const baseUrl='https://webdev-api.loftschool.com';
const token=localStorage.getItem('token') || "";

axios.defaults.baseURL = 'https://webdev-api.loftschool.com';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


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
    login(){
      axios.post('/login', {
        name: this.user.name,
        password: this.user.password
      })
      .then(function (response) {
        const token=response.data.token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem('token',token);
        router.push('/admin/');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="postcss" scoped src="./login.pcss"></style>