<template lang="pug">
    div
        .head
            .title Блок «Обо мне» 
            round-btn(type='iconed' @click='addGroup')
        .skill-groups
            .skill-group(v-if="newGroup")
                skillGroup(empty)
            .skill-group(v-for='item in groups')
                skillGroup(:group='item' :skills='skills')
</template>

<script>

import skillGroup from "../skill-group/skill-group";
import roundBtn from "../button/button";


export default {
    components:{skillGroup,roundBtn},
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