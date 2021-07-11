<template>
  <div class="edit-line-component" :class="{'blocked' : blocked}">
    <div class="title" v-if="editmode === false">
      <div class="text">{{group.category}}</div>
      <div class="icon">
        <icon symbol="pencil" grayscale @click="editmode = true"></icon>
      </div>
    </div>
    <div v-else class="title">
      <div class="input">
        <app-input
            v-model="group.category"
            placeholder="Название новой группы"
            :errorMessage="validation.firstError('group.category')"
            @keydown.native.enter="editCategory"
            autofocus="autofocus"
            no-side-paddings="no-side-paddings"
        ></app-input>
      </div>
      <div class="buttons">
        <div class="button-icon">
          <icon symbol="tick" @click="editCategory"></icon>
        </div>
        <div class="button-icon">
          <icon symbol="cross" @click="$emit('remove-category',{category:group.id,empty:blocked}); editmode = false"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {Validator, mixin as ValidatorMixin} from 'simple-vue-validator';

export default {
  mixins:[ValidatorMixin],
  props: {
    value: {
      type: String,
      default: ""
    },
    group:{
      type: Object
    },
    errorText: {
      type: String,
      default: ""
    },
    editModeByDefault:Boolean,

    blocked: Boolean
  },
  data() {
    return {
      editmode: this.editModeByDefault
    }
  },
  validators:{
    "group.category":value=>{
      return Validator.value(value).required("Введите название ");
    }
  },
  methods:{
    async editCategory(){

      if(this.group.category==undefined){
        this.group.category='';
      }

      if ((await this.$validate()) === false) return;

      if(this.group.id) {
        this.$emit('edit-category',{title:this.group.category,id:this.group.id}); 
        this.editmode=false;
      } else {
        this.$emit('create-category',this.group.category); 
        this.editmode=false;
      }
    }
  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input")
  }
};
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>