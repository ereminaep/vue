<template lang="pug">
    .admin-skill-item(v-if="skill.edited")
      app-input(v-model="skill.name")
      app-input(v-model="skill.percent")
      .admin-skill-icons
        icon(symbol="tick" @click='editedChange')
        icon(symbol="cross" @click='editedChange')        
    .admin-skill-item(v-else)
        .admin-skill-name(v-html='skill.name')
        .admin-skill-percent(v-html='skill.percent+" %"')
        .admin-skill-icons
          icon(grayscale symbol="pencil" @click='editedChange')
          icon(grayscale symbol="trash")

</template>

<script>
import icon from "../icon/icon";
import appInput from "../input/input.vue";

export default {
  components:{icon,appInput},
  props: {
    skill: {
      type: Object,
      default: {
          name:'',
          percent:'',
          edited:false
      }
    }
  },
  methods:{
    editedChange(){
      this.skill.edited = !this.skill.edited;
    }
  }
}
</script>

<style lang="postcss" scoped src="./skill.pcss"></style>