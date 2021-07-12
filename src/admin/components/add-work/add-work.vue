<template lang="pug">
  card(:title="title[type]")
    form(slot="content" id="addWord").form
      .form-side
        img-load(
          @load="onLoad" 
          :photo='currentWork.photo'
          :errorMessage="validation.firstError('currentWork.photo')"
        )
      .form-side
        appInput(
          title="Название" 
          v-model="currentWork.title"
           :errorMessage="validation.firstError('currentWork.title')"
          ).work-input
        appInput(
          title="Ссылка" 
          v-model="currentWork.link"
          :errorMessage="validation.firstError('currentWork.link')"
          ).work-input
        appInput(
          title="Описание" 
          v-model="currentWork.description" 
          fieldType="textarea"
          :errorMessage="validation.firstError('currentWork.description')"
        ).work-input
        tags(
          :items='currentWork.techs' 
          @add-tag='addTag'
          :errorMessage="validation.firstError('currentWork.techs')"
          )
        .buttons
          appButton(plain title="Отмена" @click.prevent="$emit('reset')")
          appButton(title="Отправить" @click.prevent="send")

</template>

<script>
import icon from "../icon/icon";
import card from "../card/card";
import appInput from "../input/input";
import appButton from "../button/button";
import tags from "../tags/tags";
import imgLoad from "../img-load/img-load";

import {Validator, mixin as ValidatorMixin} from 'simple-vue-validator';

export default {
  mixins:[ValidatorMixin],
  components:{icon,card,appInput,tags,appButton,imgLoad},
  props: {
    work: {
      type: Object,
      default:function(){
        return {
          id:0,
          title:'',
          description:'',
          link:'',
          photo:'',
          techs:''
        }
      }
    },
    type:{
      type: String
    }
  },
  validators:{
    "currentWork.title":value=>{
      return Validator.value(value).required("Введите название работы");
    },
    "currentWork.description":value=>{
      return Validator.value(value).required("Введите описание работы");
    },
    "currentWork.link":value=>{
      return Validator.value(value).required("Введите ссылку на работу");
    },
    "currentWork.techs":value=>{
      return Validator.value(value).required("Введите тэги");
    },
    "currentWork.photo":value=>{
      return Validator.value(value).required("Загрузите изображение");
    }
  },
  data() {
    return {
      title:{
        'add':"Добавление работы",
        'edit':"Редактирование работы"
      },
      currentWork:{},
      image:''
    }
  },
  methods:{
    async send() {

     if ((await this.$validate()) === false) return;
      let formData = new FormData();

      formData.append('title', this.currentWork.title);
      formData.append('techs', this.currentWork.techs);
      formData.append('link', this.currentWork.link);
      formData.append('photo', this.currentWork.photo);
      formData.append('description', this.currentWork.description);

      if(this.type=='add') {
       this.$emit('add',formData);
      } else {
       this.$emit('edit',{
          id:this.currentWork.id,
          data:formData
        }
      );
      }

    },
    onLoad(image){
      this.currentWork.photo=image;
    },
    addTag(tags){
      this.currentWork.techs=tags;
    }
  },
  created(){
    this.currentWork.title = (this.work.title!=undefined) ? this.work.title : '';
    this.currentWork.description = (this.work.description!=undefined) ? this.work.description : '';
    this.currentWork.link = (this.work.link!=undefined) ? this.work.link : '';
    this.currentWork.techs = (this.work.techs!=undefined) ? this.work.techs : '';
    this.currentWork.photo = (this.work.photo!=undefined) ? this.work.photo : '';
    this.currentWork.id = (this.work.id!=undefined) ? this.work.id : '';
  }
}
</script>

<style lang="postcss" scoped src="./add-work.pcss"></style>