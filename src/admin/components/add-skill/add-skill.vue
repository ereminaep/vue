<template lang="pug">
    .admin-add-skill(:class="{blocked:blocked}")
        appInput(v-model="skill.name" placeholder="Новый навык").admin-add-skill-input-name
        appInput(v-model="skill.percent").admin-add-skill-input-percent
        iconedBtn(type="iconed" @click="onClick" title='')
</template>

<script>

import addSkill from "../add-skill/add-skill";
import appInput from "../input/input.vue";
import iconedBtn from "../button/button";

export default {
  components:{addSkill,appInput,iconedBtn},
  props: {
      skill:{
          type:Object,
          default:function(){
                return{
                    name:'',
                    percent:'100',
                    etited:false
                }
          }
      },
      blocked:Boolean

  },
  methods:{
      onClick(){
      }
  }
}
</script>

<style lang="postcss" scoped src="./add-skill.pcss"></style>