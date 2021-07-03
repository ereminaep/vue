<template lang="pug">
    div
        .admin-block-head
            .admin-block-title {{title.block}} «{{title.name}}»
            round-btn(type='iconed' @click='addGroup')
        .admin-skill-groups
            .admin-skill-group(v-if="newGroup").admin-skill-group-table
                skillGroup(:group='{}' :skills='{}')
            .admin-skill-group(v-for='item in groups').admin-skill-group-table
                skillGroup(:group='item' :skills='skills')
</template>

<script>

import card from "../card/card";
import skillGroup from "../skill-group/skill-group";
import roundBtn from "../button/button";


export default {
    components:{card,skillGroup,roundBtn},
    data() {
        return{
            newGroup:false
        }
    },
    props:{
        groups:{
            type:Array,
            default:[{
            }]
        },
        skills:{
            type:Object,
            default:{}
        },
        title:{
            type:Object,
            default:{
                name:'Название блока',
                block:'Блок'
            }
        }
    },
    methods:{
        addGroup(){
            this.newGroup=!this.newGroup;
        }
    }
}
</script>

<style lang="postcss" scoped src="./skill-groups.pcss"></style>