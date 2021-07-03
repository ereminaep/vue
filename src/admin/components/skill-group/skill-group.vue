<template lang="pug">
    card 
        editLine(slot="title" v-model='title' :editModeByDefault="empty") 
        .admin-skill-list(slot="content")
            .admin-skill-item(v-for='item in group.items')
                skill(:skill='getSkillById(item)')
            addSkill.admin-add-skill(:blocked="empty")
</template>

<script>
import skill from "../skill/skill";
import editLine from "../editLine/editLine";
import card from "../card/card";
import addSkill from "../add-skill/add-skill";

export default {
  components:{skill,card,editLine,addSkill},
  props: {
    group: {
      type: Object,
      default: {}
    },
    skills:{
      type: Object,
      default: {}
    },
    empty:Boolean
  },
  data(){
    return {
      title:this.group.group
    }
  },
  methods:{
    getSkillById(id) {
            return {
                name:this.skills[id].name,
                percent:this.skills[id].percent,
                edited:false
            }
        }
    }
}
</script>

<style lang="postcss" scoped src="./skill-group.pcss"></style>