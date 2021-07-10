<template lang="pug">
    .add-skill(:class="{blocked:blocked}")
        appInput(v-model="skill.title" placeholder="Новый навык").input-name
        appInput(v-model="skill.percent").input-percent
        iconedBtn(type="iconed" @click="addSkill" title='')
</template>

<script>

import addSkill from "../add-skill/add-skill";
import appInput from "../input/input.vue";
import iconedBtn from "../button/button";
import { mapMutations  } from 'vuex'

export default {
  components:{addSkill,appInput,iconedBtn},
  data(){
    return {
      skill:{
        title:'',
        percent:''
      }
    }
  },
  props: {
    blocked:Boolean,
    categoryId:Number
  },
  methods:{
    addSkill(){
      let skill={
        title:this.skill.title,
        percent:this.skill.percent,
        category:this.categoryId
      }

      this.$emit('add-skill',skill);

      this.skill.title='';
      this.skill.percent=''; 
    }
  }

}
</script>

<style lang="postcss" scoped src="./add-skill.pcss"></style>