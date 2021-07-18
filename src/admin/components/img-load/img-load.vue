<template>
  <component 
    :is="type"
    v-bind="$attrs"
    v-on="$listeners"
  /> 
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  components: {
    default: () => import("./types/default/img-load.vue"),
    round: () => import("./types/round/img-load.vue"),
  }
}
</script>