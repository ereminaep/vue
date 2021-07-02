<template lang="pug">
    .admin-skill-group-title(slot="title")(v-if="edited") 
        span {{title}}
        .admin-skill-icons 
            icon(grayscale symbol="pencil" @click='editedChange')
    .admin-skill-group-title(slot="title")(v-else)
        app-input(v-model="title")
        .admin-skill-icons 
            icon(symbol="tick" @click='editedChange').admin-skill-icon
            icon(symbol="cross" @click='editedChange').admin-skill-icon

</template>

<script>
import appInput from "../input/input.vue";
import icon from "../icon/icon.vue";

export default {
  components:{appInput,icon},
  props: {
    title: {
      type: String,
      default: ''
    },
    edited:{
        type: Boolean,
        default:false
    }
  },
    methods:{
    editedChange(){
      this.edited = !this.edited;
    }
  }
}
</script>

<style lang="postcss" scoped src="./skill-group-title.pcss"></style>