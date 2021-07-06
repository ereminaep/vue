<template lang="pug">
  .app-container
    headerApp(:title='lang.admin_panel')
      avatar(:src='userPic')
      h1.header-username {{user_data.name}}
    tabs
      div.container
        tab(:name="menu['about']" link='/admin/#about' :selected="true")
          skill-groups(:skills='skillsValues' :groups='skillsList' :title='{block:lang.block,name:menu.about}')
          router-view
        tab(:name="menu['works']" link='/admin/#works')
          .admin-content
            h1 контент второго блока
        tab(:name="menu['talks']" link='/admin/#reviews')
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

export default {
  components:{
    headerApp,avatar,tabs,tab,roundBtn,skillGroups
  },
  props:{
    skills:{
      type:Array,
      dafault:[]
    },
    skillsNames:{
      type:Object,
      dafault:{}
    },
    title:{
      type:Object,
      dafault:{
      }    
    }
  },
  computed:{
    userPic(){
      return require(`./../images/${this.user_data.image}`).default;
    }
  },
  data() {
        return {
            user_data: require('./../data/user.json'),
            lang: require('./../data/lang.json'),
            menu: require('./../data/menu.json'),
            skillsList: require('./../data/skill-widget.json'),
            skillsValues: require('./../data/skills.json'),
        }
  },
  methods:{
    addGroup(){
      this.addGroup=!this.addGroup;
    }
  }
};
</script>

<style lang="postcss" >
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

