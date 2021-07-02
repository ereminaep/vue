<template lang="pug">
    card 
        skillGroupTitle(slot="title" :title='group.group') 
        .admin-skill-list(slot="content")
            .admin-skill-item(v-for='item in group.items')
                skill(:skill='getSkillById(item)')
</template>

<script>
import skill from "../skill/skill";
import skillGroupTitle from "../skill-group-title/skill-group-title";
import card from "../card/card";

export default {
  components:{skill,card,skillGroupTitle},
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

<style lang="postcss" scoped src="./skill-group.pcss"></style>