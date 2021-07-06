<template lang="pug">
    .title(slot="title")(v-if="!edited") 
        span {{name}}
        .icons 
            icon(grayscale symbol="pencil" @click='editedChange')
    .title(slot="title")(v-else)
        app-input(v-model="name")
        .icons 
            icon(symbol="tick" @click='editedChange')
            icon(symbol="cross" @click='editedChange')

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