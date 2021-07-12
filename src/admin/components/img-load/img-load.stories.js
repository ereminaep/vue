import imgLoad from "./img-load.vue";

export default {
    title: "img-load",
    component: { imgLoad },
};

export const defaultView = () => ({
    components: { imgLoad },
    template: `
    <img-load/>
  `,
});