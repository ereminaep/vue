<template lang="pug">
    div.admin-skill-groups
        .admin-skill-group(v-for='item in skills') 
            card
                h1(slot="title") {{item.group}}
                h1(slot="content") Содержимое
    
</template>

<script>

import card from "../card/card";

export default {
    components:{ card},
    props:{
        skills:{
            type:Array,
            default:[]
        }
    }
}
</script>

<style lang="postcss" scoped src="./skill-group.pcss"></style>