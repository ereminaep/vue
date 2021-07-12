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
    $axions.post('/categories',{title:'заголовок'}).then(function(response){console.log(response)});

  }
};

</script>