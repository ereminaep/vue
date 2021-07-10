<template lang="pug">
    card 
      editLine(
        slot="title" 
        v-model='title' 
        :group='group' 
        :editModeByDefault="empty" 
        :category='group.category' 
        @remove-category="$emit('remove-category', $event)" 
        @edit-category="$emit('edit-category', $event)" 
        @create-category="$emit('create-category', $event)" 
      ) 
      .list(
        slot="content")
        .item(v-for='item in group.skills')
          skill(
            :skill='item' 
            @remove-skill="$emit('remove-skill', $event)" 
            @change-skill="$emit('change-skill', $event)")
        addSkill.add-skill(
          :blocked="empty" 
          :categoryId="group.id" 
          @add-skill="$emit('add-skill', $event)")
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
    empty:Boolean
  },
  data(){
    return {
      title:this.group.category
    }
  }
}
</script>

<style lang="postcss" scoped src="./skill-group.pcss"></style>