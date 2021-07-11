<template lang="pug">
    .add-skill(:class="{blocked:blocked}")
        appInput(
          v-model="skill.title" 
          placeholder="Новый навык"
          :errorMessage="validation.firstError('skill.title')"
        ).input-name
        appInput(
          v-model="skill.percent"
          :errorMessage="validation.firstError('skill.percent')"
        ).input-percent
        iconedBtn(type="iconed" @click="addSkill" title='')
</template>

<script>

import addSkill from "../add-skill/add-skill";
import appInput from "../input/input.vue";
import iconedBtn from "../button/button";
import { mapMutations  } from 'vuex';
import {Validator, mixin as ValidatorMixin} from 'simple-vue-validator';


export default {
  mixins:[ValidatorMixin],
  components:{addSkill,appInput,iconedBtn},
  data(){
    return {
      skill:{
        title:'',
        percent:''
      }
    }
  },
  validators:{
    "skill.title":value=>{
      return Validator
        .value(value).required("Введите название скилла");
    },
    "skill.percent":value=>{
      return Validator.value(value)
        .required("Введите процент")
        .integer("Процент должен быть числом")
        .lessThan(100,"Процент не может быть больше 100")
    },
  },
  props: {
    blocked:Boolean,
    categoryId:Number
  },
  methods:{
    async addSkill(){
      let skill={
        title:this.skill.title,
        percent:this.skill.percent,
        category:this.categoryId
      }

      if ((await this.$validate()) === false) return;

      this.$emit('add-skill',skill);

      this.skill.title='';
      this.skill.percent=''; 
    }
  }

}
</script>

<style lang="postcss" scoped src="./add-skill.pcss"></style>