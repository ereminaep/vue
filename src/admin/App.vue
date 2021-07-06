<template lang="pug">
  .app-container
    headerApp(title='Панель администрирования')
      avatar(:src='userPic')
      h1.header-username {{user_data.name}}
    tabs
      div.container
        tab(name="Обо мне" link='/admin/#about' :selected="true")
          skill-groups(:skills='skills' :groups='categories')
        tab(name="Работы" link='/admin/#works')
          .admin-content
            h1 контент второго блока
        tab(name="Отзывы" link='/admin/#reviews')
          .admin-content
            h1 контент третьего блока

</template>

<script>
import headerApp from "./components/header-app/header-app";
import avatar from "./components/avatar";
import tabs from "./components/tabs/tabs";
import tab from "./components/tab/tab";
import roundBtn from "./components/button/button";
import skillGroups from "./components/skill-groups/skill-groups";

import {mapState} from 'vuex';

export default {
  components:{
    headerApp,avatar,tabs,tab,roundBtn,skillGroups
  },
  computed:{
    ...mapState({
      skills:state=>state.skills.skills,
      categories:state=>state.skills.categories
    }),
    userPic(){
      return require(`./../images/${this.user_data.image}`).default;
    }
  },
  data() {
        return {
            user_data: require('./../data/user.json')
        }
  },
  methods:{
    addGroup(){
      this.addGroup=!this.addGroup;
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

