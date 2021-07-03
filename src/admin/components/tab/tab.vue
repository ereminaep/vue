<template lang="pug">
    div(v-show="isActive")
        slot
</template>

<script>
    export default {
    props: {
        name: { required: true },
        link:{default:"#"},
        selected: { default: false}
    },
    
    data() {
        return {
            isActive: false
        };
    },
    
    computed: {
        href() {
            return this.link.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    }
}
</script>

<style lang="postcss" src="./tab.pcss" scoped>
</style>