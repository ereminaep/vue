<template lang="pug">
    div
        app-input(@input="addTag" v-model="tagsString" title="Добавление тэга")
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
    },
    data(){
        return{
            tagsString:'',
            tags:[]
        }
    },
    methods:{
        addTag() {
            this.tags=this.tagsString.trim().split(',');
        },
        removeTag(index){
           this.tags.splice(index, 1);
           this.tagsString=this.tags.join(',');
        }
    }
}
</script>

<style lang="postcss" src="./tags.pcss" scoped>
</style>