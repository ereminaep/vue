<template lang="pug">
  .work
    .image
      img(:src='work.photo', alt="alt")
      .tags
        .tag(v-for="item in work.tags")
          span {{item}}
    .name {{work.name}}
    .description {{work.description}}
    .link  {{work.link}}
    .icons
      icon(symbol="pencil" @click="$emit('edit',work.id)" title="Править")
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
  }
}
</script>

<style lang="postcss" scoped src="./work.pcss"></style>