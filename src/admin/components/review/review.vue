<template lang="pug">
  card
    div(slot="title").head
      .image
        img(:src='"https://webdev-api.loftschool.com/"+review.photo', alt="alt")
      .author
        .name {{review.author}} 
        .work {{review.occ}}
    .review-content(slot="content")
      .description {{review.text}}
      .icons
        icon(symbol="pencil" @click="$emit('edit',review)" title="Править")
        icon(symbol="cross" @click="$emit('remove',review.id)" title="Удалить")


    
</template>

<script>
import icon from "../icon/icon.vue";
import card from "../card/card";

export default {
  components:{icon,card},
  props: {
    review: {
      type: Object
    }
  }
}
</script>

<style lang="postcss" scoped src="./review.pcss"></style>