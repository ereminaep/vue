<template lang="pug">
    div
      div.image-load
        div(v-if="image" class="drop-image" :style="{backgroundImage:`url(${image})`}")
      appButton(typeAttr="file" plain name="image"  @change="onChange" title="Загрузить")
      span(v-if="errorMessage") {{errorMessage}}
</template>

<script>

import appInput from "../../../input/input.vue";
import appButton from "../../../button/button.vue";

export default {
    props:{
        photo:{
            type:String,
            default:""
        },
        errorMessage:{
            type:String,
            default:""         
        }
    },
    components:{appInput,appButton}, 
    data(){
        return{
            image: ''
        }
    },
    methods: {
      onDrop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        this.createFile(files[0]);
      },
      onChange(e) {
        var files = e.target.files;
        this.createFile(files[0]);
        this.$emit('load',files[0]);
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
        this.$emit('removeImg');
      }
    },
    created(){
        if(this.photo) {
            this.image='https://webdev-api.loftschool.com/'+this.photo;
        }
    }
}
</script>

<style lang="postcss" scoped src="./img-load.pcss"></style>