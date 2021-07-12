import addReview from "./add-review.vue";
import { action } from "@storybook/addon-actions";

export default {
    title: "add-review",
    components: { addReview }
};

const methods = {
    onSave: action("onSave"),
    onReset: action("onReset"),
    onLoad: action("onLoad")
}

export const defaultView = () => ({
    components: { addReview },
    props: {
        review: {
            default: {
                id: 1,
                author: "Сайт школы",
                text: "Описание Описание Описание Описание Описание",
                photo: "https://bipbap.ru/wp-content/uploads/2018/04/0_7c773_e4f21b71_XL-640x400.jpg",
                occ: 'html, css, vue'
            }
        }
    },
    template: `
    <add-review :work='work' @load="onLoad" @save='onSave' @reset='onReset'/>
  `,
    methods

});

defaultView.story = {
    name: "Стандартный вид"
}