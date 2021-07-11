import addWork from "./add-work.vue";
import { action } from "@storybook/addon-actions";

export default {
    title: "work",
    components: { addWork }
};

const methods = {
    onApprove: action("onApprove"),
    onRemove: action("onRemove")
}

export const defaultView = () => ({
    components: { addWork },
    props: {},
    template: `
    <add-work ' />
  `,
    methods

});

defaultView.story = {
    name: "Стандартный вид"
}