<template lang="pug">
  .item(v-if="edited")
    .name
      app-input(v-model="oldSkill.title").input
    .percent  
      app-input(v-model="oldSkill.percent").input
      span.percent-symbol--focus %
    .admin-skill-icons
      icon(symbol="tick" @click="updateSkill")
      icon(symbol="cross" @click='editedChange')        
  .item(v-else)
      .name(v-html='skill.title')
      .percent
        .percent-value {{skill.percent}}
        .percent-symbol %
      .icons
        icon(grayscale symbol="pencil" @click='editedChange')
        icon(grayscale symbol="trash" @click="$emit('remove-skill',skill)")
</template>

<script>
import icon from "../icon/icon";
import appInput from "../input/input.vue";

export default {
  components:{icon,appInput},
  props: {
    skill: {
      type: Object
    }
  },
  data() {
    return {
        edited:false,
        oldSkill:{
           id:this.skill.id,
           title:this.skill.title,
           percent:this.skill.percent,
           category:this.skill.category       
        }
    }
  },
  methods:{
    editedChange(e){
      this.edited = !this.edited; 
    },
    updateSkill(){
      this.$emit('change-skill',this.oldSkill);
      this.editedChange();
    }
  },
}
</script>

<style lang="postcss" scoped src="./skill.pcss"></style>