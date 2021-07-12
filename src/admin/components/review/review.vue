<template lang="pug">
  .review
    .image
      img(:src='"https://webdev-api.loftschool.com/"+review.photo', alt="alt")
    .review-content
      .name {{review.author}}
      .description {{review.text}}
      .link  {{review.occ}}
      .icons
        icon(symbol="pencil" @click="$emit('edit',review)" title="Править")
        icon(symbol="cross" @click="$emit('remove',review.id)" title="Удалить")


    
</template>

<script>
import icon from "../icon/icon.vue";

export default {
  components:{icon},
  props: {
    review: {
      type: Object
    }
  }
}
</script>

<style lang="postcss" scoped src="./review.pcss"></style>