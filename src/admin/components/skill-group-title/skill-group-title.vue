<template lang="pug">
    .admin-skill-group-title(slot="title")(v-if="!edited") 
        span {{name}}
        .admin-skill-icons 
            icon(grayscale symbol="pencil" @click='editedChange')
    .admin-skill-group-title(slot="title")(v-else)
        app-input(v-model="name")
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
    }
  },
  data() {
        return {
            edited:false,
            name:this.title
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