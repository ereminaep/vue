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
    login(){
      $axions.post('/login', {
        name: this.user.name,
        password: this.user.password
      })
      .then(function (response) {
        console.log(response);
        const token=response.data.token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem('token',token);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="postcss" scoped src="./login.pcss"></style>