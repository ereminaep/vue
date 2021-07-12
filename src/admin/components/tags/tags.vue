<template lang="pug">
    div
        app-input(
            @input="addTag" 
            v-model="tagsString" 
            :errorMessage="errorMessage"
            title="Добавление тэга")
            
        .tags
            div(v-for="(tag, index) in tags")
                tag(
                    :title='tag' 
                    :index:='index' 
                    @remove='removeTag(index)')
</template>

<script>
import appInput from "../input/input.vue";
import tag from "../tag/tag.vue";

export default {
    components:{appInput,tag},
    props:{
        items:{
            type:String,
            default:''
        },
        errorMessage:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            tagsString:'',
            tags:[],
            title:''
        }
    },
    methods:{
        addTag() {
            this.tags=this.tagsString.trim().split(',');
            if(this.tags[this.tags.length-1]==''){
                this.tags.splice(this.tags.length-1, 1);
            }
            console.log(this.tagsString);
            console.log(this.tags);
            this.$emit('add-tag',this.tagsString);
        },
        removeTag(index){
           this.tags.splice(index, 1);
           this.tagsString=this.tags.join(',');
        }
    },
    created(){
        
    },
    mounted(){
        this.tagsString=this.items;
        this.addTag();
    }
}
</script>

<style lang="postcss" src="./tags.pcss" scoped>
</style>