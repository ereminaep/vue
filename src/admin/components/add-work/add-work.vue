<template lang="pug">
  card(:title="title[type]")
    form(slot="content" id="addWord").form
      .form-side
        img-load
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
        tags(:items='currentWork.tags')
        .buttons
          appButton(plain title="Отмена" @click.prevent="reset")
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
          title:'',
          description:'',
          link:'',
          photo:'',
          tags:''
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
    "currentWork.photo":value=>{
      return Validator.value(value).required("Загрузите фото работы");
    }
  },
  data() {
    return {
      title:{
        'add':"Добавление работы",
        'edit':"Редактирование работы"
      },
      currentWork:{
        title:this.work.title,
        description:this.work.description,
        link:this.work.link,
        photo:this.work.photo,
        tags:this.work.tags
      },
      image:''
    }
  },
  methods:{
    onDrop: function(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      this.createFile(files[0]);
      },
    onChange(e) {
        var files = e.target.files;
        this.createFile(files[0]);
      },
    createFile(file) {
      if (!file.type.match('image.*')) {
        alert('Select an image');
        return;
      }
      var img = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function(e) {
        vm.image = e.target.result;
      }
      reader.readAsDataURL(file);
    },
    removeFile() {
        this.image = '';
    },
    async reset(){
      
    },
    async send(){

      if ((await this.$validate()) === false) return;

      let formData = new FormData();

      formData.append('title', this.currentWork.title);
      formData.append('techs', '123123');
      formData.append('link', this.currentWork.link);
      formData.append('photo', this.currentWork.photo.target.files[0]);
      formData.append('description', this.currentWork.description);

      this.$emit('add',formData);
    },
    onDrop(){

    }
  }
}
</script>

<style lang="postcss" scoped src="./add-work.pcss"></style>