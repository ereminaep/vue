<template lang="pug">
    div
        topApp
        .container    
            skill-groups(:skills='activeSkills' :groups='getCategories')
            pre {{getCategories}}
</template>

<script>

import skillGroups from "../../components/skill-groups/skill-groups";
import topApp from "../../components/top-app/top-app";

import {mapGetters} from 'vuex';

export default {
  components:{
    skillGroups,
    topApp
  },
  computed:{
    ...mapGetters([
      'activeSkills',
      'categriesWithActiveSkills',
      'getCategories'
    ])
  }
};

</script>

