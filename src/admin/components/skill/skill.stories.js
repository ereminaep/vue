import skill from "./skill.vue";

export default {
    title: "skill",
    components: { skill }
};

export const defaultView = () => ({
    components: { skill },
    props: {
        skill: {
            default: {
                name: "HTML",
                percent: "50",
                edited: false
            }
        }
    },
    template: `
    <skill :skill="skill"/>
  `,
});

defaultView.story = {
    name: "Стандартный вид"
}

export const editedView = () => ({
    components: { skill },
    props: {
        skill: {
            default: {
                name: "HTML",
                percent: "50",
                edited: true
            }
        }
    },
    template: `
  <skill :skill="skill"/>
`,
});

editedView.story = {
    name: "Редактирование"
}