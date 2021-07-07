<template lang="pug">
  .app-container 
    headerApp(title='Панель администрирования')
      avatar(:src='userPic')
      h1.header-username {{user.name}}
    top-menu
    .container
      router-view

</template>

<script>

import headerApp from "./components/header-app/header-app";
import avatar from "./components/avatar";
import topMenu from "./components/menu/menu";

import about from "./pages/about/about";

import {mapState} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  components:{
    headerApp,avatar,about,topMenu
  },
  computed:{
    ...mapState({
      user:state=>state.user.user
    }),
    userPic(){
      return require(`./../images/${this.user.image}`).default;
    }
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

