<template lang="pug">
  .tag {{title}}
    .tag-remove(@click="$emit('remove',index)") ×
</template>

<script>
import icon from "../icon/icon";

export default {
  components:{icon},
  props: {
    title: {
      type: String,
      default: ""
    },
    index:{
      type:Number,
      default:0
    }
  }
}
</script>

<style lang="postcss" scoped src="./tag.pcss"></style>