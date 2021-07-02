import skillGroups from "./skill-groups.vue";
import card from "../card/card.vue";

export default {
    title: "skillGroups"
};

export const defaultView = () => ({
    components: { skillGroups },
    template: `
    <skillGroup>
  `
});

defaultView.story = {
    name: "Стандартный вид"
}