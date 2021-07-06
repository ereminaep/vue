<template lang="pug">
  .item(v-if="edited")
    .name
      app-input(v-model="oldSkill.name").input
    .percent  
      app-input(v-model="oldSkill.percent").input
      span.percent-symbol--focus %
    .admin-skill-icons
      icon(symbol="tick" @click="changeExistingSkill(oldSkill)")
      icon(symbol="cross" @click='editedChange')        
  .item(v-else)
      .name(v-html='skill.name')
      .percent
        .percent-value {{skill.percent}}
        .percent-symbol %
      .icons
        icon(grayscale symbol="pencil" @click='editedChange')
        icon(grayscale symbol="trash" @click="removeExistingSkill")
</template>

<script>
import icon from "../icon/icon";
import appInput from "../input/input.vue";
import {mapMutations} from 'vuex';

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
           name:this.skill.name,
           percent:this.skill.percent,
           active:true       
        }
    }
  },
  methods:{
    ...mapMutations([
      'removeSkill',
      'changeSkill'
      ]),
    removeExistingSkill(){
      this.removeSkill(this.skill.id);
    },
    changeExistingSkill(skill){
      this.changeSkill(skill);
      this.editedChange();
    },
    editedChange(e){
      this.edited = !this.edited; 
    }
  }
}
</script>

<style lang="postcss" scoped src="./skill.pcss"></style>