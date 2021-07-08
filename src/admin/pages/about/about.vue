<template lang="pug">
    div
        topApp
        .container    
          .head
            .title Блок «Обо мне» 
            round-btn(type='iconed')
          .skill-groups
            .skill-group(v-for='item in categories')
              skillGroup(:group='item' :skills='categories.skills')
</template>

<script>

import topApp from "../../components/top-app/top-app";
import skillGroup from "../../components/skill-group/skill-group";
import roundBtn from "../../components/button/button";

import {mapState} from 'vuex';
import {mapActions} from 'vuex';

import $axions from "../../requests";

export default {
  components:{
    skillGroup,
    topApp,
    roundBtn
  },
  computed: {
    ...mapState("categories",{
      categories: state => state.data
    })
  },
  methods: {
    ...mapActions({
      createCategoryAction: "categories/create",
      fetchCategoriesAction: "categories/fetch",
      addSkillAction: "skills/add",
      removeSkillAction: "skills/remove",
      editSkillAction: "skills/edit",
    }),
    async createSkill(skill, categoryId) {
      const newSkill = {
        ...skill,
        category: categoryId
      }
      await this.addSkillAction(newSkill);
      skill.title = "";
      skill.percent = "";
    },
    removeSkill(skill) {
      this.removeSkillAction(skill);
    },
    async editSkill(skill) {
      await this.editSkillAction(skill);
      skill.editmode = false;
    },
    async createCategory(categoryTitle) {
      try {
        await this.createCategoryAction(categoryTitle);
        this.emptyCatIsShown = false;
      } catch (error) {
        console.log(error.message); 
      }
    }
  },
  created() {
    this.fetchCategoriesAction();
  },
};

</script>

<style lang="postcss" scoped src="./about.pcss"></style>