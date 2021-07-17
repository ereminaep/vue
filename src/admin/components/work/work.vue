<template lang="pug">
  .work
    .image
      img(:src='"https://webdev-api.loftschool.com/"+work.photo', alt="alt")
      .tags
        .tag(v-for="item in getTags(work.techs)")
          span {{item}}
    .work-content
      .name {{work.title}}
      .description {{work.description}}
      .link  {{work.link}}
      .icons
        icon(symbol="pencil" @click="$emit('edit',work)" title="Править")
        icon(symbol="cross" @click="$emit('remove',work.id)" title="Удалить")


    
</template>

<script>
import icon from "../icon/icon.vue";

export default {
  components:{icon},
  props: {
    work: {
      type: Object
    }
  },
  data() {
    return {
    }
  },
  methods:{
    getTags(tagsString){
      let tags=[];
      tags=tagsString.trim().split(',');
      return tags;
    }
  }
}
</script>

<style lang="postcss" scoped src="./work.pcss"></style>