<template lang="pug">
  .app-container
    headerApp(:title='lang.admin_panel')
      avatar(src="https://picsum.photos/300/300")
      h1.header-username {{user_data.name}}
    .container
      tabs
        tab(:name="menu['about']" :selected="true")
          h1 контент первого блока
        tab(:name="menu['works']")
          h1 контент второго блока
        tab(:name="menu['talks']")
          h1 контент третьего блока

</template>

<script>
import headerApp from "./components/header-app/header-app";
import avatar from "./components/avatar";
import tabs from "./components/tabs/tabs";
import tab from "./components/tab/tab";


export default {
  components:{
    headerApp,avatar,tabs,tab
  },
  data() {
        return {
            user_data: require('./../data/user.json'),
            lang: require('./../data/lang.json'),
            menu: require('./../data/menu.json')
        }
    },
};
</script>

<style lang="postcss" >
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
</style>

<style lang="postcss" scoped src="./app.pcss">
</style>

