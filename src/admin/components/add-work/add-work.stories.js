import addWork from "./add-work.vue";
import { action } from "@storybook/addon-actions";

export default {
    title: "add-work",
    components: { addWork }
};

const methods = {
    onSave: action("onSave"),
    onReset: action("onReset"),
    onLoad: action("onLoad")
}

export const defaultView = () => ({
    components: { addWork },
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
    <add-work :work='work' @load="onLoad" @save='onSave' @reset='onReset'/>
  `,
    methods

});

defaultView.story = {
    name: "Стандартный вид"
}