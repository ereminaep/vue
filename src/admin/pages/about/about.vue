<template lang="pug">
    div
        topApp
        .container    
            skill-groups(:skills='activeSkills' :groups='categriesWithActiveSkills')
</template>

<script>

import skillGroups from "../../components/skill-groups/skill-groups";
import topApp from "../../components/top-app/top-app";

import {mapState} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  components:{
    skillGroups,
    topApp
  },
  computed:{
    ...mapGetters([
      'activeSkills',
      'categriesWithActiveSkills'
    ]),
    ...mapState({
      categories:state=>state.skills.categories
    })
  }
};

</script>

