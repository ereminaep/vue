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
    $axions.get('/works/466').then(function(response){console.log(response)});
    console.log();
  }
};

</script>