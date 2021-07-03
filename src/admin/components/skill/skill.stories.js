import skill from "./skill.vue";
import { action } from "@storybook/addon-actions";

export default {
    title: "skill",
    components: { skill }
};

const methods = {
    onApprove: action("onApprove"),
    onRemove: action("onRemove")
}

export const defaultView = () => ({
    components: { skill },
    props: {
        skill: {
            default: {
                id: 1,
                name: "HTML",
                percent: "50",
                edited: false
            }
        }
    },
    template: `
    <skill @approve='onApprove' :skill="skill" @remove='onRemove'/>
  `,
    methods

});

defaultView.story = {
    name: "Стандартный вид"
}