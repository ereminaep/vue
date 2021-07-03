import tags from "./tags.vue";


export default {
    title: "tags",
    components: { tags }
}

export const defaultView = () => ({
    components: { tags },
    template: `
    <tags title="tags" />
  `,
});

defaultView.story = {
    name: "Стандартный вид"
};