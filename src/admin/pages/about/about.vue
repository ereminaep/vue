<template lang="pug">
    div
        topApp
        .container    
            skill-groups(:skills='{}' :groups='categories')
            pre {{categories}}
</template>

<script>

import skillGroups from "../../components/skill-groups/skill-groups";
import topApp from "../../components/top-app/top-app";

import {mapState} from 'vuex';
import {mapActions} from 'vuex';

export default {
  components:{
    skillGroups,
    topApp
  },
   computed: {
    ...mapState("categories",{
      categories: state => state.categories
    })
  },
  methods: {
    ...mapActions({
       createCategoryAction:"categories/create",
       fetchCategoriesAction: "categories/fetch",
    })
  },
  
  created() {
    this.fetchCategoriesAction();
  }
};

</script>

