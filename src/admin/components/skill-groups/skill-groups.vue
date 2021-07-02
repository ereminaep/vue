<template lang="pug">
    .admin-skill-groups
        .admin-skill-group(v-for='item in groups')
            skillGroup(:group='item' :skills='skills')
</template>

<script>

import card from "../card/card";
import skillGroup from "../skill-group/skill-group";

export default {
    components:{card,skillGroup},
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
    }
}
</script>

<style lang="postcss" scoped src="./skill-groups.pcss"></style>