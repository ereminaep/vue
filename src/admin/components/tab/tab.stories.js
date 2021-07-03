import tab from "./tab.vue";

export default {
    title: "tab",
    component: { tab },
};

export const defaultView = () => ({
    components: { tab },
    template: `
    <tab name="Services" :selected="true">
      <h1>What we do</h1>
    </tab>
  `,
});