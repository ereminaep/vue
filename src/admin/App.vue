<template lang="pug">
  .app-container 
    router-view

</template>

<script>

import topApp from "./components/top-app/top-app";

export default {
  components:{topApp},
  methods:{
    redirectLogin(){
      if(!localStorage.getItem('token')) {
        this.$router.push('/admin/login/');
      }
    }
  },
  beforeUpdate() {
    this.redirectLogin();
  },
  created(){
    this.redirectLogin();
  }
};

</script>

<style lang="postcss">

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";

  .wrapper{
    background-color:#F8FAFE;
  }
</style>

<style lang="postcss" scoped src="./app.pcss">
</style>

