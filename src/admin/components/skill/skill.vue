<template lang="pug">
  .admin-skill-item(v-if="edited")
    .admin-skill-name
      app-input(v-model="oldSkill.name" :errorMessage='errorMessage' required).admin-skill-input
    .admin-skill-percent  
      app-input(v-model="oldSkill.percent" :errorMessage='errorMessage' required).admin-skill-input
      span.admin-skill-percent-symbol--focus %
    .admin-skill-icons
      icon(symbol="tick" @click="$emit('approve',oldSkill)")
      icon(symbol="cross" @click='editedChange')        
  .admin-skill-item(v-else)
      .admin-skill-name(v-html='skill.name')
      .admin-skill-percent
        .admin-skill-percent-value {{skill.percent}}
        .admin-skill-percent-symbol %
      .admin-skill-icons
        icon(grayscale symbol="pencil" @click='editedChange')
        icon(grayscale symbol="trash" @click="$emit('remove',skill.id)")
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
          id:0,
          name:'',
          percent:''
      },
      required:true
    }
  },
  data() {
    return {
        errorMessage:'',
        edited:false,
        oldSkill:{
           id:this.skill.id,
           name:this.skill.name,
           percent:this.skill.percent         
        }
    }
  },
  methods:{
    editedChange(e){
      this.edited = !this.edited; 
    }
  }
}
</script>

<style lang="postcss" scoped src="./skill.pcss"></style>