<template>
  <div class="edit-line-component" :class="{'blocked' : blocked}">
    <div class="title" v-if="editmode === false">
      <div class="text">{{category}}</div>
      <div class="icon">
        <icon symbol="pencil" grayscale @click="editmode = true"></icon>
      </div>
    </div>
    <div v-else class="title">
      <div class="input">
        <app-input
          placeholder="Название новой группы"
          :value="category"
          :errorText="errorText"
          @input="$emit('input', $event)"
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
          <icon symbol="cross" @click="$emit('remove-category',id)"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    category: {
      type: String,
    },
    id:{
      type:Number,
      default:0
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
      editmode: this.editModeByDefault,
      title: this.value
    };
  },
  methods:{
    editCategory(){
      this.editmode=false;
      if(this.id) {
        this.$emit('edit-category',{title:this.category,id:this.id}); 
      } else {
        this.$emit('create-category',this.category); 
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