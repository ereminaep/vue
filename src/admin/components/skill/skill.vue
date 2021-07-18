<template lang="pug">
  .item(v-if="edited")
    .name
      app-input(
        v-model="oldSkill.title"
        :errorMessage="validation.firstError('oldSkill.title')"
      ).input
    .percent  
      app-input(
        v-model="oldSkill.percent"
        :errorMessage="validation.firstError('oldSkill.percent')"
      ).input
      span.percent-symbol--focus %
    .admin-skill-icons.icons
      icon(symbol="tick" @click="updateSkill")
      icon(symbol="cross" @click='editedChange')        
  .item(v-else)
      .name(v-html='skill.title')
      .percent
        .percent-value {{skill.percent}}
        .percent-symbol %
      .icons
        icon(grayscale symbol="pencil" @click='editedChange')
        icon(grayscale symbol="trash" @click="$emit('remove-skill',skill)")
</template>

<script>
import icon from "../icon/icon";
import appInput from "../input/input.vue";
import {Validator, mixin as ValidatorMixin} from 'simple-vue-validator';

export default {
  mixins:[ValidatorMixin],
  components:{icon,appInput},
  props: {
    skill: {
      type: Object
    }
  },
  validators:{
    "oldSkill.title":value=>{
      return Validator
        .value(value).required("Введите название скилла");
    },
    "oldSkill.percent":value=>{
      return Validator.value(value)
        .required("Введите процент")
        .integer("Процент должен быть числом")
        .lessThan(100,"Процент не может быть больше 100")
    },
  },
  data() {
    return {
        edited:false,
        oldSkill:{
           id:this.skill.id,
           title:this.skill.title,
           percent:this.skill.percent,
           category:this.skill.category       
        }
    }
  },
  methods:{
    editedChange(e){
      this.edited = !this.edited; 
    },
    async updateSkill(){
      if ((await this.$validate()) === false) return;
      this.$emit('change-skill',this.oldSkill);
      this.editedChange();
    }
  },
}
</script>

<style lang="postcss" scoped src="./skill.pcss"></style>