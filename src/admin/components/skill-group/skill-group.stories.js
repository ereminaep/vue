import skillGroup from "./skill-group.vue";
import card from "../card/card.vue";

export default {
    title: "skillGroup"
};

export const defaultView = () => ({
    components: { skillGroup },
    template: `
    <skillGroup>
  `,
});

defaultView.story = {
    name: "Стандартный вид"
}