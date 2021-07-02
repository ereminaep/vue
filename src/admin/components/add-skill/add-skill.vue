<template lang="pug">
    .admin-add-skill
        appInput(v-model="skill.name")
        appInput(v-model="skill.percent")
</template>

<script>

import addSkill from "../add-skill/add-skill";
import appInput from "../input/input.vue";

export default {
  components:{addSkill,appInput},
  props: {
      skill:{
          type:Object,
          default:{
                name:'',
                percent:'',
                etited:false
          }
      }
  }
}
</script>

<style lang="postcss" scoped src="./add-skill.pcss"></style>