<template lang="pug">
    div.admin-skill-groups
        .admin-skill-group(v-for='item in skills') 
            card
                .admin-skill-group-title(slot="title") 
                    span {{item.group}}
                    .admin-skill-icons 
                        icon(symbol="tick")
                        icon(symbol="cross")
                .admin-skill-list(slot="content")
                    .admin-skill-item(v-for='skill in item.items')
                        .admin-skill-name(v-html='getSkillById(skill).name')
                        .admin-skill-percent(v-html='getSkillById(skill).percent+" %"') 
                        .admin-skill-icons 
                            icon(grayscale symbol="pencil")
                            icon(grayscale symbol="trash")

    
</template>

<script>

import card from "../card/card";
import icon from "../icon/icon";

export default {
    components:{card,icon},
    props:{
        skills:{
            type:Array,
            default:[]
        },
        skillsNames:{
            type:Object,
            default:{}
        }
    },
    methods: {
        getSkillById(id) {
            return {
                name:this.skillsNames[id].name,
                percent:this.skillsNames[id].percent
            }
        }
    }
}
</script>

<style lang="postcss" scoped src="./skill-groups.pcss"></style>