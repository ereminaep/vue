<template lang="pug">
    .add-skill(:class="{blocked:blocked}")
        appInput(v-model="skill.name" placeholder="Новый навык" required :errorMessage='errorMessage.name').input-name
        appInput(v-model="skill.percent" required :errorMessage='errorMessage.percent').input-percent
        iconedBtn(type="iconed" @click="addNewSkil($event)" title='')
</template>

<script>

import addSkill from "../add-skill/add-skill";
import appInput from "../input/input.vue";
import iconedBtn from "../button/button";

export default {
  components:{addSkill,appInput,iconedBtn},
  props: {
      skill:{
          type:Object,
          default:function(){
                return{
                    name:'',
                    percent:'100',
                    etited:false
                }
          }
      },
      blocked:Boolean

  },
  data(){
      return{
          errorText:'Заполните поле',
          errorMessage:{
              name:"",
              percent:""
          }
      }
  },
  methods:{
      addNewSkil(e){
          let valid=true;
          if(this.skill.name=='') {
              valid=false;
              this.errorMessage.name=this.errorText;
          } else{
              this.errorMessage.name='';
          }
          if(this.skill.percent=='') {
              valid=false;
              this.errorMessage.percent=this.errorText;
          } else {
              this.errorMessage.percent=''
          }
          if(!valid) {
              e.preventDefault();
          }
      }
  }
}
</script>

<style lang="postcss" scoped src="./add-skill.pcss"></style>