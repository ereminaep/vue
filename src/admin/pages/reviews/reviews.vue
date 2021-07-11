<template lang="pug">
    div
        topApp
        .container 
            h1 Страница отзывов
</template>

<script>

import topApp from "../../components/top-app/top-app";
import $axions from "../../requests";

export default {
  components:{
    topApp
  },
  mounted(){
    $axions.post('/works',{photo:'https://bipbap.ru/wp-content/uploads/2018/04/0_7c773_e4f21b71_XL-640x400.jpg',title:'заголовок',link:'http://google.com',description:'текст',techs:'html,css'}).then(function(response){console.log(response)});

  }
};

</script>