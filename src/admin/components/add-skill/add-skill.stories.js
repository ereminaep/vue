import addSkill from "./add-skill.vue";

export default {
    title: "addSkills",
    components: { addSkill }
};

export const defaultView = () => ({
    components: { addSkill },
    props: {
        skill: {
            type: Object,
            default: {
                name: '',
                percent: '',
                etited: false
            }
        }
    },
    template: `
    <addSkill/>
  `,
});

defaultView.story = {
    name: "Стандартный вид"
}