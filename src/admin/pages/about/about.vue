<template lang="pug">
    div
        skill-groups(:skills='activeSkills' :groups='categriesWithActiveSkills')
</template>

<script>

import skillGroups from "../../components/skill-groups/skill-groups";

import {mapState} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  components:{
    skillGroups
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

