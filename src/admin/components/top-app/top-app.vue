<template lang="pug">
    div
        headerApp(title='Панель администрирования')
            avatar(:src='userPic')
            h1.header-username {{user.name}}
        top-menu
</template>

<script>

import headerApp from "../header-app/header-app";
import avatar from "../avatar";
import topMenu from "../menu/menu";

import {mapState} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  components:{
    headerApp,avatar,topMenu
  },
  computed:{
    ...mapState({
      user:state=>state.user.user
    }),
    userPic(){
      return require(`../../../images/${this.user.image}`).default;
    }
  }
};

</script>

<style lang="postcss" scoped src="./top-app.pcss">
