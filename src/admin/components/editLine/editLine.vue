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
            :errorText="errorText"
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
          <icon symbol="cross" @click="$emit('remove-category',group.id); editmode = false"></icon>
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
  methods:{
    editCategory(){
      this.editmode=false;
      if(this.group.id) {
        this.$emit('edit-category',{title:this.group.category,id:this.group.id}); 
      } else {
        this.$emit('create-category',this.group.category); 
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