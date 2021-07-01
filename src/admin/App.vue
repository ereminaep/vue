<template lang="pug">
  .app-container
    headerApp(title='Панель администрирования')
      avatar(src="https://picsum.photos/300/300")
      h1.header-username Владимир Астаханов
</template>

<script>
import headerApp from "./components/header-app/header-app";
import avatar from "./components/avatar";

export default {
  components:{
    headerApp,avatar
  },
};
</script>

<style lang="postcss" >
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
</style>