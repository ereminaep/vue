<template lang="pug">
    card 
        editLine(slot="title" v-model='title' :editModeByDefault="empty") 
        .list(slot="content")
            .item(v-for='item in group.items' v-if='true')
              skill(:skill='getSkillById(item)')
            addSkill.add-skill(:blocked="empty" :categoryId="group.id")
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
      type: Object
    },
    skills:{
      type: Object
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
              id:this.skills[id].id,
              name:this.skills[id].name,
              percent:this.skills[id].percent,
              actuve:this.skills[id].percent
          }
        }
    }
}
</script>

<style lang="postcss" scoped src="./skill-group.pcss"></style>