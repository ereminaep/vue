<template lang="pug">
    div
        app-input(@input="addTag" v-model="items" title="Добавление тэга")
        .tags
            div(v-for="(tag, index) in tags")
                tag(:title='tag' :index:='index' @remove='removeTag(index)')
</template>

<script>
import appInput from "../input/input.vue";
import tag from "../tag/tag.vue";

export default {
    components:{appInput,tag},
    props: {
        items:String
    },
    data(){
        return{
            tagsString:'',
            tags:[]
        }
    },
    methods:{
        addTag() {
            this.tags=this.items.trim().split(',');
            if(this.tags[this.tags.length-1]==''){
                this.tags.splice(this.tags.length-1, 1);
            }
        },
        removeTag(index){
           this.tags.splice(index, 1);
           this.items=this.tags.join(',');
        }
    },
    mounted(){
        this.addTag();
    }
}
</script>

<style lang="postcss" src="./tags.pcss" scoped>
</style>