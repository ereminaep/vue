<template lang="pug">
  .header-component
    .container.header-container
      .header-left
        slot
        .header-title {{title}}
      .buttons 
        button(type="button").btn Выйти

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "" 
    }
  }
};
</script>


<style lang="postcss" src="./header-app.pcss" scoped>
</style>