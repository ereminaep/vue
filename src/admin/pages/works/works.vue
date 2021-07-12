<template lang="pug">
    div
      topApp
      .container    
        .head
          .title Блок «Работы» 
        addWork(
          v-if='add' 
          type='add'
          @add="createWork"
          :work='{}'
        )
        addWork(
          v-else-if='edit'
          type='edit'
          :work='currentWork'
        )
        .work-items
          squareBtn(type="square" title="Добавить работу" @click="add=!add").work-item
          work(
            v-for='item in works' 
            :work='item'
            @remove="removeWork"
            @edit="editWork"
          ).work-item
</template>
<script>

import topApp from "../../components/top-app/top-app";
import squareBtn from "../../components/button/button";
import addWork from "../../components/add-work/add-work";
import work from "../../components/work/work";

import {mapState} from 'vuex';
import {mapActions} from 'vuex';

export default {
  components:{
    topApp,squareBtn,addWork,work
  },
  computed: {
    ...mapState("works",{
      works: state => state.data
    })
  },
  data(){ 
    return {
    currentWork:{},
    add:false,
    edit:false
  }

  },
  methods: {
    ...mapActions({
      createWorkAction: "works/create",
      fetchWorksAction: "works/fetch",
      removeWorkAction: "works/remove"
    }),
    async removeWork(work) {
      try {
        await this.removeWorkAction(work);
      } catch (error) {
        console.log(error.message); 
      }
    },
    async createWork(work) {
        for(let [name, value] of work) {
          console.log(`${name} = ${value}`); 
      }
      try {
        await this.createWorkAction(work);
        this.add=!this.add;
      } catch (error) {
        console.log(error.message); 
      }
    },
    editWork(work){
      this.edit=true;
      console.log(work);
      this.currentWork=work;
    }
  },
  created() {
    this.fetchWorksAction();
  }
};

</script>

<style lang="postcss" scoped src="./works.pcss"></style>