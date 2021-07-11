<template lang="pug">
    div
      topApp
      .container    
        .head
          .title Блок «Работы» 
        .work-items
          squareBtn(type="square" title="Добавить работу")


</template>

<script>

import topApp from "../../components/top-app/top-app";
import squareBtn from "../../components/button/button";

export default {
  components:{
    topApp,squareBtn
  }
};

</script>

<style lang="postcss" scoped src="./works.pcss"></style>