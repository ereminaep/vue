import skillGroupTitle from "./skill-group-title.vue";

export default {
    title: "skillGroupTitle"
};

export const defaultView = () => ({
    components: { skillGroupTitle },
    props: {
        title: {
            type: String,
            default: 'Frontend'
        },
        edited: {
            type: Boolean,
            default: false
        }
    },
    template: `
    <skillGroupTitle :title='title' :edited='edited'/>
  `,
});

defaultView.story = {
    name: "Стандартный вид"
}