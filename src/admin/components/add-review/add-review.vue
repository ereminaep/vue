<template lang="pug">
  card(:title="title[type]")
    form(slot="content" id="addWord").form
      .form-side
        img-load(
          @load="onLoad" 
          type="round"
          @removeImg="onRemoveImg"
          :photo='currentReview.photo'
          :errorMessage="validation.firstError('currentReview.photo')"
        ).img-load
      .form-side
        .form-line
          appInput(
            title="Имя автора" 
            v-model="currentReview.author"
            :errorMessage="validation.firstError('currentReview.author')"
            ).review-input
          appInput(
            title="Титул автора" 
            v-model="currentReview.occ"
            :errorMessage="validation.firstError('currentReview.occ')"
            ).review-input
        appInput(
          title="Отзыв" 
          v-model="currentReview.text" 
          fieldType="textarea"
          :errorMessage="validation.firstError('currentReview.text')"
        ).review-textarea
        .buttons
          appButton(plain title="Отмена" @click.prevent="$emit('reset')")
          appButton(title="Отправить" @click.prevent="send")

</template>

<script>
import icon from "../icon/icon";
import card from "../card/card";
import appInput from "../input/input";
import appButton from "../button/button";
import imgLoad from "../img-load/img-load";

import {Validator, mixin as ValidatorMixin} from 'simple-vue-validator';

export default {
  mixins:[ValidatorMixin],
  components:{icon,card,appInput,appButton,imgLoad},
  props: {
    review: {
      type: Object,
      default:function(){
        return {
          id:0,
          author:'',
          text:'',
          occ:'',
          photo:''
        }
      }
    },
    type:{
      type: String
    }
  },
  validators:{
    "currentReview.author":value=>{
      return Validator.value(value).required("Введите автора отзыва");
    },
    "currentReview.text":value=>{
      return Validator.value(value).required("Введите текст отзыва");
    },
    "currentReview.occ":value=>{
      return Validator.value(value).required("Введите должность автора");
    },
    "currentReview.photo":value=>{
      return Validator.value(value).required("Загрузите изображение");
    }
  },
  data() {
    return {
      title:{
        'add':"Новый отзыв",
        'edit':"Отредактировать отзыв"
      },
      currentReview:{},
      image:''
    }
  },
  methods:{
    async send() {

     if ((await this.$validate()) === false) return;
      let formData = new FormData();

      formData.append('author', this.currentReview.author);
      formData.append('occ', this.currentReview.occ);
      formData.append('photo', this.currentReview.photo);
      formData.append('text', this.currentReview.text);

      if(this.type=='add') {
       this.$emit('add',formData);
      } else {
       this.$emit('edit',{
          id:this.currentReview.id,
          data:formData
        }
      );
      }

    },
    onLoad(image){
      this.currentReview.photo=image;
    },
    onRemoveImg(){
      this.currentReview.photo='';
    }
  },
  created(){
    this.currentReview.author = (this.review.author!=undefined) ? this.review.author : '';
    this.currentReview.text = (this.review.text!=undefined) ? this.review.text : '';
    this.currentReview.occ = (this.review.occ!=undefined) ? this.review.occ : '';
    this.currentReview.photo = (this.review.photo!=undefined) ? this.review.photo : '';
    this.currentReview.id = (this.review.id!=undefined) ? this.review.id : '';
  }
}
</script>

<style lang="postcss" scoped src="./add-review.pcss"></style>