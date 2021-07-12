<template lang="pug">
     div
        div(class="drop display-inline align-center" @dragover.prevent @drop="onDrop")
            div(v-if="!image" class="drop-text")
                span Перетащите или загрузите для загрузки изображения
                appButton(typeAttr="file" name="image" @change="onChange" title="Загрузить")
            div(class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }")
                img(:src="image" alt="" class="img")
                appButton(class="btn" @click="removeFile" title="Удалить")
</template>

<script>

import appInput from "../input/input.vue";
import appButton from "../button/button.vue";

export default {
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
      }
    }
}
</script>

<style lang="postcss" scoped src="./img-load.pcss"></style>