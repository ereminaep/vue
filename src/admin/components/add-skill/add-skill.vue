<template lang="pug">
    .add-skill(:class="{blocked:blocked}")
        appInput(v-model="skill.title" placeholder="Новый навык").input-name
        appInput(v-model="skill.percent").input-percent
        iconedBtn(type="iconed" @click="$emit('add-skill',skill)" title='')
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
        percent:'',
        category:this.categoryId
      }

    }
  },
  props: {
    blocked:Boolean,
    categoryId:Number
  }
}
</script>

<style lang="postcss" scoped src="./add-skill.pcss"></style>