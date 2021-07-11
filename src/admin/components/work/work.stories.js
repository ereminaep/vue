import work from "./work.vue";
import { action } from "@storybook/addon-actions";

export default {
    title: "work",
    components: { work }
};

const methods = {
    onEdit: action("onEdit"),
    onRemove: action("onRemove")
}

export const defaultView = () => ({
    components: { work },
    props: {
        work: {
            default: {
                id: 1,
                name: "Сайт школы",
                description: "Описание Описание Описание Описание Описание",
                link: "https://google.com",
                photo: "https://bipbap.ru/wp-content/uploads/2018/04/0_7c773_e4f21b71_XL-640x400.jpg",
                tags: ['html', 'css', 'vue']
            }
        }
    },
    template: `
    <work :work='work' />
  `,
    methods

});

defaultView.story = {
    name: "Стандартный вид"
}