<template lang="pug">
    div
        topApp
        .container    
          .head
            .title Блок «Обо мне» 
            round-btn(type='iconed' @click='newCategorie=!newCategorie')
          .skill-groups
            .skill-group(v-if='newCategorie')  
              skillGroup(:empty='true' :group={title:''}
              @create-category="createCategory"
              @remove-category="removeCategory"
              )
            .skill-group(v-for='item in categories')
              skillGroup(:group='item'
                @edit-category="editCategory"
                @remove-category="removeCategory"
                @add-skill="createSkill" 
                @change-skill="editSkill" 
                @remove-skill="removeSkill"
              )
</template>

<script>

import topApp from "../../components/top-app/top-app";
import skillGroup from "../../components/skill-group/skill-group";
import roundBtn from "../../components/button/button";

import {mapState} from 'vuex';
import {mapActions} from 'vuex';

import $axions from "../../requests";

export default {
  props:{
    empty:Boolean
  },
  data(){
    return {
      newCategorie:false
    }
  },
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
      editCategoryAction: "categories/edit",
      removeCategoryAction: "categories/remove",
      fetchCategoriesAction: "categories/fetch",
      addSkillAction: "skills/add",
      removeSkillAction: "skills/remove",
      editSkillAction: "skills/edit",
    }),
    async createSkill(skill) {
      await this.addSkillAction(skill);
      skill.title = "";
      skill.percent = "";
      this.fetchCategoriesAction();
    },
    removeSkill(skill) {
      this.removeSkillAction(skill);
    },
    async editSkill(skill) {
      await this.editSkillAction(skill);
      skill.editmode = false;
    },
    async createCategory(categoryTitle) {
      console.log(categoryTitle);
      try {
        await this.createCategoryAction(categoryTitle);
        this.newCategorie=!this.newCategorie;
      } catch (error) {
        console.log(error.message); 
      }
    },
    async editCategory(categoryData) {
      try {
        await this.editCategoryAction(categoryData);
      } catch (error) {
        console.log(error.message); 
      }
    },
    async removeCategory(category) {
      if(category.category==undefined) {
        this.newCategorie=!this.newCategorie;
        return;
      }
      try {
        await this.removeCategoryAction(category.category);
      } catch (error) {
        console.log(error.message); 
      }
    }
  },
  created() {
    this.fetchCategoriesAction();
  }
};

</script>

<style lang="postcss" scoped src="./about.pcss"></style>