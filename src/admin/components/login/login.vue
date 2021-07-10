<template lang="pug">
  .login-app
    .container
      form.form-login(@submit.prevent='login')
        h2 Авторизация
        app-input(
          icon="user" 
          :errorMessage="validation.firstError('user.name')"
          title="Логин" 
          v-model='user.name').input-login
        app-input(
          icon="key"
          :errorMessage="validation.firstError('user.password')"
          title="Пароль" 
          v-model='user.password').input-login
        appButton(title="Отправить" :disabled="isSubmitDisabled").send

</template>

<script>

import appInput from "../input/input.vue";
import appButton from "../button/button";
import $axios from "../../requests";
import {Validator, mixin as ValidatorMixin} from 'simple-vue-validator';

export default {
  mixins:[ValidatorMixin],
  components:{
    appInput,appButton
  },
  validators:{
    "user.name":value=>{
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password":value=>{
      return Validator.value(value).required("Введите пароль");
    },
  },
  data(){
    return {
      user:{
        name:'',
        password:''
      },
      isSubmitDisabled:false
  }},
  methods:{
    async login(){
      this.$validate().then(async(isValid)=>{
        if(isValid==false) return;
        this.isSubmitDisabled=true;

        try{
          const response = await $axios.post('/login', this.user);
          const token=response.data.token;
          localStorage.setItem('token',token);
          $axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          this.$router.push('/admin/');
        }
        catch(error){
          console.log(error.response.data.error);
        } finally{
          this.isSubmitDisabled=false;
        }

      })
    }
  }
}
</script>

<style lang="postcss" scoped src="./login.pcss"></style>