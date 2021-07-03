<template lang="pug">
    card 
        skillGroupTitle(slot="title" :title='group.group' :edited='true') 
        .admin-skill-list(slot="content")
            .admin-skill-item(v-for='item in group.items')
                skill(:skill='getSkillById(item)')
            addSkill.admin-add-skill
</template>

<script>
import skill from "../skill/skill";
import skillGroupTitle from "../skill-group-title/skill-group-title";
import card from "../card/card";
import addSkill from "../add-skill/add-skill.vue";

export default {
  components:{skill,card,skillGroupTitle,addSkill},
  props: {
    group: {
      type: Object,
      default: {}
    },
    skills:{
      type: Object,
      default: {}
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

<style lang="postcss" scoped src="./add-skill-group.pcss"></style>