import tabs from "./tabs.vue";
import tab from "../tab/tab.vue";

export default {
    title: "tabs",
    component: { tabs },
};

export const defaultView = () => ({
    components: { tabs, tab },
    template: `
    <tabs>
    <tab name="Services" :selected="true">
      <h1>What we do</h1>
    </tab>
    <tab name="Pricing">
      <h1>How much we do it for</h1>
    </tab>
    <tab name="About Us">
      <h1>Why we do it</h1>
    </tab>
  </tabs>
  `,
});