<template lang="pug">
  .admin-skill-item(v-if="edited")
    .admin-skill-name
      app-input(v-model="skill.name" :errorMessage='errorMessage' required).admin-skill-input
    .admin-skill-percent  
      app-input(v-model="skill.percent" :errorMessage='errorMessage' required).admin-skill-input
      span.admin-skill-percent-symbol--focus %
    .admin-skill-icons
      icon(symbol="tick" @click='editedChange')
      icon(symbol="cross" @click='resetChange')        
  .admin-skill-item(v-else)
      .admin-skill-name(v-html='skill.name')
      .admin-skill-percent
        .admin-skill-percent-value {{skill.percent}}
        .admin-skill-percent-symbol %
      .admin-skill-icons
        icon(grayscale symbol="pencil" @click='editedChange')
        icon(grayscale symbol="trash")
</template>

<script>
import icon from "../icon/icon";
import appInput from "../input/input.vue";

export default {
  components:{icon,appInput},
  props: {
    skill: {
      type: Object,
      default: {
          name:'',
          percent:''
      }
    }
  },
  data() {
    return {
        errorMessage:'',
        edited:false,
        oldSkill:{
           name:'',
           percent:''         
        }
    }
  },
  methods:{
    editedChange(e){
      this.oldSkill.name=this.name;
      this.oldSkill.percent=this.percent;
      this.edited = !this.edited; 
    },
    resetChange(e){
      this.name=this.oldSkill.name;
      this.percent=this.oldSkill.percent;
      this.edited = !this.edited; 
    }
  }
}
</script>

<style lang="postcss" scoped src="./skill.pcss"></style>