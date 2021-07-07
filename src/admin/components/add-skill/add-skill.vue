<template lang="pug">
    .add-skill(:class="{blocked:blocked}")
        appInput(v-model="name" placeholder="Новый навык").input-name
        appInput(v-model="percent").input-percent
        iconedBtn(type="iconed" @click="addNewSkill" title='')
</template>

<script>

import addSkill from "../add-skill/add-skill";
import appInput from "../input/input.vue";
import iconedBtn from "../button/button";
import { mapMutations  } from 'vuex'

export default {
  components:{addSkill,appInput,iconedBtn},
  methods:{
    ...mapMutations ([
      'addSkill'
    ]),
    addNewSkill() {
        let newSkill={
            name:this.name,
            percent:this.percent,
            categoryId:this.categoryId
        };

        this.addSkill(newSkill);
    }
  },
  data(){
    return {
        name:'',
        percent:'100'
    }
  },
  props: {
      blocked:Boolean,
      categoryId:Number
  }
}
</script>

<style lang="postcss" scoped src="./add-skill.pcss"></style>