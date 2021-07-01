<template lang="pug">
    div
        .tabs-admin.tabs-admin--top
            div.container
                ul.tabs-admin__list
                    li(v-for="tab in tabs" :class="{ 'is-active': tab.isActive }").tabs-admin__item
                        a(:href="tab.href" @click="selectTab(tab)").tabs-admin__link {{ tab.name }}

        .tabs-details
            slot
</template>

<script>
    export default {
        data() {
            return {tabs: [] };
        },
        
        created() {
            this.tabs = this.$children;
        },
        methods: {
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name == selectedTab.name);
                });
            }
        }
}
</script>

<style lang="postcss" src="./tabs.pcss" scoped>
</style>