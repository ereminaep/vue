<template lang="pug">
    div
      topApp
      .container    
        .head
          .title Блок «Работы» 
        addWork(v-if='edit')
        .work-items
          squareBtn(type="square" title="Добавить работу" class="work-item" @click="edit=!edit")
</template>
<script>

import topApp from "../../components/top-app/top-app";
import squareBtn from "../../components/button/button";
import addWork from "../../components/add-work/add-work";

export default {
  props:{
    edit:Boolean
  },
  components:{
    topApp,squareBtn,addWork
  }
};

</script>

<style lang="postcss" scoped src="./works.pcss"></style>